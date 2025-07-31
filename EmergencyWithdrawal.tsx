import React from 'react';
import { AlertCircle } from 'lucide-react';
import EnhancedEmergencyWithdrawal from './EnhancedEmergencyWithdrawal';

const EmergencyWithdrawal: React.FC = () => {
  return (
    <section id="lost-card" className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AlertCircle className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Lost ATM Card Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't panic! Access your funds securely with our multiple emergency withdrawal methods.
          </p>
        </div>

        <EnhancedEmergencyWithdrawal />
      </div>
    </section>
  );
};

export default EmergencyWithdrawal;