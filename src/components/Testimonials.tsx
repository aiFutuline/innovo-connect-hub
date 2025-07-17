
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Основатель TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Благодаря InnoPartners я нашла идеального технического партнера для своего стартапа. Теперь мы успешно работаем вместе уже полтора года.',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      role: 'Инвестор',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Отличная платформа для поиска перспективных проектов. Здесь я нашел несколько интересных стартапов для инвестирования.',
      rating: 5
    },
    {
      name: 'Елена Козлова',
      role: 'Технический директор',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Удобный интерфейс и качественная аудитория. Рекомендую всем, кто ищет партнеров для инновационных проектов.',
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="text-blue-500 mr-2" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
