
import React from 'react';
import { Users, Briefcase, MessageSquare, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Активных участников',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      value: '450+',
      label: 'Успешных проектов',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      value: '15,000+',
      label: 'Обсуждений',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Успешных партнерств',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши достижения
          </h2>
          <p className="text-xl text-gray-600">
            Цифры, которые говорят о нашем успехе
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
