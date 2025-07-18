
import React, { useState } from 'react';
import { MessageSquare, Users, Clock, Heart, Reply, Plus } from 'lucide-react';

const Discussions = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const discussions = [
    {
      id: '1',
      title: 'How to find a technical co-founder for a fintech startup?',
      author: 'Anna Peterson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b75d2a60?w=150&h=150&fit=crop&crop=face',
      content: 'Looking for a technical co-founder for a fintech project. I have a ready business model, completed validation, but need someone to handle the technical side...',
      category: 'Partner Search',
      replies: 24,
      likes: 45,
      views: 320,
      timeAgo: '2 hours ago',
      tags: ['FinTech', 'Partner Search', 'Startup'],
      isHot: true,
    },
    {
      id: '2',
      title: 'Experience raising seed-stage investments',
      author: 'Michael Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Sharing experience from recently closing a $500K seed round. Common mistakes startups make when pitching, how to prepare due diligence...',
      category: 'Investments',
      replies: 18,
      likes: 67,
      views: 450,
      timeAgo: '4 hours ago',
      tags: ['Investments', 'Seed', 'Pitching'],
      isHot: false,
    },
    {
      id: '3',
      title: 'Best practices for B2B idea validation',
      author: 'Elena Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Want to discuss B2B idea validation methods. What works better - customer interviews, landing pages, or something else?',
      category: 'Strategy',
      replies: 31,
      likes: 23,
      views: 280,
      timeAgo: '6 hours ago',
      tags: ['B2B', 'Validation', 'Strategy'],
      isHot: true,
    },
  ];

  const categories = [
    { name: 'All', count: 127 },
    { name: 'Partner Search', count: 45 },
    { name: 'Investments', count: 32 },
    { name: 'Strategy', count: 28 },
    { name: 'Technology', count: 22 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
            <p className="text-gray-600">Share experience, ask questions, and find solutions</p>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
            <Plus size={20} />
            <span>Create Topic</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'popular', name: 'Popular', icon: Heart },
                    { id: 'recent', name: 'Recent', icon: Clock },
                    { id: 'trending', name: 'Trending', icon: MessageSquare },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon size={16} />
                        <span>{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.authorAvatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                          {discussion.title}
                        </h3>
                        {discussion.isHot && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                            🔥 Hot
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="font-medium text-gray-700">{discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.timeAgo}</span>
                        <span>•</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {discussion.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{discussion.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare size={16} />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span>{discussion.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span>{discussion.views} views</span>
                          </div>
                        </div>
                        
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                          <Reply size={16} />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
