from agents.compliance_agent import ComplianceAgent

if __name__ == "__main__":
    agent = ComplianceAgent()
    result = agent.run()
    print("\nFinal Result:")
    print(result) 