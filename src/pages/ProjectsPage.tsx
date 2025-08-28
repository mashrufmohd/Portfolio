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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'frontend',
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 7,
      title: 'Multi-RAG-Agent Tools',
      description: 'An AI-powered tool enhancing document processing efficiency by 40% using multiple retrieval-augmented generation agents.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      tags: ['Python', 'Streamlit', 'FAISS', 'Hugging Face', 'MongoDB'],
      category: 'fullstack',
      demoUrl: 'https://example.com/multi-rag-agent',
      repoUrl: 'https://github.com/MohdMashruf/Multi-RAG-Agent-Tools',
    },
    {
      id: 8,
      title: 'Guard AI',
      description: 'This project introduces a cutting-edge AI-powered proctoring system designed to maintain fairness, security, and integrity in remote assessments. By leveraging advanced machine learning techniques, this system redefines how online tests are monitored.',
      image: '/image/Screenshot 2025-03-12 003009.png',
      tags: ['Next.js', 'FastAPI', 'MongoDB', 'JWT', 'OpenCV'],
      category: 'fullstack',
      demoUrl: 'https://guard-ai-proctor.vercel.app/',
      repoUrl: 'https://github.com/mashrufmohd/Guard-AI',
    },
    {
      id: 9,
      title: 'GitHub Trending Repo Extension',
      description: 'The Trending Repositories Tracker is a Visual Studio Code extension that allows developers to explore and track trending GitHub repositories directly from their code editor. With powerful filtering and bookmarking capabilities, this extension helps users stay updated on the latest trending projects in various programming languages.',
      image: '/image/Screenshot 2025-03-12 003328.png',
      tags: ['JavaScript', 'TypeScript', 'Tailwind CSS', 'GitHub API Integration'],
      category: 'fullstack', // Changed from 'frontend' to 'fullstack'
      demoUrl: 'https://marketplace.visualstudio.com/items?itemName=Trending-Repo-Analyzer.Trending-Repo-Analyzer',
      repoUrl: 'https://github.com/mashrufmohd/Github-Trending-Repo-Extension',
    },
    {
      id: 10,
      title: 'Movie Rental System',
      description: 'A web-based movie rental system allowing users to browse, rent, and manage movie rentals with a user-friendly interface and secure payment integration.',
      image: '/public/image/movieRentle.png',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      category: 'frontend', // Changed from 'fullstack' to 'frontend'
      demoUrl: 'https://movie-rental-system-green.vercel.app/',
      repoUrl: 'https://github.com/mashrufmohd/Movie-rental-system',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  // Animation variants for the line
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
                {/* Pulsing circle marker */}
                <motion.div 
                  className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-bold z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.4 
                    }
                  }}
                >
                  {index + 1}
                </motion.div>
                
                {/* Animated connecting line */}
                {index < 2 && (
                  <motion.div
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute left-[14px] top-8 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400 dark:from-primary-500 dark:to-primary-300 overflow-hidden"
                  >
                    {/* Flowing particle effect */}
                    <motion.div
                      className="w-full h-2 bg-white opacity-70 rounded-full"
                      animate={{
                        y: ['-100%', '100%'],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear'
                        }
                      }}
                    />
                  </motion.div>
                )}
                
                {/* Content */}
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