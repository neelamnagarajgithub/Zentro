import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { 
      label: 'Current Balance', 
      value: '₹12,45,000', 
      change: '+8.2%', 
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-600'
    },
    { 
      label: 'Monthly Burn Rate', 
      value: '₹3,20,000', 
      change: '-5.1%', 
      trend: 'down',
      icon: TrendingDown,
      color: 'text-red-600'
    },
    { 
      label: 'Runway', 
      value: '8.2 months', 
      change: '+12 days', 
      trend: 'up',
      icon: Calendar,
      color: 'text-blue-600'
    },
    { 
      label: 'Compliance Score', 
      value: '96%', 
      change: '+2%', 
      trend: 'up',
      icon: CheckCircle,
      color: 'text-emerald-600'
    },
  ];

  const alerts = [
    { type: 'warning', message: 'GST filing due in 3 days', priority: 'high' },
    { type: 'info', message: 'Vendor payment of ₹45,000 scheduled for tomorrow', priority: 'medium' },
    { type: 'success', message: 'TDS return filed successfully', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Financial Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <div className="w-2 h-2 bg-zentro-success rounded-full animate-pulse"></div>
          Live Data
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border hover:border-zentro-accent-primary/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-zentro-success' : 'text-zentro-alert'}`}>
                  {stat.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-zentro-text-primary">{stat.value}</p>
                <p className="text-sm text-zentro-text-secondary">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alerts */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">Recent Alerts</h3>
        </div>
        <div className="divide-y divide-zentro-border">
          {alerts.map((alert, index) => (
            <div key={index} className="p-4 flex items-center gap-3">
              <AlertTriangle className={`w-5 h-5 ${
                alert.type === 'warning' ? 'text-zentro-alert' : 
                alert.type === 'success' ? 'text-zentro-success' : 'text-zentro-accent-primary'
              }`} />
              <div className="flex-1">
                <p className="text-sm text-zentro-text-primary">{alert.message}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  alert.priority === 'high' ? 'bg-zentro-alert/20 text-zentro-alert' :
                  alert.priority === 'medium' ? 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary' :
                  'bg-zentro-success/20 text-zentro-success'
                }`}>
                  {alert.priority} priority
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">Cash Flow Forecast</h3>
          <p className="text-sm text-zentro-text-secondary">Next 6 months projection</p>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gradient-to-r from-zentro-accent-primary/10 to-zentro-success/10 rounded-lg flex items-center justify-center border border-zentro-border">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-zentro-accent-primary mx-auto mb-2" />
              <p className="text-zentro-text-primary">Interactive cash flow chart</p>
              <p className="text-sm text-zentro-text-secondary">Powered by AI forecasting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;