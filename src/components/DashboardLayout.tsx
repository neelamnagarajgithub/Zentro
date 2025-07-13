import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const getActiveTab = () => {
    const path = location.pathname.slice(1);
    return path || 'dashboard';
  };

  return (
    <div className="flex min-h-screen bg-zentro-bg-primary">
      <Sidebar activeTab={getActiveTab()} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;