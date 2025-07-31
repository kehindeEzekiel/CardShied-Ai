import React from 'react';
import { Brain, Shield, Zap, Eye, Target, Cpu, BarChart3 } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-20 h-20 text-blue-500 mx-auto mb-6 animate-spin-slow" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            AI-Powered Fraud Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Our advanced AI system monitors ATM transactions in real-time, 
            detecting suspicious patterns and preventing fraud before it happens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatisticsCard
            icon={<Target className="w-6 h-6 text-white" />}
            title="Detection Accuracy"
            value="99.7%"
            subtitle="Fraud detection rate"
            color="bg-blue-500"
            delay={200}
          />
          <StatisticsCard
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Response Time"
            value="0.3s"
            subtitle="Average detection speed"
            color="bg-indigo-500"
            delay={400}
          />
          <StatisticsCard
            icon={<BarChart3 className="w-6 h-6 text-white" />}
            title="False Positives"
            value="0.1%"
            subtitle="Minimized disruption"
            color="bg-purple-500"
            delay={600}
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <Eye className="w-10 h-10 text-blue-500 mb-4 group-hover:animate-pulse" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Real-time Monitoring</h3>
            <p className="text-gray-600 text-sm">
              24/7 surveillance of all ATM activities with instant analysis.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <Cpu className="w-10 h-10 text-blue-500 mb-4 group-hover:animate-spin" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Machine Learning</h3>
            <p className="text-gray-600 text-sm">
              Advanced algorithms learn from patterns to improve detection accuracy.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <Zap className="w-10 h-10 text-blue-500 mb-4 group-hover:animate-bounce" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Instant Alerts</h3>
            <p className="text-gray-600 text-sm">
              Immediate notifications when suspicious activity is detected.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <Shield className="w-10 h-10 text-blue-500 mb-4 group-hover:animate-pulse" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Prevention First</h3>
            <p className="text-gray-600 text-sm">
              Stop fraud attempts before any damage occurs to customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;