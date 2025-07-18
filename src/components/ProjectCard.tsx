
import React from 'react';
import { Calendar, Eye, Heart, MessageSquare, Users, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    author: string;
    authorAvatar: string;
    category: string;
    stage: string;
    funding: string;
    deadline: string;
    views: number;
    likes: number;
    comments: number;
    tags: string[];
    teamSize: number;
    lookingFor: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Idea':
        return 'bg-yellow-100 text-yellow-800';
      case 'Development':
        return 'bg-blue-100 text-blue-800';
      case 'MVP':
        return 'bg-purple-100 text-purple-800';
      case 'Scaling':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={project.authorAvatar}
            alt={project.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-900">{project.author}</h4>
            <p className="text-sm text-gray-500">{project.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStageColor(project.stage)}`}>
          {project.stage}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 text-sm rounded-full border border-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <DollarSign size={16} className="mr-2" />
          <span>{project.funding}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users size={16} className="mr-2" />
          <span>{project.teamSize} in team</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span>Until {project.deadline}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Eye size={16} className="mr-2" />
          <span>{project.views} views</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Looking for:</p>
        <div className="flex flex-wrap gap-2">
          {project.lookingFor.map((role, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-800 px-2 py-1 text-xs rounded-full"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Heart size={16} />
            <span>{project.likes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
            <MessageSquare size={16} />
            <span>{project.comments}</span>
          </button>
        </div>
        
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Join Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
