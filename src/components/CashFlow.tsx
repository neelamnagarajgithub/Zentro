import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Eye } from 'lucide-react';

const CashFlow: React.FC = () => {
  const forecasts = [
    { month: 'Jan 2024', inflow: 850000, outflow: 720000, net: 130000 },
    { month: 'Feb 2024', inflow: 920000, outflow: 750000, net: 170000 },
    { month: 'Mar 2024', inflow: 780000, outflow: 680000, net: 100000 },
    { month: 'Apr 2024', inflow: 950000, outflow: 820000, net: 130000 },
    { month: 'May 2024', inflow: 1100000, outflow: 890000, net: 210000 },
    { month: 'Jun 2024', inflow: 890000, outflow: 760000, net: 130000 },
  ];

  const insights = [
    {
      type: 'warning',
      title: 'Cash Flow Risk Detected',
      description: 'Projected cash shortage in Q3 2024 if current burn rate continues',
      impact: 'High',
      recommendation: 'Consider delaying non-essential expenses by 2 months'
    },
    {
      type: 'success',
      title: 'Seasonal Pattern Identified',
      description: 'Revenue typically increases by 15% in Q2 based on 3-year trend',
      impact: 'Medium',
      recommendation: 'Plan inventory and marketing spend accordingly'
    },
    {
      type: 'info',
      title: 'Vendor Payment Optimization',
      description: 'Renegotiating payment terms with top 3 vendors could improve cash flow by 8%',
      impact: 'Medium',
      recommendation: 'Initiate vendor payment term discussions'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Cash Flow Analysis</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <Eye className="w-4 h-4" />
          AI-Powered Insights
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-success/20 rounded-lg border border-zentro-success/30">
              <TrendingUp className="w-5 h-5 text-zentro-success" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Monthly Inflow</p>
              <p className="text-2xl font-bold text-zentro-success">₹8.9L</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">+12% from last month</p>
        </div>
        
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-alert/20 rounded-lg border border-zentro-alert/30">
              <TrendingDown className="w-5 h-5 text-zentro-alert" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Monthly Outflow</p>
              <p className="text-2xl font-bold text-zentro-alert">₹7.6L</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">-3% from last month</p>
        </div>
        
        <div className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <TrendingUp className="w-5 h-5 text-zentro-accent-primary" />
            </div>
            <div>
              <p className="font-semibold text-zentro-text-primary">Net Cash Flow</p>
              <p className="text-2xl font-bold text-zentro-accent-primary">₹1.3L</p>
            </div>
          </div>
          <p className="text-sm text-zentro-text-secondary">+45% from last month</p>
        </div>
      </div>

      {/* Forecast Table */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">6-Month Forecast</h3>
          <p className="text-sm text-zentro-text-secondary">AI-generated cash flow predictions</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zentro-bg-primary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zentro-text-secondary uppercase">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zentro-text-secondary uppercase">Inflow</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zentro-text-secondary uppercase">Outflow</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zentro-text-secondary uppercase">Net</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zentro-text-secondary uppercase">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zentro-border">
              {forecasts.map((forecast, index) => (
                <tr key={index} className="hover:bg-zentro-bg-primary/50">
                  <td className="px-6 py-4 text-sm font-medium text-zentro-text-primary">{forecast.month}</td>
                  <td className="px-6 py-4 text-sm text-zentro-success">₹{(forecast.inflow / 100000).toFixed(1)}L</td>
                  <td className="px-6 py-4 text-sm text-zentro-alert">₹{(forecast.outflow / 100000).toFixed(1)}L</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-medium ${forecast.net > 0 ? 'text-zentro-success' : 'text-zentro-alert'}`}>
                      ₹{(forecast.net / 100000).toFixed(1)}L
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-zentro-success/20 text-zentro-success rounded-full text-xs">
                      {85 + Math.floor(Math.random() * 10)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">AI Insights & Recommendations</h3>
        </div>
        <div className="divide-y divide-zentro-border">
          {insights.map((insight, index) => (
            <div key={index} className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className={`w-5 h-5 mt-1 ${
                  insight.type === 'warning' ? 'text-zentro-accent-secondary' : 
                  insight.type === 'success' ? 'text-zentro-success' : 'text-zentro-accent-primary'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-zentro-text-primary">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High' ? 'bg-zentro-alert/20 text-zentro-alert' :
                      insight.impact === 'Medium' ? 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary' :
                      'bg-zentro-success/20 text-zentro-success'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-zentro-text-secondary mb-2">{insight.description}</p>
                  <p className="text-sm text-zentro-accent-primary font-medium">💡 {insight.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashFlow;