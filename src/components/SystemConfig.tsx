import React, { useState } from 'react';
import { Settings, Database, Shield, Bell, Users, Save, RefreshCw } from 'lucide-react';

export const SystemConfig: React.FC = () => {
  const [activeSection, setActiveSection] = useState('detection');

  const sections = [
    { id: 'detection', label: 'Detection Settings', icon: Shield },
    { id: 'database', label: 'Database Config', icon: Database },
    { id: 'alerts', label: 'Alert System', icon: Bell },
    { id: 'users', label: 'User Management', icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">System Configuration</h2>
        <p className="text-gray-400">Configure detection parameters and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            {activeSection === 'detection' && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Detection Engine Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Detection Sensitivity
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="75"
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-white font-medium">75%</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Higher values increase detection accuracy but may cause false positives</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Model Version
                    </label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>v4.2.1 (Current)</option>
                      <option>v4.1.8 (Stable)</option>
                      <option>v4.3.0-beta (Experimental)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Threat Classification
                    </label>
                    <div className="space-y-3">
                      {['Political Content', 'Military Personnel', 'Law Enforcement', 'Medical Officials'].map((category) => (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-gray-300">{category}</span>
                          <select className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm">
                            <option>Critical</option>
                            <option>High</option>
                            <option>Moderate</option>
                            <option>Low</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'alerts' && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Alert System Configuration</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Notification Channels
                    </label>
                    <div className="space-y-3">
                      {['Email Alerts', 'SMS Notifications', 'Slack Integration', 'Emergency Hotline'].map((channel) => (
                        <div key={channel} className="flex items-center justify-between">
                          <span className="text-gray-300">{channel}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Alert Threshold
                    </label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Threats</option>
                      <option>Moderate and Above</option>
                      <option>High and Critical Only</option>
                      <option>Critical Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Response Team Contacts
                    </label>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="security@agency.gov"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-gray-700">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                <RefreshCw className="h-4 w-4" />
                <span>Reset to Defaults</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Save className="h-4 w-4" />
                <span>Save Configuration</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};