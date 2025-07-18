
import React, { useState } from 'react';
import { Plus, Search, Filter, TrendingUp } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  const projects = [
    {
      id: '1',
      title: 'EcoTrack - Carbon Footprint Management Platform',
      description: 'Developing a SaaS solution for companies to track and reduce carbon emissions. Already have MVP and first clients.',
      author: 'Anna Peterson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b75d2a60?w=150&h=150&fit=crop&crop=face',
      category: 'GreenTech',
      stage: 'MVP',
      funding: '$50K-100K',
      deadline: '12.30.2024',
      views: 1250,
      likes: 87,
      comments: 23,
      tags: ['Ecology', 'SaaS', 'B2B', 'ESG'],
      teamSize: 4,
      lookingFor: ['CMO', 'Investor', 'Backend Developer'],
    },
    {
      id: '2',
      title: 'MedAI - AI Assistant for Diagnostics',
      description: 'Machine learning system for analyzing medical images and assisting doctors with diagnosis.',
      author: 'Michael Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      category: 'HealthTech',
      stage: 'Development',
      funding: '$100K-500K',
      deadline: '01.15.2025',
      views: 2100,
      likes: 156,
      comments: 45,
      tags: ['AI', 'Medicine', 'Computer Vision', 'ML'],
      teamSize: 6,
      lookingFor: ['Data Scientist', 'Medical Expert', 'Seed Investor'],
    },
    {
      id: '3',
      title: 'StreamLearn - Personalized Online Learning',
      description: 'Adaptive online education platform with AI tutor that adapts to each student\'s learning style.',
      author: 'Elena Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      category: 'EdTech',
      stage: 'Idea',
      funding: '$25K-50K',
      deadline: '02.01.2025',
      views: 890,
      likes: 67,
      comments: 19,
      tags: ['Education', 'AI', 'Personalization', 'B2C'],
      teamSize: 2,
      lookingFor: ['Frontend Developer', 'UX/UI Designer', 'Educator'],
    },
  ];

  const categories = ['GreenTech', 'HealthTech', 'EdTech', 'FinTech', 'RetailTech'];
  const stages = ['Idea', 'Development', 'MVP', 'Scaling'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesStage = !selectedStage || project.stage === selectedStage;
    
    return matchesSearch && matchesCategory && matchesStage;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Innovative Projects</h1>
            <p className="text-gray-600">Explore projects and find collaboration opportunities</p>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
            <Plus size={20} />
            <span>Create Project</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
            >
              <option value="">All Stages</option>
              {stages.map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <TrendingUp size={20} />
            <span>Found: {filteredProjects.length} projects</span>
          </div>
          
          <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
            <Filter size={18} />
            <span>Advanced Filters</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
