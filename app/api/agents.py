from fastapi import APIRouter, HTTPException
from agents.data_aggregator import DataAggregatorAgent
from agents.insight_generator import InsightGeneratorAgent
from agents.compliance_agent import ComplianceAgent
from agents.action_agent import ActionAgent
from agents.advisor_agent import AdvisorAgent
from agents.goal_agent import GoalAgent
from schemas.agents import (
    AgentStatusResponse, AgentLogResponse, AgentStartStopResponse, AgentTasksResponse, AgentTask
)
from typing import List
from datetime import datetime

router = APIRouter(prefix="/agents", tags=["agents"])

# In-memory agent registry for demonstration
AGENTS = {
    "agent_data_aggregator": DataAggregatorAgent(),
    "agent_insight_generator": InsightGeneratorAgent(),
    "agent_compliance": ComplianceAgent(),
    "agent_action": ActionAgent(),
    "agent_advisor": AdvisorAgent(),
    "agent_goal": GoalAgent(),
}

@router.get("/status", response_model=AgentStatusResponse)
def get_agents_status():
    # Simulate status for all agents
    agents = [
        {
            "id": agent_id,
            "name": agent.__class__.__name__,
            "status": "active",
            "description": getattr(agent, "__doc__", ""),
            "last_action": None,
            "tasks_completed": None,
            "next_action": None
        }
        for agent_id, agent in AGENTS.items()
    ]
    summary = {
        "total_agents": len(agents),
        "active_agents": len(agents),
        "tasks_today": 0
    }
    return {"success": True, "data": {"agents": agents, "summary": summary}}

@router.get("/{agentId}/logs", response_model=AgentLogResponse)
def get_agent_logs(agentId: str):
    if agentId not in AGENTS:
        raise HTTPException(status_code=404, detail="Agent not found")
    # Simulate logs
    logs = [
        {
            "id": "log_1",
            "timestamp": "2024-04-15T10:28:00Z",
            "level": "info",
            "message": f"{agentId} ran successfully.",
            "details": {}
        }
    ]
    return {"success": True, "data": {"logs": logs}}

@router.post("/{agentId}/start", response_model=AgentStartStopResponse)
def start_agent(agentId: str):
    if agentId not in AGENTS:
        raise HTTPException(status_code=404, detail="Agent not found")
    # Simulate starting the agent
    return {
        "success": True,
        "data": {
            "agent_id": agentId,
            "status": "started",
            "started_at": datetime.utcnow().isoformat() + "Z"
        }
    }

@router.post("/{agentId}/stop", response_model=AgentStartStopResponse)
def stop_agent(agentId: str):
    if agentId not in AGENTS:
        raise HTTPException(status_code=404, detail="Agent not found")
    # Simulate stopping the agent
    return {
        "success": True,
        "data": {
            "agent_id": agentId,
            "status": "stopped",
            "stopped_at": datetime.utcnow().isoformat() + "Z"
        }
    }

@router.get("/tasks", response_model=AgentTasksResponse)
def get_agent_tasks():
    # Simulate agent tasks
    tasks: List[AgentTask] = [
        AgentTask(
            id="task_1",
            agent_id="agent_data_aggregator",
            status="completed",
            description="Sync UPI transactions",
            started_at="2024-04-15T10:00:00Z",
            completed_at="2024-04-15T10:28:00Z"
        ),
        AgentTask(
            id="task_2",
            agent_id="agent_insight_generator",
            status="running",
            description="Update burn rate analysis",
            started_at="2024-04-15T10:25:00Z",
            completed_at=None
        )
    ]
    return {"success": True, "data": {"tasks": tasks}} 