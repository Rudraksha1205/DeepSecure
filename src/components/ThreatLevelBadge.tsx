import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export type ThreatLevel = 'low' | 'moderate' | 'high' | 'critical';

interface ThreatLevelBadgeProps {
  level: ThreatLevel;
  size?: 'sm' | 'md' | 'lg';
}

export const ThreatLevelBadge: React.FC<ThreatLevelBadgeProps> = ({ level, size = 'md' }) => {
  const configs = {
    low: {
      color: 'bg-green-100 text-green-800 border-green-200',
      darkColor: 'bg-green-900 text-green-200 border-green-700',
      icon: CheckCircle,
      label: 'Low Risk'
    },
    moderate: {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      darkColor: 'bg-yellow-900 text-yellow-200 border-yellow-700',
      icon: AlertCircle,
      label: 'Moderate Risk'
    },
    high: {
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      darkColor: 'bg-orange-900 text-orange-200 border-orange-700',
      icon: AlertTriangle,
      label: 'High Risk'
    },
    critical: {
      color: 'bg-red-100 text-red-800 border-red-200',
      darkColor: 'bg-red-900 text-red-200 border-red-700',
      icon: XCircle,
      label: 'Critical Threat'
    }
  };

  const config = configs[level];
  const Icon = config.icon;
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4', 
    lg: 'h-5 w-5'
  };

  return (
    <span className={`inline-flex items-center space-x-1 rounded-full border font-medium ${config.darkColor} ${sizeClasses[size]}`}>
      <Icon className={iconSizes[size]} />
      <span>{config.label}</span>
    </span>
  );
};