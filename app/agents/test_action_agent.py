from agents.action_agent import ActionAgent

if __name__ == "__main__":
    agent = ActionAgent()
    result = agent.run()
    print("\nFinal Result:")
    print(result) 