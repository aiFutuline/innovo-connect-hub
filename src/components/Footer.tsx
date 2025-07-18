
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IP</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                InnoPartners
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Platform for finding partners, investors, and like-minded individuals for innovative projects. 
              Connecting entrepreneurs, technologists, and business experts to create successful startups.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Facebook size={20} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Twitter size={20} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/participants" className="text-gray-400 hover:text-white transition-colors">Participants</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/discussions" className="text-gray-400 hover:text-white transition-colors">Discussions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400">info@innopartners.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-400">New York, NY, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 InnoPartners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
