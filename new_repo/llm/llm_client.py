"""
LLM client wrapper for BpTestTell new_repo.

Uses the modern openai>=1.0.0+ client API:
    from openai import OpenAI
    client = OpenAI()

and JSON-mode chat completions:
    client.chat.completions.create(..., response_format={"type": "json_object"})
"""

import os
import json
from dataclasses import dataclass
from typing import Any, Dict, Optional

try:
    from openai import OpenAI
except ImportError as e:
    raise RuntimeError(
        "openai package not installed. Run `pip install openai` inside your venv."
    ) from e


@dataclass
class LLMClient:
    model_name: str = "gpt-4.1-mini"
    temperature: float = 0.1

    def __post_init__(self) -> None:
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise RuntimeError(
                "OPENAI_API_KEY environment variable is not set. "
                "Set it before running the pipeline."
            )

        # Modern client object
        self._client = OpenAI(api_key=api_key)

    def _strip_markdown_fences(self, text: str) -> str:
        """
        Remove ```json ... ``` fences if the model wraps the JSON in Markdown.
        """
        text = text.strip()
        if not text.startswith("```"):
            return text

        lines = text.splitlines()
        # Drop first line if it's a ```...``` fence
        if lines and lines[0].startswith("```"):
            lines = lines[1:]
        # Drop last line if it's a ``` fence
        while lines and lines[-1].startswith("```"):
            lines = lines[:-1]
        return "\n".join(lines).strip()

    def complete_json(
        self,
        system_prompt: str,
        user_prompt: str,
        schema_desc: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Ask the model for a JSON object and return it as a Python dict.

        The `schema_desc` argument is kept for compatibility with callers,
        but we don't rely on it programmatically; it can be baked into the
        prompts upstream if needed.
        """
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ]

        # Use JSON-mode chat completion
        resp = self._client.chat.completions.create(
            model=self.model_name,
            messages=messages,
            temperature=self.temperature,
            response_format={"type": "json_object"},
        )

        content = resp.choices[0].message.content or ""
        content = self._strip_markdown_fences(content)

        try:
            return json.loads(content)
        except json.JSONDecodeError as e:
            # Surface the raw content to help debugging prompt / schema issues
            raise RuntimeError(
                f"LLM did not return valid JSON: {e}\n\nRaw content:\n{content}"
            ) from e
