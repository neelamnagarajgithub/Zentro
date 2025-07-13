import React from 'react';
import { Bot, Activity, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const AgentStatus: React.FC = () => {
  const agents = [
    {
      name: 'Data Aggregator Agent',
      status: 'active',
      description: 'Collecting data from Plaid, Razorpay, and bank APIs',
      lastAction: '2 minutes ago',
      tasksCompleted: 24,
      nextAction: 'Sync UPI transactions'
    },
    {
      name: 'Insight Generator Agent',
      status: 'active',
      description: 'Analyzing cash flow patterns and generating forecasts',
      lastAction: '5 minutes ago',
      tasksCompleted: 18,
      nextAction: 'Update burn rate analysis'
    },
    {
      name: 'Action Agent',
      status: 'pending',
      description: 'Preparing vendor payment of ₹45,000',
      lastAction: '15 minutes ago',
      tasksCompleted: 12,
      nextAction: 'Execute scheduled payment'
    },
    {
      name: 'Compliance Agent',
      status: 'active',
      description: 'Monitoring GST, TDS, and IT filing deadlines',
      lastAction: '1 hour ago',
      tasksCompleted: 8,
      nextAction: 'Prepare GST return draft'
    },
    {
      name: 'Advisor Agent',
      status: 'active',
      description: 'Processing conversational queries and insights',
      lastAction: '3 minutes ago',
      tasksCompleted: 31,
      nextAction: 'Generate daily financial summary'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-zentro-success/20 text-zentro-success';
      case 'pending': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'error': return 'bg-zentro-alert/20 text-zentro-alert';
      default: return 'bg-zentro-text-secondary/20 text-zentro-text-secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Activity className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'error': return <AlertCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">AI Agent Status</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <div className="w-2 h-2 bg-zentro-success rounded-full animate-pulse"></div>
          Multi-Agent System Active
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <Bot className="w-5 h-5 text-zentro-accent-primary" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Total Agents</p>
              <p className="text-2xl font-bold text-zentro-accent-primary">5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-success/20 rounded-lg border border-zentro-success/30">
              <Activity className="w-5 h-5 text-zentro-success" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Active Agents</p>
              <p className="text-2xl font-bold text-zentro-success">4</p>
            </div>
          </div>
        </div>
        
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-accent-secondary/20 rounded-lg border border-zentro-accent-secondary/30">
              <CheckCircle className="w-5 h-5 text-zentro-accent-secondary" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Tasks Today</p>
              <p className="text-2xl font-bold text-zentro-accent-secondary">93</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Details */}
      <div className="space-y-4">
        {agents.map((agent, index) => (
          <div key={index} className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
                  <Bot className="w-6 h-6 text-zentro-accent-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-zentro-text-primary">{agent.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(agent.status)}`}>
                      {getStatusIcon(agent.status)}
                      {agent.status}
                    </span>
                  </div>
                  <p className="text-zentro-text-secondary mb-2">{agent.description}</p>
                  <div className="flex items-center gap-4 text-sm text-zentro-text-secondary">
                    <span>Last action: {agent.lastAction}</span>
                    <span>Tasks completed: {agent.tasksCompleted}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zentro-text-primary">Next Action</p>
                <p className="text-sm text-zentro-text-secondary">{agent.nextAction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentStatus;