from typing import List
from pydantic import BaseModel


class QueryBetaResponse(BaseModel):
    id: str
    title: str
    base_url: str
    describe: str
    image: str
    tags: List[str]


class WarmUpResponse(BaseModel):
    alive: bool
