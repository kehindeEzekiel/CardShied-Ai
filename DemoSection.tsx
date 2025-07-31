import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Clock, DollarSign, MapPin, Activity } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

const DemoSection: React.FC = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [detectionCount, setDetectionCount] = useState(1247);

  const simulateDetection = () => {
    setIsDetecting(true);
    setShowAlert(false);
    
    setTimeout(() => {
      setIsDetecting(false);
      setShowAlert(true);
      setDetectionCount(prev => prev + 1);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      simulateDetection();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Activity className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            AI in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            Watch our AI system detect and prevent a suspicious withdrawal attempt in real-time.
          </p>
          <button 
            onClick={simulateDetection}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Simulate Detection
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatisticsCard
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Threats Blocked"
            value={detectionCount.toString()}
            subtitle="This month"
            color="bg-green-500"
            delay={200}
          />
          <StatisticsCard
            icon={<DollarSign className="w-6 h-6 text-white" />}
            title="Money Saved"
            value="$12.3M"
            subtitle="Protected from fraud"
            color="bg-emerald-500"
            delay={400}
          />
          <StatisticsCard
            icon={<Activity className="w-6 h-6 text-white" />}
            title="Uptime"
            value="99.99%"
            subtitle="System availability"
            color="bg-teal-500"
            delay={600}
          />
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Transaction Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold flex items-center text-red-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    $5,000
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold flex items-center text-red-600">
                    <Clock className="w-4 h-4 mr-1" />
                    3:47 AM
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Downtown ATM #247
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">AI Analysis</h3>
              
              {isDetecting && (
                <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg animate-pulse transform scale-105">
                  <div className="flex items-center mb-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500 mr-3"></div>
                    <span className="text-yellow-700 font-semibold">Analyzing transaction...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-yellow-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-yellow-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-2 bg-yellow-200 rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              )}
              
              {showAlert && (
                <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg animate-shake transform scale-105">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mr-3 animate-bounce" />
                    <span className="text-red-700 font-bold">FRAUD DETECTED!</span>
                  </div>
                  <ul className="text-red-600 space-y-2 text-sm">
                    <li>• Unusual withdrawal time (3:47 AM)</li>
                    <li>• Amount exceeds daily limit</li>
                    <li>• Multiple failed PIN attempts</li>
                    <li>• Card not present in system</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg animate-fade-in">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-700 font-semibold">Transaction Blocked</span>
                    </div>
                  </div>
                </div>
              )}
              
              {!isDetecting && !showAlert && (
                <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 animate-pulse" />
                    <span className="text-blue-700 font-semibold">System Ready</span>
                  </div>
                  <p className="text-blue-600 text-sm">
                    AI monitoring system is active and ready to detect suspicious activities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;