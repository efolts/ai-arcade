#!/usr/bin/env python3
"""Deprecated stand-in painter. Upgrade skins come from dress-upgrade-skins.py."""
from pathlib import Path
import runpy

runpy.run_path(str(Path(__file__).with_name("dress-upgrade-skins.py")), run_name="__main__")
