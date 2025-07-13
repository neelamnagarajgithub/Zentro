from pydantic import BaseModel
from typing import List, Optional, Dict, Any

class AgentStatus(BaseModel):
    id: str
    name: str
    status: str
    description: Optional[str]
    last_action: Optional[str]
    tasks_completed: Optional[int]
    next_action: Optional[str]

class AgentStatusSummary(BaseModel):
    total_agents: int
    active_agents: int
    tasks_today: int

class AgentStatusData(BaseModel):
    agents: List[AgentStatus]
    summary: AgentStatusSummary

class AgentStatusResponse(BaseModel):
    success: bool
    data: AgentStatusData

class AgentLog(BaseModel):
    id: str
    timestamp: str
    level: str
    message: str
    details: Dict[str, Any]

class AgentLogData(BaseModel):
    logs: List[AgentLog]

class AgentLogResponse(BaseModel):
    success: bool
    data: AgentLogData

class AgentStartStopResponse(BaseModel):
    success: bool
    data: Dict[str, Any]

class AgentTask(BaseModel):
    id: str
    agent_id: str
    status: str
    description: str
    started_at: Optional[str]
    completed_at: Optional[str]

class AgentTasksData(BaseModel):
    tasks: List[AgentTask]

class AgentTasksResponse(BaseModel):
    success: bool
    data: AgentTasksData 