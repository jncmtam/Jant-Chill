from fastapi import FastAPI
from pydantic import BaseModel

api  = FastAPI()

class Query(BaseModel):
    text: str
