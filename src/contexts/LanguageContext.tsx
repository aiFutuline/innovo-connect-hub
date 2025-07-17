import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переводы
const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.participants': 'Участники', 
    'nav.projects': 'Проекты',
    'nav.discussions': 'Обсуждения',
    'nav.profile': 'Профиль',
    
    // Hero
    'hero.title': 'Платформа для инноваций и сотрудничества',
    'hero.subtitle': 'Объединяем предпринимателей, экспертов и инвесторов для создания успешных стартапов',
    'hero.entrepreneurs': 'Предприниматели',
    'hero.entrepreneurs.desc': 'Основатели стартапов и владельцы бизнеса',
    'hero.entrepreneurs.cta': 'Ищете команду?',
    'hero.business': 'Бизнес-эксперты',
    'hero.business.desc': 'Консультанты, маркетологи, финансисты',
    'hero.business.cta': 'Ищете проект?',
    'hero.tech': 'Tech-эксперты',
    'hero.tech.desc': 'Разработчики, дизайнеры, IT-архитекторы',
    'hero.tech.cta': 'Нужен эксперт?',
    'hero.investors': 'Инвесторы',
    'hero.investors.desc': 'Бизнес-ангелы, венчурные фонды',
    'hero.investors.cta': 'Хотите инвестировать?',
    'hero.search': 'Начать поиск',
    'hero.create': 'Создать проект',
    
    // Stats
    'stats.title': 'Наши достижения',
    'stats.subtitle': 'Цифры, которые говорят о нашем успехе',
    'stats.participants': 'Активных участников',
    'stats.projects': 'Успешных проектов',
    'stats.discussions': 'Обсуждений',
    'stats.partnerships': 'Успешных партнерств',
    
    // Testimonials
    'testimonials.title': 'Отзывы наших пользователей',
    'testimonials.subtitle': 'Узнайте, что говорят о нас участники платформы',
    
    // Features
    'features.title': 'Почему выбирают InnoPartners',
    'features.subtitle': 'Все инструменты для успешного сотрудничества в одном месте',
    'features.smart.title': 'Умный поиск',
    'features.smart.desc': 'Находите подходящих партнеров по навыкам, опыту и интересам',
    'features.secure.title': 'Безопасность',
    'features.secure.desc': 'Проверенные участники и защищенные коммуникации',
    'features.collaboration.title': 'Инструменты сотрудничества',
    'features.collaboration.desc': 'Чаты, файлообмен и управление проектами',
    'features.analytics.title': 'Аналитика',
    'features.analytics.desc': 'Отслеживайте прогресс и эффективность партнерств',
    'features.network.title': 'Нетворкинг',
    'features.network.desc': 'Участвуйте в мероприятиях и расширяйте связи',
    'features.support.title': '24/7 Поддержка',
    'features.support.desc': 'Круглосуточная помощь экспертов нашей команды',
    
    // How it works
    'howto.title': 'Как это работает',
    'howto.subtitle': 'Простой процесс от регистрации до успешного партнерства',
    'howto.step1.title': 'Создайте профиль',
    'howto.step1.desc': 'Расскажите о себе, своих навыках и целях',
    'howto.step2.title': 'Найдите партнеров',
    'howto.step2.desc': 'Используйте умный поиск для нахождения подходящих людей',
    'howto.step3.title': 'Начните сотрудничество',
    'howto.step3.desc': 'Общайтесь, планируйте и создавайте вместе',
    'howto.step4.title': 'Достигайте целей',
    'howto.step4.desc': 'Воплощайте идеи в жизнь с надежными партнерами',
    
    // CTA
    'cta.title': 'Готовы начать?',
    'cta.subtitle': 'Присоединяйтесь к тысячам предпринимателей, которые уже нашли своих идеальных партнеров',
    'cta.button': 'Зарегистрироваться бесплатно',
    'cta.note': 'Регистрация займет всего 2 минуты',
    
    // Footer
    'footer.about': 'О платформе',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.participants': 'Participants',
    'nav.projects': 'Projects', 
    'nav.discussions': 'Discussions',
    'nav.profile': 'Profile',
    
    // Hero
    'hero.title': 'Platform for Innovation and Collaboration',
    'hero.subtitle': 'Connecting entrepreneurs, experts, and investors to create successful startups',
    'hero.entrepreneurs': 'Entrepreneurs',
    'hero.entrepreneurs.desc': 'Startup founders and business owners',
    'hero.entrepreneurs.cta': 'Looking for a team?',
    'hero.business': 'Business Experts',
    'hero.business.desc': 'Consultants, marketers, financial experts',
    'hero.business.cta': 'Looking for a project?',
    'hero.tech': 'Tech Experts',
    'hero.tech.desc': 'Developers, designers, IT architects',
    'hero.tech.cta': 'Need an expert?',
    'hero.investors': 'Investors',
    'hero.investors.desc': 'Angel investors, venture funds',
    'hero.investors.cta': 'Want to invest?',
    'hero.search': 'Start Searching',
    'hero.create': 'Create Project',
    
    // Stats
    'stats.title': 'Our Achievements',
    'stats.subtitle': 'Numbers that speak of our success',
    'stats.participants': 'Active Participants',
    'stats.projects': 'Successful Projects',
    'stats.discussions': 'Discussions',
    'stats.partnerships': 'Successful Partnerships',
    
    // Testimonials
    'testimonials.title': 'User Reviews',
    'testimonials.subtitle': 'See what platform members say about us',
    
    // Features
    'features.title': 'Why Choose InnoPartners',
    'features.subtitle': 'All tools for successful collaboration in one place',
    'features.smart.title': 'Smart Search',
    'features.smart.desc': 'Find suitable partners by skills, experience, and interests',
    'features.secure.title': 'Security',
    'features.secure.desc': 'Verified participants and secure communications',
    'features.collaboration.title': 'Collaboration Tools',
    'features.collaboration.desc': 'Chats, file sharing, and project management',
    'features.analytics.title': 'Analytics',
    'features.analytics.desc': 'Track progress and partnership effectiveness',
    'features.network.title': 'Networking',
    'features.network.desc': 'Participate in events and expand your connections',
    'features.support.title': '24/7 Support',
    'features.support.desc': 'Round-the-clock help from our expert team',
    
    // How it works
    'howto.title': 'How It Works',
    'howto.subtitle': 'Simple process from registration to successful partnership',
    'howto.step1.title': 'Create Profile',
    'howto.step1.desc': 'Tell about yourself, your skills and goals',
    'howto.step2.title': 'Find Partners',
    'howto.step2.desc': 'Use smart search to find suitable people',
    'howto.step3.title': 'Start Collaboration',
    'howto.step3.desc': 'Communicate, plan and create together',
    'howto.step4.title': 'Achieve Goals',
    'howto.step4.desc': 'Bring ideas to life with reliable partners',
    
    // CTA
    'cta.title': 'Ready to Start?',
    'cta.subtitle': 'Join thousands of entrepreneurs who have already found their perfect partners',
    'cta.button': 'Sign Up Free',
    'cta.note': 'Registration takes only 2 minutes',
    
    // Footer
    'footer.about': 'About Platform',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};