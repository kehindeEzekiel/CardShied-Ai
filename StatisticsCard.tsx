import React, { useState, useEffect } from 'react';

interface StatisticsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
  delay?: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ 
  icon, title, value, subtitle, color, delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState('0');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate numbers
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      if (numericValue) {
        let current = 0;
        const increment = numericValue / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            setAnimatedValue(value);
            clearInterval(interval);
          } else {
            setAnimatedValue(Math.floor(current).toLocaleString());
          }
        }, 30);
      } else {
        setAnimatedValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl transform transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    } hover:shadow-2xl hover:-translate-y-2`}>
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{animatedValue}</div>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default StatisticsCard;