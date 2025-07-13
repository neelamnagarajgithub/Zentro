# Zentro API Endpoints Documentation

## Base URL
```
https://api.zentro.ai/v1
```

## Authentication
All API requests require authentication using Bearer tokens:
```
Authorization: Bearer <your_access_token>
```

## Core Endpoints

### Authentication
```http
POST /auth/login
POST /auth/register
POST /auth/refresh
POST /auth/logout
```

### Dashboard
```http
GET /dashboard/overview
GET /dashboard/stats
GET /dashboard/alerts
```

### AI Agents
```http
GET /agents/status
GET /agents/{agentId}/logs
POST /agents/{agentId}/start
POST /agents/{agentId}/stop
GET /agents/tasks
```

### Cash Flow
```http
GET /cashflow/current
GET /cashflow/forecast
GET /cashflow/insights
POST /cashflow/analyze
```

### Compliance
```http
GET /compliance/status
GET /compliance/filings
POST /compliance/file/{type}
GET /compliance/deadlines
```

### Actions
```http
GET /actions/pending
GET /actions/history
POST /actions/{actionId}/approve
POST /actions/{actionId}/reject
POST /actions/execute
```

### AI Advisor
```http
POST /advisor/chat
GET /advisor/insights
GET /advisor/recommendations
```

### Goals
```http
GET /goals
POST /goals
PUT /goals/{goalId}
DELETE /goals/{goalId}
GET /goals/{goalId}/progress
```

### Settings
```http
GET /settings/profile
PUT /settings/profile
GET /settings/integrations
POST /settings/integrations/{service}
DELETE /settings/integrations/{service}
GET /settings/notifications
PUT /settings/notifications
```

---

## Detailed API Specifications

### 1. Authentication Endpoints

#### POST /auth/login
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "company": "TechStart Solutions",
      "role": "founder"
    },
    "tokens": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expires_in": 3600
    }
  }
}
```

#### POST /auth/register
**Request:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "company": "TechStart Solutions"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "company": "TechStart Solutions",
      "role": "founder"
    },
    "tokens": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expires_in": 3600
    }
  }
}
```

### 2. Dashboard Endpoints

#### GET /dashboard/overview
**Response:**
```json
{
  "success": true,
  "data": {
    "stats": {
      "current_balance": 1245000,
      "monthly_burn_rate": 320000,
      "runway_months": 8.2,
      "compliance_score": 96
    },
    "trends": {
      "balance_change": 8.2,
      "burn_rate_change": -5.1,
      "runway_change": 12,
      "compliance_change": 2
    }
  }
}
```

#### GET /dashboard/alerts
**Response:**
```json
{
  "success": true,
  "data": {
    "alerts": [
      {
        "id": "alert_1",
        "type": "warning",
        "message": "GST filing due in 3 days",
        "priority": "high",
        "created_at": "2024-04-15T10:30:00Z"
      },
      {
        "id": "alert_2",
        "type": "info",
        "message": "Vendor payment of ₹45,000 scheduled for tomorrow",
        "priority": "medium",
        "created_at": "2024-04-15T09:15:00Z"
      }
    ]
  }
}
```

### 3. AI Agents Endpoints

#### GET /agents/status
**Response:**
```json
{
  "success": true,
  "data": {
    "agents": [
      {
        "id": "agent_data_aggregator",
        "name": "Data Aggregator Agent",
        "status": "active",
        "description": "Collecting data from Plaid, Razorpay, and bank APIs",
        "last_action": "2024-04-15T10:28:00Z",
        "tasks_completed": 24,
        "next_action": "Sync UPI transactions"
      },
      {
        "id": "agent_insight_generator",
        "name": "Insight Generator Agent",
        "status": "active",
        "description": "Analyzing cash flow patterns and generating forecasts",
        "last_action": "2024-04-15T10:25:00Z",
        "tasks_completed": 18,
        "next_action": "Update burn rate analysis"
      }
    ],
    "summary": {
      "total_agents": 5,
      "active_agents": 4,
      "tasks_today": 93
    }
  }
}
```

#### GET /agents/{agentId}/logs
**Response:**
```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": "log_1",
        "timestamp": "2024-04-15T10:28:00Z",
        "level": "info",
        "message": "Successfully synced 45 transactions from Razorpay",
        "details": {
          "transactions_count": 45,
          "amount_total": 125000
        }
      }
    ]
  }
}
```

### 4. Cash Flow Endpoints

#### GET /cashflow/current
**Response:**
```json
{
  "success": true,
  "data": {
    "current_month": {
      "inflow": 890000,
      "outflow": 760000,
      "net": 130000
    },
    "trends": {
      "inflow_change": 12,
      "outflow_change": -3,
      "net_change": 45
    }
  }
}
```

#### GET /cashflow/forecast
**Response:**
```json
{
  "success": true,
  "data": {
    "forecasts": [
      {
        "month": "2024-05",
        "inflow": 1100000,
        "outflow": 890000,
        "net": 210000,
        "confidence": 87
      },
      {
        "month": "2024-06",
        "inflow": 890000,
        "outflow": 760000,
        "net": 130000,
        "confidence": 85
      }
    ]
  }
}
```

#### GET /cashflow/insights
**Response:**
```json
{
  "success": true,
  "data": {
    "insights": [
      {
        "id": "insight_1",
        "type": "warning",
        "title": "Cash Flow Risk Detected",
        "description": "Projected cash shortage in Q3 2024 if current burn rate continues",
        "impact": "high",
        "recommendation": "Consider delaying non-essential expenses by 2 months"
      }
    ]
  }
}
```

