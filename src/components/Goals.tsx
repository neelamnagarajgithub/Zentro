import React from 'react';
import { Target, TrendingUp, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: 'Extend Runway to 12 Months',
      description: 'Increase operational runway from current 8.2 months to 12 months',
      target: 12,
      current: 8.2,
      unit: 'months',
      deadline: '2024-09-30',
      priority: 'high',
      status: 'in_progress',
      progress: 68,
      actions: [
        'Reduce burn rate by 15%',
        'Increase revenue by 20%',
        'Optimize vendor payments'
      ]
    },
    {
      id: 2,
      title: 'Reduce Monthly Burn Rate',
      description: 'Cut monthly expenses from ₹7.6L to ₹6.5L',
      target: 650000,
      current: 760000,
      unit: '₹',
      deadline: '2024-06-30',
      priority: 'high',
      status: 'in_progress',
      progress: 45,
      actions: [
        'Audit software subscriptions',
        'Renegotiate vendor terms',
        'Optimize marketing spend'
      ]
    },
    {
      id: 3,
      title: 'Increase Monthly Revenue',
      description: 'Grow monthly revenue from ₹8.9L to ₹12L',
      target: 1200000,
      current: 890000,
      unit: '₹',
      deadline: '2024-08-31',
      priority: 'medium',
      status: 'planning',
      progress: 25,
      actions: [
        'Launch new product line',
        'Expand to 2 new cities',
        'Improve customer retention'
      ]
    },
    {
      id: 4,
      title: 'Maintain 98% Compliance Score',
      description: 'Keep compliance score above 98% throughout the year',
      target: 98,
      current: 96,
      unit: '%',
      deadline: '2024-12-31',
      priority: 'medium',
      status: 'on_track',
      progress: 85,
      actions: [
        'Automate all tax filings',
        'Monthly compliance reviews',
        'Update documentation'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-zentro-success/20 text-zentro-success';
      case 'on_track': return 'bg-zentro-accent-primary/20 text-zentro-accent-primary';
      case 'in_progress': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'planning': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'at_risk': return 'bg-zentro-alert/20 text-zentro-alert';
      default: return 'bg-zentro-text-secondary/20 text-zentro-text-secondary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-zentro-alert/20 text-zentro-alert';
      case 'medium': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'low': return 'bg-zentro-success/20 text-zentro-success';
      default: return 'bg-zentro-text-secondary/20 text-zentro-text-secondary';
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '₹') {
      return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `${value}${unit}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Financial Goals</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <Target className="w-4 h-4" />
          AI-Powered Goal Tracking
        </div>
      </div>

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <Target className="w-5 h-5 text-zentro-accent-primary" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Active Goals</p>
              <p className="text-2xl font-bold text-zentro-accent-primary">4</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">Currently tracking</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">On Track</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Meeting targets</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Needs Attention</p>
              <p className="text-2xl font-bold text-yellow-600">2</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Requires action</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Avg Progress</p>
              <p className="text-2xl font-bold text-purple-600">56%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Across all goals</p>
        </div>
      </div>

      {/* Goals List */}
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                      {goal.priority} priority
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                      {goal.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Current vs Target */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Current</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatValue(goal.current, goal.unit)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Target</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {formatValue(goal.target, goal.unit)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Deadline</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(goal.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Items */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Actions</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {goal.actions.map((action, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Goal Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">AI Goal Insights</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Revenue Growth Opportunity</h4>
              <p className="text-gray-600">Based on seasonal patterns, increasing marketing spend by 20% in Q2 could accelerate your revenue goal by 6 weeks</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Burn Rate Optimization</h4>
              <p className="text-gray-600">Implementing all suggested cost optimizations could achieve your burn rate goal 2 months early</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Timeline Adjustment</h4>
              <p className="text-gray-600">Consider extending the revenue goal deadline by 1 month to ensure sustainable growth without compromising quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;