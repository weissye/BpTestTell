from abc import ABC, abstractmethod
from typing import Dict, Any

class IEmitter(ABC):
    """
    Abstract Base Class for all Emitters.
    Ensures that every emitter (JS, Python, Doc) follows the same contract.
    """
    def __init__(self, output_dir: str, context: Dict[str, Any]):
        self.output_dir = output_dir
        self.context = context

    @abstractmethod
    def emit(self) -> None:
        """
        Main entry point for generation.
        """
        pass