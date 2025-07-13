import os
from fastapi import FastAPI
from dotenv import load_dotenv
from api import agents_router

load_dotenv()

app = FastAPI()
app.include_router(agents_router)

@app.get("/")
def read_root():
    return {"message": "ZentroAI Backend is running"} 