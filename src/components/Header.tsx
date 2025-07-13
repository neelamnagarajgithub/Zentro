import React, { useState } from 'react';
import { Bell, Search, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();

  const notifications = [
    { id: 1, message: 'GST filing due in 3 days', type: 'warning', time: '2 hours ago' },
    { id: 2, message: 'Payment of ₹45,000 executed successfully', type: 'success', time: '4 hours ago' },
    { id: 3, message: 'Cash flow forecast updated', type: 'info', time: '6 hours ago' },
  ];

  return (
    <header className="bg-zentro-bg-card border-b border-zentro-border px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
            <input
              type="text"
              placeholder="Search transactions, vendors, or ask AI..."
              className="w-full pl-10 pr-4 py-2 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-zentro-text-secondary hover:text-zentro-text-primary hover:bg-zentro-bg-primary rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-zentro-alert rounded-full"></span>
            </button>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 text-zentro-text-secondary hover:text-zentro-text-primary hover:bg-zentro-bg-primary rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-zentro-accent-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-zentro-bg-primary" />
              </div>
              <div className="text-left hidden md:block">
                <div className="text-sm font-medium text-zentro-text-primary">{user?.name}</div>
                <div className="text-xs text-zentro-text-secondary">{user?.company}</div>
              </div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-zentro-bg-card border border-zentro-border rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-zentro-border">
                  <div className="text-sm font-medium text-zentro-text-primary">{user?.name}</div>
                  <div className="text-xs text-zentro-text-secondary">{user?.email}</div>
                </div>
                <button className="w-full px-4 py-2 text-left text-sm text-zentro-text-secondary hover:text-zentro-text-primary hover:bg-zentro-bg-primary flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-sm text-zentro-alert hover:bg-zentro-alert/10 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;