from .base import BaseAgent

class GoalAgent(BaseAgent):
    def __init__(self):
        super().__init__(name="GoalAgent")

    def create_goal(self, title, description, target, current, unit, deadline, priority):
        self.log(f"Creating goal: {title}")
        goal = {
            "id": "goal_2",
            "title": title,
            "description": description,
            "target": target,
            "current": current,
            "unit": unit,
            "deadline": deadline,
            "priority": priority,
            "status": "planning",
            "progress": 0
        }
        self.log(f"Goal created: {goal}")
        return goal

    def summarize_progress(self, goal):
        prompt = f"Summarize the progress for this goal: {goal}"
        self.log("Summarizing progress with LangChain...")
        response = self.langchain_llm(prompt)
        self.log(f"Progress summary: {response}")
        return response

    def run(self, title, description, target, current, unit, deadline, priority):
        goal = self.create_goal(title, description, target, current, unit, deadline, priority)
        summary = self.summarize_progress(goal)
        return {"goal": goal, "progress_summary": summary} 