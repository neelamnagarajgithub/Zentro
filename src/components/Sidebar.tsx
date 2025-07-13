import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Bot, 
  CreditCard, 
  FileText, 
  MessageSquare, 
  Settings, 
  Target,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
    { id: 'agents', label: 'AI Agents', icon: Bot, path: '/agents' },
    { id: 'cashflow', label: 'Cash Flow', icon: TrendingUp, path: '/cashflow' },
    { id: 'compliance', label: 'Compliance', icon: Shield, path: '/compliance' },
    { id: 'actions', label: 'Actions', icon: Zap, path: '/actions' },
    { id: 'advisor', label: 'AI Advisor', icon: MessageSquare, path: '/advisor' },
    { id: 'goals', label: 'Goals', icon: Target, path: '/goals' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="w-64 bg-zentro-bg-card text-zentro-text-primary min-h-screen p-4 border-r border-zentro-border">
      <div className="mb-8">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
            <Bot className="w-6 h-6 text-zentro-accent-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zentro-accent-primary">Zentro</h1>
            <p className="text-sm text-zentro-text-secondary">AI Financial Co-Pilot</p>
          </div>
        </Link>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-zentro-accent-primary text-zentro-bg-primary' 
                  : 'text-zentro-text-secondary hover:bg-zentro-bg-primary hover:text-zentro-text-primary'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;