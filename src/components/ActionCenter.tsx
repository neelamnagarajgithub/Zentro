import React from 'react';
import { Zap, CheckCircle, Clock, AlertTriangle, DollarSign, FileText, Users } from 'lucide-react';

const ActionCenter: React.FC = () => {
  const pendingActions = [
    {
      id: 1,
      type: 'payment',
      title: 'Vendor Payment - ABC Suppliers',
      amount: '₹45,000',
      description: 'Regular monthly payment to ABC Suppliers',
      priority: 'high',
      scheduledFor: '2024-04-18',
      status: 'pending_approval',
      icon: DollarSign
    },
    {
      id: 2,
      type: 'filing',
      title: 'GST Return Submission',
      amount: '₹1,24,500',
      description: 'March 2024 GST return ready for submission',
      priority: 'high',
      scheduledFor: '2024-04-20',
      status: 'ready',
      icon: FileText
    },
    {
      id: 3,
      type: 'payroll',
      title: 'Monthly Salary Payment',
      amount: '₹2,85,000',
      description: 'April 2024 salary payment to 12 employees',
      priority: 'medium',
      scheduledFor: '2024-04-30',
      status: 'scheduled',
      icon: Users
    }
  ];

  const recentActions = [
    {
      id: 1,
      title: 'TDS Payment - Q4 2023-24',
      amount: '₹45,200',
      status: 'completed',
      timestamp: '2024-04-15 10:30 AM',
      type: 'payment'
    },
    {
      id: 2,
      title: 'PF Return Filed',
      amount: '₹78,900',
      status: 'completed',
      timestamp: '2024-04-15 09:15 AM',
      type: 'filing'
    },
    {
      id: 3,
      title: 'Delayed Payment - XYZ Corp',
      amount: '₹25,000',
      status: 'delayed',
      timestamp: '2024-04-14 02:30 PM',
      type: 'payment'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-zentro-success/20 text-zentro-success';
      case 'pending_approval': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'ready': return 'bg-zentro-accent-primary/20 text-zentro-accent-primary';
      case 'scheduled': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'delayed': return 'bg-zentro-alert/20 text-zentro-alert';
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Action Center</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <Zap className="w-4 h-4" />
          Automated Actions
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-accent-secondary/20 rounded-lg border border-zentro-accent-secondary/30">
              <Clock className="w-5 h-5 text-zentro-accent-secondary" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Pending Actions</p>
              <p className="text-2xl font-bold text-zentro-accent-secondary">3</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">Require attention</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Completed Today</p>
              <p className="text-2xl font-bold text-green-600">5</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Actions executed</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Total Value</p>
              <p className="text-2xl font-bold text-blue-600">₹4.54L</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Pending actions</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Automation Rate</p>
              <p className="text-2xl font-bold text-purple-600">87%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Actions automated</p>
        </div>
      </div>

      {/* Pending Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Pending Actions</h3>
          <p className="text-sm text-gray-500">Actions requiring approval or attention</p>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingActions.map((action) => {
            const Icon = action.icon;
            return (
              <div key={action.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{action.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(action.priority)}`}>
                          {action.priority} priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
                          {action.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{action.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Amount: {action.amount}</span>
                        <span>Scheduled: {action.scheduledFor}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                      Delay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Actions</h3>
          <p className="text-sm text-gray-500">Recently completed and delayed actions</p>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActions.map((action) => (
            <div key={action.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    action.status === 'completed' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {action.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{action.title}</h4>
                    <p className="text-sm text-gray-500">{action.timestamp}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{action.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
                    {action.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionCenter;