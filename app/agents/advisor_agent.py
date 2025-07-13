from .base import BaseAgent

class AdvisorAgent(BaseAgent):
    def __init__(self):
        super().__init__(name="AdvisorAgent")

    def chat(self, message, context=None):
        prompt = f"User: {message}\nContext: {context}\nAdvisor:"
        self.log("Generating chat response with Anthropic...")
        response = self.anthropic_client.completions.create(
            model="claude-2",
            prompt=prompt,
            max_tokens=100
        )
        reply = response.completion if hasattr(response, 'completion') else str(response)
        self.log(f"Chat reply: {reply}")
        return reply

    def get_insights(self):
        self.log("Generating insights with LangChain...")
        prompt = "Provide actionable financial insights for a SaaS startup."
        response = self.langchain_llm(prompt)
        self.log(f"Insights: {response}")
        return response

    def get_recommendations(self):
        self.log("Generating recommendations with LangChain...")
        prompt = "List three recommendations to optimize cash flow."
        response = self.langchain_llm(prompt)
        self.log(f"Recommendations: {response}")
        return response

    def run(self, message, context=None):
        chat_reply = self.chat(message, context)
        insights = self.get_insights()
        recommendations = self.get_recommendations()
        return {"chat": chat_reply, "insights": insights, "recommendations": recommendations} 