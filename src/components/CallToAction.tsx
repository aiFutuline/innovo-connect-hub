import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-36 translate-y-36"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-white" size={48} />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build the Future?
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Join thousands of innovators, entrepreneurs, and investors who are already creating tomorrow's success stories
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group">
            <span>Get Started Today</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
            Learn More
          </button>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-2xl font-bold mb-2">Free to Join</div>
            <div className="text-white/80">No hidden fees or charges</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">24/7 Support</div>
            <div className="text-white/80">We're here to help you succeed</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">Global Community</div>
            <div className="text-white/80">Connect with partners worldwide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;