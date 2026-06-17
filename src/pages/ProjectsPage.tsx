import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'frontend',
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 9,
      title: 'GitHub Trending Repo Extension',
      description: 'The Trending Repositories Tracker is a Visual Studio Code extension that allows developers to explore and track trending GitHub repositories directly from their code editor.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['JavaScript', 'TypeScript', 'Tailwind CSS', 'GitHub API Integration'],
      category: 'fullstack',
      demoUrl: 'https://marketplace.visualstudio.com/items?itemName=Trending-Repo-Analyzer.Trending-Repo-Analyzer',
      repoUrl: 'https://github.com/mashrufmohd/Github-Trending-Repo-Extension',
    },
    {
      id: 11,
      title: 'Blue MutualFund',
      description: 'Complete end-to-end financial analysis system for Nifty 100 companies with ML-powered insights including CAGR, ROE, debt analysis, and pros/cons generation.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'Pandas', 'React', 'MongoDB', 'Machine Learning', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://bluemutualfund.in',
      repoUrl: 'https://github.com/mashrufmohd/Blue-MutualFund',
    },
    {
      id: 12,
      title: 'BuildMyResume',
      description: 'Modern ATS-friendly resume builder with beautiful templates, live preview, and one-click PDF export.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'PDF Export'],
      category: 'frontend',
      demoUrl: '',
      repoUrl: 'https://github.com/mashrufmohd/BuildMyResume',
    },
    {
      id: 13,
      title: 'QuickConsult 24/7',
      description: 'Comprehensive telemedicine platform for booking appointments, browsing doctors, and managing profiles with separate portals for patients, doctors, and admins.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://quick-consult24-7.vercel.app',
      repoUrl: 'https://github.com/mashrufmohd/QuickConsult24-7',
    },
    {
      id: 14,
      title: 'Sweet Shop Management System',
      description: 'Full-stack e-commerce platform for a sweet shop with shopping cart, inventory management, admin dashboard, and order processing built with TDD.',
      image: 'https://picsum.photos/id/1080/800/600',
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://sweet-shop-peach.vercel.app',
      repoUrl: 'https://github.com/mashrufmohd/Sweet-shop',
    },
    {
      id: 15,
      title: '5Paisa Stocks Scraper',
      description: 'Automated Python scraper using Playwright to extract stock company names and logos from 5Paisa with infinite scroll, validation, and Excel export.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'Playwright', 'Pandas', 'BeautifulSoup'],
      category: 'backend',
      demoUrl: '',
      repoUrl: 'https://github.com/mashrufmohd/5PAlSA-STOCKS-SCRAPER',
    },
    {
      id: 16,
      title: 'Smart AQI Monitoring',
      description: 'Interactive Air Quality Index dashboard with data visualization, preprocessing, ML prediction (Random Forest, XGBoost), and real-time insights.',
      image: 'https://picsum.photos/id/1015/800/600',
      tags: ['Python', 'Streamlit', 'scikit-learn', 'XGBoost', 'Pandas'],
      category: 'fullstack',
      demoUrl: '',
      repoUrl: 'https://github.com/mashrufmohd/Smart-AQI-Monitoring',
    },
    {
      id: 17,
      title: 'AI Study Buddy',
      description: 'AI-powered study companion featuring personalized explanations, summarization, quiz generation, flashcards, and PDF support.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'TypeScript', 'FastAPI', 'Gemini AI', 'Firebase'],
      category: 'fullstack',
      demoUrl: '',
      repoUrl: 'https://github.com/mashrufmohd/AI-Study-Buddy',
    },
    {
      id: 18,
      title: 'Omniverse - ABFRL Conversational Sales Agent',
      description: 'Retro Brutalist conversational commerce platform with intelligent AI sales agent, natural language cart management, and mock payments.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Next.js', 'FastAPI', 'Gemini', 'MongoDB', 'Qdrant'],
      category: 'fullstack',
      demoUrl: '',
      repoUrl: 'https://github.com/mashrufmohd/Omniverse',
    },
    {
      id: 19,
      title: 'Voice.os - AI Voice Marketing Platform',
      description: 'AI-powered voice marketing platform for building voice agents, managing campaigns, lead handling, and making automated calls with real-time transcription.',
      image: 'https://picsum.photos/id/180/800/600',
      tags: ['React', 'TypeScript', 'Twilio', 'OpenAI Realtime', 'Firebase'],
      category: 'fullstack',
      demoUrl: '',
      repoUrl: 'https://github.com/Hiteshydv001/Voice.os',
    },
    {
      id: 20,
      title: 'TaskFlow - Todo Web',
      description: 'Modern full-stack task management platform with Kanban board, calendar view, analytics dashboard, drag-and-drop functionality, and real-time collaboration features. Built with React, TypeScript, shadcn/ui and Node.js backend.',
      image: 'https://picsum.photos/id/201/800/600', // Clean modern task management / productivity dashboard
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'shadcn/ui', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://todo-web-one-blush.vercel.app',
      repoUrl: 'https://github.com/mashrufmohd/Todo-Web',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend / Tools' },
  ];

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: 'calc(100% - 2rem)',
      transition: { duration: 1, ease: 'easeInOut' }
    }
  };

  return (
    <div className="pt-24">
      <div className="section-container">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto mb-16 border border-gray-200 dark:border-gray-700"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base">
              A showcase of my work, personal projects, and contributions
            </p>
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
      
      {/* Project Approach Section */}
      <AnimatedSection className="section-container mt-24">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold mb-12 text-center">Project Approach</h2>
          
          <div className="max-w-2xl mx-auto relative">
            {[
              {
                title: 'Planning & Research',
                description: 'Every project starts with thorough research and planning to ensure the best approach and technology stack.',
              },
              {
                title: 'Development & Testing',
                description: 'I follow best practices in development with a focus on clean code, performance, and thorough testing.',
              },
              {
                title: 'Deployment & Maintenance',
                description: 'Projects are deployed with CI/CD pipelines and maintained with regular updates and improvements.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="relative mb-12 last:mb-0 group"
              >
                <motion.div 
                  className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-bold z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity, delay: index * 0.4 }
                  }}
                >
                  {index + 1}
                </motion.div>
                
                {index < 2 && (
                  <motion.div
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute left-[14px] top-8 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400 dark:from-primary-500 dark:to-primary-300 overflow-hidden"
                  >
                    <motion.div
                      className="w-full h-2 bg-white opacity-70 rounded-full"
                      animate={{
                        y: ['-100%', '100%'],
                        transition: { duration: 1.5, repeat: Infinity, ease: 'linear' }
                      }}
                    />
                  </motion.div>
                )}
                
                <div className="pl-12 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;