### 5. Compliance Endpoints

#### GET /compliance/status
**Response:**
```json
{
  "success": true,
  "data": {
    "score": 96,
    "pending_filings": 2,
    "this_month_filings": 4,
    "completed_quarter": 12
  }
}
```

#### GET /compliance/filings
**Response:**
```json
{
  "success": true,
  "data": {
    "filings": [
      {
        "id": "filing_1",
        "type": "GST Return",
        "period": "March 2024",
        "due_date": "2024-04-20",
        "status": "pending",
        "amount": 124500,
        "days_left": 3
      }
    ]
  }
}
```

### 6. Actions Endpoints

#### GET /actions/pending
**Response:**
```json
{
  "success": true,
  "data": {
    "actions": [
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
  }
}
```

#### POST /actions/{actionId}/approve
**Request:**
```json
{
  "notes": "Approved for immediate execution"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "action_id": "action_1",
    "status": "approved",
    "execution_scheduled": "2024-04-16T14:00:00Z"
  }
}
```

### 7. AI Advisor Endpoints

#### POST /advisor/chat
**Request:**
```json
{
  "message": "What's my current burn rate and how can I optimize it?",
  "context": {
    "conversation_id": "conv_123"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "Based on your latest data, your monthly burn rate is ₹7.6L, which is 3% lower than last month. Here are my recommendations...",
    "conversation_id": "conv_123",
    "suggestions": [
      "Show me cash flow forecast",
      "Analyze my top expenses"
    ]
  }
}
```

#### GET /advisor/insights
**Response:**
```json
{
  "success": true,
  "data": {
    "insights": [
      {
        "id": "insight_1",
        "title": "Cash Flow Optimization",
        "description": "I've identified 3 opportunities to improve your cash flow by ₹85,000 this month",
        "type": "optimization"
      }
    ]
  }
}
```

### 8. Goals Endpoints

#### GET /goals
**Response:**
```json
{
  "success": true,
  "data": {
    "goals": [
      {
        "id": "goal_1",
        "title": "Extend Runway to 12 Months",
        "description": "Increase operational runway from current 8.2 months to 12 months",
        "target": 12,
        "current": 8.2,
        "unit": "months",
        "deadline": "2024-09-30",
        "priority": "high",
        "status": "in_progress",
        "progress": 68
      }
    ]
  }
}
```

#### POST /goals
**Request:**
```json
{
  "title": "Reduce Monthly Burn Rate",
  "description": "Cut monthly expenses from ₹7.6L to ₹6.5L",
  "target": 650000,
  "current": 760000,
  "unit": "₹",
  "deadline": "2024-06-30",
  "priority": "high"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "goal": {
      "id": "goal_2",
      "title": "Reduce Monthly Burn Rate",
      "description": "Cut monthly expenses from ₹7.6L to ₹6.5L",
      "target": 650000,
      "current": 760000,
      "unit": "₹",
      "deadline": "2024-06-30",
      "priority": "high",
      "status": "planning",
      "progress": 0,
      "created_at": "2024-04-15T10:30:00Z"
    }
  }
}
```

### 9. Settings Endpoints

#### GET /settings/profile
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "user@example.com",
      "company": "TechStart Solutions",
      "role": "founder",
      "created_at": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### GET /settings/integrations
**Response:**
```json
{
  "success": true,
  "data": {
    "integrations": [
      {
        "id": "razorpay",
        "name": "Razorpay",
        "type": "payment",
        "status": "connected",
        "connected_at": "2024-01-20T10:30:00Z"
      },
      {
        "id": "plaid",
        "name": "Plaid",
        "type": "banking",
        "status": "connected",
        "connected_at": "2024-01-22T10:30:00Z"
      }
    ]
  }
}
```

#### POST /settings/integrations/{service}
**Request:**
```json
{
  "credentials": {
    "api_key": "your_api_key",
    "secret": "your_secret"
  },
  "config": {
    "auto_sync": true,
    "sync_frequency": "hourly"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "integration": {
      "id": "zoho_books",
      "name": "Zoho Books",
      "type": "accounting",
      "status": "connected",
      "connected_at": "2024-04-15T10:30:00Z"
    }
  }
}
```

## Error Responses

All endpoints return errors in the following format:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password",
    "details": {}
  }
}
```

### Common Error Codes
- `INVALID_CREDENTIALS` - Authentication failed
- `UNAUTHORIZED` - Access token invalid or expired
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `VALIDATION_ERROR` - Request validation failed
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `INTERNAL_ERROR` - Server error

## Rate Limits
- Authentication endpoints: 5 requests per minute
- Data endpoints: 100 requests per minute
- Chat endpoints: 20 requests per minute

## Webhooks

Zentro supports webhooks for real-time notifications:

### Webhook Events
- `agent.task.completed`
- `cashflow.alert.triggered`
- `compliance.deadline.approaching`
- `action.approval.required`
- `payment.executed`

### Webhook Payload Example
```json
{
  "event": "agent.task.completed",
  "timestamp": "2024-04-15T10:30:00Z",
  "data": {
    "agent_id": "agent_data_aggregator",
    "task_id": "task_123",
    "result": {
      "transactions_synced": 45,
      "amount_total": 125000
    }
  }
}
```