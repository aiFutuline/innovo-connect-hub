
import React, { useState } from 'react';
import { Filter, Search, MapPin, Users } from 'lucide-react';
import ParticipantCard from '../components/ParticipantCard';

const Participants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const participants = [
    {
      id: '1',
      name: 'Анна Петрова',
      role: 'Предприниматель',
      location: 'Москва',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b75d2a60?w=150&h=150&fit=crop&crop=face',
      expertise: ['Fintech', 'B2B', 'Стратегия', 'Продажи'],
      rating: 4.8,
      projects: 12,
      description: 'Опытный предприниматель с фокусом на финтех решения. Успешно запустила 3 стартапа, привлекла более $2M инвестиций.',
      verified: true,
    },
    {
      id: '2',
      name: 'Михаил Иванов',
      role: 'Инвестор',
      location: 'Санкт-Петербург',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      expertise: ['Seed', 'Series A', 'DeepTech', 'AI'],
      rating: 4.9,
      projects: 25,
      description: 'Партнер венчурного фонда с портфелем $50M+. Специализация на раннем инвестировании в технологические стартапы.',
      verified: true,
    },
    {
      id: '3',
      name: 'Елена Сидорова',
      role: 'Технолог',
      location: 'Новосибирск',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      expertise: ['Python', 'ML', 'Backend', 'DevOps'],
      rating: 4.7,
      projects: 8,
      description: 'Ведущий разработчик с 8-летним опытом. Эксперт по машинному обучению и архитектуре высоконагруженных систем.',
      verified: false,
    },
    {
      id: '4',
      name: 'Дмитрий Козлов',
      role: 'Бизнес-эксперт',
      location: 'Екатеринбург',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      expertise: ['Маркетинг', 'Growth', 'B2C', 'E-commerce'],
      rating: 4.6,
      projects: 15,
      description: 'Консультант по развитию бизнеса. Помог более 20 компаниям увеличить выручку на 300%+.',
      verified: true,
    },
  ];

  const roles = ['Предприниматель', 'Инвестор', 'Технолог', 'Бизнес-эксперт'];
  const locations = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];

  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         participant.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRole = !selectedRole || participant.role === selectedRole;
    const matchesLocation = !selectedLocation || participant.location === selectedLocation;
    
    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Участники платформы</h1>
          <p className="text-gray-600">Найдите партнеров, инвесторов и экспертов для своих проектов</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск по имени или экспертизе..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Все роли</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Все города</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users size={20} />
            <span>Найдено: {filteredParticipants.length} участников</span>
          </div>
          
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            <Filter size={18} />
            <span>Расширенные фильтры</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredParticipants.map(participant => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participants;
