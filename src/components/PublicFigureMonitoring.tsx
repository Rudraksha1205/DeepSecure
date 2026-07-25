import React, { useState } from 'react';
import { Search, Plus, AlertTriangle, CheckCircle, Eye, Star, MapPin, Calendar } from 'lucide-react';
import { ThreatLevelBadge } from './ThreatLevelBadge';

export const PublicFigureMonitoring: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const publicFigures = [
    {
      id: 1,
      name: 'President Johnson',
      title: 'Head of State',
      priority: 'critical' as const,
      status: 'active',
      lastScan: '2 min ago',
      threats: 3,
      location: 'Washington D.C.',
      image: '/api/placeholder/64/64'
    },
    {
      id: 2,
      name: 'General Martinez',
      title: 'Defense Secretary',
      priority: 'high' as const,
      status: 'active',
      lastScan: '5 min ago',
      threats: 1,
      location: 'Pentagon',
      image: '/api/placeholder/64/64'
    },
    {
      id: 3,
      name: 'Dr. Sarah Chen',
      title: 'CDC Director',
      priority: 'moderate' as const,
      status: 'active',
      lastScan: '12 min ago',
      threats: 0,
      location: 'Atlanta',
      image: '/api/placeholder/64/64'
    },
    {
      id: 4,
      name: 'Ambassador Williams',
      title: 'UN Representative',
      priority: 'high' as const,
      status: 'monitoring',
      lastScan: '1 hour ago',
      threats: 2,
      location: 'New York',
      image: '/api/placeholder/64/64'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      figure: 'President Johnson',
      type: 'Video Deepfake',
      platform: 'Social Media',
      time: '15 min ago',
      status: 'investigating'
    },
    {
      id: 2,
      figure: 'General Martinez',
      type: 'Voice Clone',
      platform: 'News Outlet',
      time: '2 hours ago',
      status: 'verified_fake'
    },
    {
      id: 3,
      figure: 'Ambassador Williams',
      type: 'Image Manipulation',
      platform: 'Blog Post',
      time: '4 hours ago',
      status: 'contained'
    }
  ];

  const filteredFigures = publicFigures.filter(figure =>
    figure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    figure.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Public Figure Monitoring</h2>
        <p className="text-gray-400">Real-time surveillance and protection for high-profile individuals</p>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search protected individuals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            <span>Add Individual</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Protected Individuals */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Protected Individuals</h3>
            
            <div className="space-y-4">
              {filteredFigures.map((figure) => (
                <div key={figure.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {figure.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                            <span>{figure.name}</span>
                            {figure.priority === 'critical' && <Star className="h-4 w-4 text-yellow-400" />}
                          </h4>
                          <p className="text-gray-400 text-sm">{figure.title}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{figure.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>Last scan: {figure.lastScan}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-2">
                          <ThreatLevelBadge level={figure.priority} size="sm" />
                          <div className="flex items-center space-x-2">
                            <div className={`h-2 w-2 rounded-full ${
                              figure.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                            }`}></div>
                            <span className="text-xs text-gray-400 capitalize">{figure.status}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <AlertTriangle className="h-4 w-4 text-red-400" />
                            <span className="text-sm text-gray-300">{figure.threats} active threats</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-gray-300">Monitoring</span>
                          </div>
                        </div>
                        
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Alerts</h3>
            
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm">{alert.figure}</h4>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-2">{alert.type}</p>
                  <p className="text-xs text-gray-500 mb-3">Source: {alert.platform}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'investigating' ? 'bg-yellow-900 text-yellow-200' :
                      alert.status === 'verified_fake' ? 'bg-red-900 text-red-200' :
                      'bg-green-900 text-green-200'
                    }`}>
                      {alert.status.replace('_', ' ').toUpperCase()}
                    </span>
                    
                    <button className="text-blue-400 hover:text-blue-300 text-xs font-medium">
                      Investigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-center py-2 text-blue-400 hover:text-blue-300 text-sm font-medium border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
              View All Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};