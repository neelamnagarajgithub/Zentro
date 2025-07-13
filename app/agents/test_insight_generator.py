from agents.insight_generator import InsightGeneratorAgent

if __name__ == "__main__":
    # Simulate cashflow data
    cashflow_data = {
        "current_month": {"inflow": 890000, "outflow": 760000, "net": 130000},
        "trends": {"inflow_change": 12, "outflow_change": -3, "net_change": 45}
    }
    agent = InsightGeneratorAgent()
    result = agent.run(cashflow_data)
    print("\nFinal Result:")
    print(result) 