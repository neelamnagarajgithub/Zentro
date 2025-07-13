import React from 'react';
import { Shield, Calendar, CheckCircle, AlertTriangle, Clock, FileText } from 'lucide-react';

const Compliance: React.FC = () => {
  const filings = [
    {
      type: 'GST Return',
      period: 'March 2024',
      dueDate: '2024-04-20',
      status: 'pending',
      amount: '₹1,24,500',
      daysLeft: 3,
      description: 'Monthly GST return filing'
    },
    {
      type: 'TDS Return',
      period: 'Q4 2023-24',
      dueDate: '2024-04-30',
      status: 'draft',
      amount: '₹45,200',
      daysLeft: 13,
      description: 'Quarterly TDS return'
    },
    {
      type: 'Income Tax',
      period: 'AY 2023-24',
      dueDate: '2024-07-31',
      status: 'not_started',
      amount: '₹2,85,000',
      daysLeft: 106,
      description: 'Annual income tax return'
    },
    {
      type: 'PF Return',
      period: 'March 2024',
      dueDate: '2024-04-15',
      status: 'completed',
      amount: '₹78,900',
      daysLeft: -2,
      description: 'Monthly PF return'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-zentro-success/20 text-zentro-success';
      case 'draft': return 'bg-zentro-accent-primary/20 text-zentro-accent-primary';
      case 'pending': return 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary';
      case 'not_started': return 'bg-zentro-text-secondary/20 text-zentro-text-secondary';
      default: return 'bg-zentro-text-secondary/20 text-zentro-text-secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'draft': return <FileText className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      case 'not_started': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (daysLeft: number) => {
    if (daysLeft < 0) return 'text-zentro-text-secondary';
    if (daysLeft <= 7) return 'text-zentro-alert';
    if (daysLeft <= 30) return 'text-zentro-accent-secondary';
    return 'text-zentro-success';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Compliance Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <Shield className="w-4 h-4" />
          Automated Compliance Tracking
        </div>
      </div>

      {/* Compliance Score */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-success/20 rounded-lg border border-zentro-success/30">
              <Shield className="w-5 h-5 text-zentro-success" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Compliance Score</p>
              <p className="text-2xl font-bold text-zentro-success">96%</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">Excellent compliance</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Pending Filings</p>
              <p className="text-2xl font-bold text-yellow-600">2</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Require attention</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">This Month</p>
              <p className="text-2xl font-bold text-blue-600">4</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Filings due</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Completed</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">This quarter</p>
        </div>
      </div>

      {/* Filing Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Filing Status</h3>
          <p className="text-sm text-gray-500">Automated compliance tracking and alerts</p>
        </div>
        <div className="divide-y divide-gray-200">
          {filings.map((filing, index) => (
            <div key={index} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{filing.type}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(filing.status)}`}>
                        {getStatusIcon(filing.status)}
                        {filing.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{filing.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500">Period: {filing.period}</span>
                      <span className="text-gray-500">Amount: {filing.amount}</span>
                      <span className="text-gray-500">Due: {filing.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${getPriorityColor(filing.daysLeft)}`}>
                    {filing.daysLeft > 0 ? `${filing.daysLeft} days left` : 
                     filing.daysLeft === 0 ? 'Due today' : 
                     `${Math.abs(filing.daysLeft)} days overdue`}
                  </p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    {filing.status === 'completed' ? 'View' : 'Process'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Insights</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">100% On-Time Filing Rate</h4>
              <p className="text-gray-600">Your business has maintained perfect compliance for the last 12 months</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Upcoming Deadline Alert</h4>
              <p className="text-gray-600">GST return due in 3 days - draft already prepared and ready for review</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Audit Trail Complete</h4>
              <p className="text-gray-600">All transactions are properly documented and audit-ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;