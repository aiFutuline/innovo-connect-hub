
import React from 'react';
import { MapPin, Star, MessageCircle, Users } from 'lucide-react';

interface ParticipantCardProps {
  participant: {
    id: string;
    name: string;
    role: string;
    location: string;
    avatar: string;
    expertise: string[];
    rating: number;
    projects: number;
    description: string;
    verified: boolean;
  };
}

const ParticipantCard = ({ participant }: ParticipantCardProps) => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Предприниматель':
        return 'bg-blue-100 text-blue-800';
      case 'Инвестор':
        return 'bg-green-100 text-green-800';
      case 'Технолог':
        return 'bg-purple-100 text-purple-800';
      case 'Бизнес-эксперт':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={participant.avatar}
            alt={participant.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {participant.verified && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{participant.name}</h3>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getRoleColor(participant.role)}`}>
              {participant.role}
            </span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin size={14} className="mr-1" />
            <span>{participant.location}</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center">
              <Star size={14} className="text-yellow-400 mr-1" />
              <span>{participant.rating}</span>
            </div>
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{participant.projects} проектов</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{participant.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {participant.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {participant.expertise.length > 3 && (
              <span className="text-gray-500 text-xs">+{participant.expertise.length - 3}</span>
            )}
          </div>
          
          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Связаться
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
