from agents.advisor_agent import AdvisorAgent

if __name__ == "__main__":
    agent = AdvisorAgent()
    message = "What's my current burn rate and how can I optimize it?"
    context = {"conversation_id": "conv_123"}
    result = agent.run(message, context)
    print("\nFinal Result:")
    print(result) 