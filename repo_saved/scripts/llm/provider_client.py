# scripts\llm\provider_client.py

import os
from typing import Callable

def make_client(provider: str, model: str) -> Callable:
    if provider != "openai":
        raise ValueError(f"Unsupported provider: {provider}")

    try:
        from openai import OpenAI
    except Exception as e:
        raise RuntimeError(f"OpenAI SDK not installed: {e}")

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY is not set")
    client = OpenAI(api_key=api_key)

    def _call(sys_prompt: str, user_payload: str, temperature: float = 0.2, json_mode: bool = False):
        if json_mode:
            r = client.chat.completions.create(
                model=model,
                temperature=temperature,
                response_format={"type": "json_object"},
                messages=[
                    {"role": "system", "content": sys_prompt},
                    {"role": "user",   "content": user_payload},
                ],
            )
        else:
            r = client.chat.completions.create(
                model=model,
                temperature=temperature,
                messages=[
                    {"role": "system", "content": sys_prompt},
                    {"role": "user",   "content": user_payload},
                ],
            )
        return r.choices[0].message.content

    return _call
