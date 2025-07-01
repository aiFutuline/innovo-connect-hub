
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
      title: 'EcoTrack - Платформа управления углеродным следом',
      description: 'Разрабатываем SaaS-решение для компаний по отслеживанию и снижению углеродных выбросов. Уже есть MVP и первые клиенты.',
      author: 'Анна Петрова',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b75d2a60?w=150&h=150&fit=crop&crop=face',
      category: 'GreenTech',
      stage: 'MVP',
      funding: '$50K-100K',
      deadline: '30.12.2024',
      views: 1250,
      likes: 87,
      comments: 23,
      tags: ['Экология', 'SaaS', 'B2B', 'ESG'],
      teamSize: 4,
      lookingFor: ['CMO', 'Инвестор', 'Backend разработчик'],
    },
    {
      id: '2',
      title: 'MedAI - ИИ-ассистент для диагностики',
      description: 'Система машинного обучения для анализа медицинских изображений и помощи врачам в постановке диагноза.',
      author: 'Михаил Иванов',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      category: 'HealthTech',
      stage: 'Разработка',
      funding: '$100K-500K',
      deadline: '15.01.2025',
      views: 2100,
      likes: 156,
      comments: 45,
      tags: ['ИИ', 'Медицина', 'Computer Vision', 'ML'],
      teamSize: 6,
      lookingFor: ['Data Scientist', 'Медицинский эксперт', 'Seed инвестор'],
    },
    {
      id: '3',
      title: 'StreamLearn - Персонализированное онлайн-обучение',
      description: 'Адаптивная платформа онлайн-образования с ИИ-тьютором, который подстраивается под стиль обучения каждого студента.',
      author: 'Елена Сидорова',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      category: 'EdTech',
      stage: 'Идея',
      funding: '$25K-50K',
      deadline: '01.02.2025',
      views: 890,
      likes: 67,
      comments: 19,
      tags: ['Образование', 'ИИ', 'Персонализация', 'B2C'],
      teamSize: 2,
      lookingFor: ['Frontend разработчик', 'UX/UI дизайнер', 'Педагог'],
    },
  ];

  const categories = ['GreenTech', 'HealthTech', 'EdTech', 'FinTech', 'RetailTech'];
  const stages = ['Идея', 'Разработка', 'MVP', 'Масштабирование'];

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Инновационные проекты</h1>
            <p className="text-gray-600">Изучайте проекты и находите возможности для сотрудничества</p>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
            <Plus size={20} />
            <span>Создать проект</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск проектов..."
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
              <option value="">Все категории</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
            >
              <option value="">Все стадии</option>
              {stages.map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <TrendingUp size={20} />
            <span>Найдено: {filteredProjects.length} проектов</span>
          </div>
          
          <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
            <Filter size={18} />
            <span>Расширенные фильтры</span>
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
