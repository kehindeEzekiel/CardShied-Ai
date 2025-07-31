import React from 'react';
import Navigation from './Navigation';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import SecuritySection from './SecuritySection';
import DemoSection from './DemoSection';
import EmergencyWithdrawal from './EmergencyWithdrawal';
import { USSDService } from './USSDService';
import { AIFraudDetection } from './AIFraudDetection';
import { NigerianBanks } from './NigerianBanks';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProblemSection />
      <SolutionSection />
      <SecuritySection />
      
      {/* New Security Features */}
      <section id="ussd-service" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency USSD Services
            </h2>
            <p className="text-xl text-gray-600">
              Instantly block transactions when your card is compromised
            </p>
          </div>
          <USSDService />
        </div>
      </section>

      <section id="ai-fraud" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Fraud Detection
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI monitoring to prevent POS and ATM fraud
            </p>
          </div>
          <AIFraudDetection />
        </div>
      </section>

      <section id="banks" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Financial Institutions
            </h2>
            <p className="text-xl text-gray-600">
              Complete coverage across Nigeria's banking ecosystem
            </p>
          </div>
          <NigerianBanks />
        </div>
      </section>

      <EmergencyWithdrawal />
      <DemoSection />
    </div>
  );
};

export default AppLayout;