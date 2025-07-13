import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database, Zap, Users } from 'lucide-react';

const Settings: React.FC = () => {
  const integrations = [
    { name: 'Razorpay', status: 'connected', type: 'payment' },
    { name: 'Plaid', status: 'connected', type: 'banking' },
    { name: 'GST Portal', status: 'connected', type: 'compliance' },
    { name: 'Zoho Books', status: 'pending', type: 'accounting' },
    { name: 'ClearTax', status: 'connected', type: 'compliance' },
    { name: 'WhatsApp Business', status: 'connected', type: 'communication' }
  ];

  const notifications = [
    { type: 'Cash Flow Alerts', enabled: true, description: 'Get notified when cash flow drops below threshold' },
    { type: 'Compliance Deadlines', enabled: true, description: 'Reminders for tax and regulatory filings' },
    { type: 'Payment Confirmations', enabled: true, description: 'Confirmations for automated payments' },
    { type: 'Weekly Reports', enabled: false, description: 'Weekly financial summary reports' },
    { type: 'Agent Actions', enabled: true, description: 'Notifications when agents take actions' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">Settings</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <SettingsIcon className="w-4 h-4" />
          System Configuration
        </div>
      </div>

      {/* Integration Status */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">Integrations</h3>
          <p className="text-sm text-zentro-text-secondary">Connected services and APIs</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-zentro-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
                    <Database className="w-5 h-5 text-zentro-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zentro-text-primary">{integration.name}</h4>
                    <p className="text-sm text-zentro-text-secondary capitalize">{integration.type}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  integration.status === 'connected' 
                    ? 'bg-zentro-success/20 text-zentro-success' 
                    : 'bg-zentro-accent-secondary/20 text-zentro-accent-secondary'
                }`}>
                  {integration.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">Notifications</h3>
          <p className="text-sm text-zentro-text-secondary">Configure alert preferences</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-zentro-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-zentro-text-secondary" />
                  <div>
                    <h4 className="font-semibold text-zentro-text-primary">{notification.type}</h4>
                    <p className="text-sm text-zentro-text-secondary">{notification.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={notification.enabled} />
                  <div className="w-11 h-6 bg-zentro-border peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zentro-accent-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zentro-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zentro-accent-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Agent Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">AI Agent Configuration</h3>
          <p className="text-sm text-gray-500">Customize agent behavior and automation levels</p>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Auto-execute Actions</h4>
                  <p className="text-sm text-gray-500">Allow agents to execute approved actions automatically</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Risk Threshold</h4>
                  <p className="text-sm text-gray-500">Set maximum amount for auto-execution</p>
                </div>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option>₹50,000</option>
                <option>₹1,00,000</option>
                <option>₹2,00,000</option>
                <option>₹5,00,000</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Agent Coordination</h4>
                  <p className="text-sm text-gray-500">Enable cross-agent collaboration</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          <p className="text-sm text-gray-500">Manage security and access controls</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Data Encryption</h4>
                  <p className="text-sm text-gray-500">All data encrypted at rest and in transit</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">API Access</h4>
                  <p className="text-sm text-gray-500">Manage API keys and access tokens</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;