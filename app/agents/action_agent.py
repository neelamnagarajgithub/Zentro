from .base import BaseAgent

class ActionAgent(BaseAgent):
    def __init__(self):
        super().__init__(name="ActionAgent")

    def get_pending_actions(self):
        self.log("Fetching pending actions...")
        actions = [
            {
                "id": "action_1",
                "type": "payment",
                "title": "Vendor Payment - ABC Suppliers",
                "amount": 45000,
                "description": "Regular monthly payment to ABC Suppliers",
                "priority": "high",
                "scheduled_for": "2024-04-18",
                "status": "pending_approval"
            }
        ]
        self.log(f"Actions: {actions}")
        return actions

    def approve_action(self, action_id, notes="Approved for immediate execution"):
        self.log(f"Approving action {action_id}...")
        # Use LLM to generate approval note
        prompt = f"Write a professional approval note for action {action_id}: {notes}"
        response = self.langchain_llm(prompt)
        self.log(f"Approval note: {response}")
        return {
            "action_id": action_id,
            "status": "approved",
            "execution_scheduled": "2024-04-16T14:00:00Z",
            "note": response
        }

    def run(self):
        actions = self.get_pending_actions()
        if actions:
            approval = self.approve_action(actions[0]["id"])
        else:
            approval = None
        return {"actions": actions, "approval": approval} 