import React from 'react';
import { Shield, AlertTriangle, Eye, Clock, TrendingUp, Users, FileVideo, Database } from 'lucide-react';
import { ThreatLevelBadge } from './ThreatLevelBadge';

export const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Scans Today', value: '1,247', icon: Eye, trend: '+12%' },
    { label: 'Threats Detected', value: '23', icon: AlertTriangle, trend: '+3%' },
    { label: 'Public Figures Monitored', value: '156', icon: Users, trend: '+2%' },
    { label: 'Active Investigations', value: '8', icon: FileVideo, trend: '-1%' },
  ];

  const recentThreats = [
    {
      id: 1,
      subject: 'Political Figure A',
      type: 'Video Deepfake',
      threat: 'critical' as const,
      location: 'Social Media Platform',
      time: '2 min ago',
      confidence: 94
    },
    {
      id: 2,
      subject: 'Military Official B',
      type: 'Audio Synthesis',
      threat: 'high' as const,
      location: 'News Broadcast',
      time: '15 min ago',
      confidence: 87
    },
    {
      id: 3,
      subject: 'Celebrity C',
      type: 'Face Swap',
      threat: 'moderate' as const,
      location: 'Entertainment Site',
      time: '1 hour ago',
      confidence: 73
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Security Dashboard</h2>
        <p className="text-gray-400">Real-time deepfake threat monitoring and analysis</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.trend} from yesterday
                  </p>
                </div>
                <div className="bg-blue-600 rounded-lg p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Threats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span>Recent Threats</span>
            </h3>
            <span className="text-sm text-gray-400">Last 24 hours</span>
          </div>
          
          <div className="space-y-4">
            {recentThreats.map((threat) => (
              <div key={threat.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{threat.subject}</h4>
                    <p className="text-sm text-gray-400">{threat.type}</p>
                  </div>
                  <ThreatLevelBadge level={threat.threat} size="sm" />
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{threat.location}</span>
                  <span>{threat.confidence}% confidence</span>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{threat.time}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Investigate →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <Database className="h-5 w-5 text-green-400" />
              <span>System Status</span>
            </h3>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Operational</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span className="text-gray-300">Detection Engine</span>
              <span className="text-green-400 font-medium">Online</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span className="text-gray-300">Database Connection</span>
              <span className="text-green-400 font-medium">Stable</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span className="text-gray-300">API Response Time</span>
              <span className="text-blue-400 font-medium">127ms</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span className="text-gray-300">Model Accuracy</span>
              <span className="text-green-400 font-medium">94.7%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-300">Last Model Update</span>
              <span className="text-gray-400 font-medium">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};