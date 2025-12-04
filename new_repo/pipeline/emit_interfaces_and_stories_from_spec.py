from typing import Dict, Any
from pathlib import Path

# Import from the new split modules
from new_repo.pipeline.interface_emitter import emit_interfaces
from new_repo.pipeline.story_emitter import emit_stories

def emit_interfaces_and_stories(spec: Dict[str, Any], out_dir: Path):
    if not isinstance(out_dir, Path):
        out_dir = Path(out_dir)
    
    # Delegate to the specialized emitters
    emit_interfaces(spec, out_dir)
    emit_stories(spec, out_dir)