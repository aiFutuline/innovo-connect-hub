import React from 'react';
import { Shield, Zap, Globe, Users, Target, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Advanced security measures to protect your business ideas and personal information',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Fast Matching',
      description: 'AI-powered algorithm finds the perfect partners based on your requirements',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with innovators, investors, and experts from around the world',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Verified Profiles',
      description: 'All members are verified to ensure quality connections and partnerships',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Smart Analytics',
      description: 'Track your project progress and partnership success with detailed insights',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Award,
      title: 'Success Stories',
      description: 'Join hundreds of successful startups that found their perfect match here',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose InnoPartners?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the tools and network you need to turn your innovative ideas into successful businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;