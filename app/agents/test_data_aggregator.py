from agents.data_aggregator import DataAggregatorAgent

if __name__ == "__main__":
    agent = DataAggregatorAgent()
    result = agent.run()
    print("\nFinal Result:")
    print(result) 