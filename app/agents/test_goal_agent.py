from agents.goal_agent import GoalAgent

if __name__ == "__main__":
    agent = GoalAgent()
    result = agent.run(
        title="Reduce Monthly Burn Rate",
        description="Cut monthly expenses from ₹7.6L to ₹6.5L",
        target=650000,
        current=760000,
        unit="₹",
        deadline="2024-06-30",
        priority="high"
    )
    print("\nFinal Result:")
    print(result) 