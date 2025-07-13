import os
from anthropic import Anthropic
from langchain.llms import OpenAI

class BaseAgent:
    def __init__(self, name: str):
        self.name = name
        self.anthropic_client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
        self.langchain_llm = OpenAI(api_key=os.getenv("LANGCHAIN_API_KEY"))

    def log(self, message: str):
        print(f"[{self.name}] {message}") 