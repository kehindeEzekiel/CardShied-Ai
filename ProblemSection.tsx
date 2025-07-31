import React from 'react';
import { AlertTriangle, CreditCard, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            ATM Fraud is a Growing Threat
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Criminals are using sophisticated methods to steal from ATMs, 
            causing billions in losses worldwide every year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatisticsCard
            icon={<DollarSign className="w-6 h-6 text-white" />}
            title="Global Losses"
            value="$2.5B"
            subtitle="Lost to ATM fraud in 2023"
            color="bg-red-500"
            delay={200}
          />
          <StatisticsCard
            icon={<Users className="w-6 h-6 text-white" />}
            title="Victims"
            value="1.2M"
            subtitle="People affected annually"
            color="bg-orange-500"
            delay={400}
          />
          <StatisticsCard
            icon={<Clock className="w-6 h-6 text-white" />}
            title="Detection Time"
            value="48hrs"
            subtitle="Average time to detect fraud"
            color="bg-yellow-500"
            delay={600}
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <CreditCard className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Card Skimming</h3>
            <p className="text-gray-600">
              Devices installed on ATMs steal card data and PIN numbers from unsuspecting users.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1">
            <TrendingUp className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rising Losses</h3>
            <p className="text-gray-600">
              ATM fraud losses continue to grow with increasingly sophisticated attack methods.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hard to Detect</h3>
            <p className="text-gray-600">
              Traditional security measures often fail to detect fraudulent activities in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;