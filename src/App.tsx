import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ThreatAnalysis } from './components/ThreatAnalysis';
import { PublicFigureMonitoring } from './components/PublicFigureMonitoring';
import { SystemConfig } from './components/SystemConfig';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <ThreatAnalysis />;
      case 'monitoring':
        return <PublicFigureMonitoring />;
      case 'settings':
        return <SystemConfig />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;