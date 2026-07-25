import React, { useState } from 'react';
import { Upload, FileVideo, Image, AlertTriangle, CheckCircle, Eye, Download, Flag } from 'lucide-react';
import { ThreatLevelBadge, ThreatLevel } from './ThreatLevelBadge';

export const ThreatAnalysis: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handleFileUpload = (file: File) => {
    setIsAnalyzing(true);
    setAnalysisResults(null);
    
    // Simulate analysis
    setTimeout(() => {
      const mockResults = {
        filename: file.name,
        fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        detectionConfidence: Math.floor(Math.random() * 30) + 70,
        isDeepfake: Math.random() > 0.3,
        threatLevel: ['low', 'moderate', 'high', 'critical'][Math.floor(Math.random() * 4)] as ThreatLevel,
        subjectIdentified: Math.random() > 0.4,
        subjectName: 'Political Figure Delta',
        analysisDetails: {
          faceConsistency: Math.floor(Math.random() * 30) + 70,
          audioVideoSync: Math.floor(Math.random() * 20) + 80,
          compressionArtifacts: Math.floor(Math.random() * 40) + 60,
          blendingQuality: Math.floor(Math.random() * 35) + 65
        },
        recommendations: [
          'Forward to national security team for immediate review',
          'Cross-reference with known deepfake signatures',
          'Monitor source platform for additional content',
          'Alert relevant intelligence agencies'
        ]
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Threat Analysis Center</h2>
        <p className="text-gray-400">Upload media files for comprehensive deepfake detection and security assessment</p>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragging
              ? 'border-blue-400 bg-blue-900/20'
              : 'border-gray-600 hover:border-gray-500'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Upload Media File</h3>
          <p className="text-gray-400 mb-6">
            Drag and drop your video or image file here, or click to browse
          </p>
          <input
            type="file"
            accept="video/*,image/*"
            className="hidden"
            id="file-upload"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors"
          >
            <FileVideo className="h-5 w-5" />
            <span>Choose File</span>
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: MP4, AVI, MOV, JPG, PNG (Max size: 100MB)
          </p>
        </div>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Analyzing Media Content</h3>
            <p className="text-gray-400 mb-4">Running advanced detection algorithms...</p>
            <div className="max-w-md mx-auto">
              <div className="bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-500">Processing: Face detection and analysis</p>
            </div>
          </div>
        </div>
      )}

      {/* Analysis Results */}
      {analysisResults && (
        <div className="space-y-8">
          {/* Summary Card */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Analysis Complete</h3>
                <p className="text-gray-400">File: {analysisResults.filename} ({analysisResults.fileSize})</p>
              </div>
              <ThreatLevelBadge level={analysisResults.threatLevel} size="lg" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  {analysisResults.isDeepfake ? (
                    <AlertTriangle className="h-8 w-8 text-red-400" />
                  ) : (
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {analysisResults.isDeepfake ? 'Deepfake Detected' : 'Authentic Content'}
                    </h4>
                    <p className="text-gray-400">Confidence: {analysisResults.detectionConfidence}%</p>
                  </div>
                </div>
              </div>

              {analysisResults.subjectIdentified && (
                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye className="h-8 w-8 text-blue-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Subject Identified</h4>
                      <p className="text-gray-400">{analysisResults.subjectName}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Flag className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-yellow-400">High-profile individual</span>
                  </div>
                </div>
              )}

              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                    Escalate to Security Team
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Technical Analysis</h4>
              <div className="space-y-4">
                {Object.entries(analysisResults.analysisDetails).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-white font-medium">{value}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          value > 80 ? 'bg-green-500' : value > 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Security Recommendations</h4>
              <div className="space-y-3">
                {analysisResults.recommendations.map((recommendation: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};