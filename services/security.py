
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import re

limiter=Limiter(key_func=get_remote_address, default_limits=["120 per hour"], storage_uri="memory://")

def clean_text(value, limit):
    value=str(value or "").strip()
    value=re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]","",value)
    return value[:limit]
