import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Cpu, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} />,
      skills: ['Node.js', 'Express.js', 'MongoDB',],
    },
    {
      title: 'Programming Languages',
      icon: <Cpu size={32} />,
      skills: ['JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'SQL'],
    },

    {
      title: 'Databases',
      icon: <Database size={32} />,
      skills: ['MySQL (SQL)', 'MongoDB (NoSQL)'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Palette size={32} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman','Tailwind CSS', ],
    },
    {
      title: 'Additional Skills',
      icon: <Lightbulb size={32} />,
      skills: ['Data Structures & Algorithms', 'REST APIs', 'Authentication (Clerk)', 'Performance Optimization', 'Problem Solving'],
    },
  ];

  return (
    <div className="pt-24">
      <div className="section-container">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto mb-16 border border-gray-200 dark:border-gray-700"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              My Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base">
              A comprehensive overview of my technical skills and expertise
            </p>
          </motion.div>
        </AnimatedSection>
        
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection key={categoryIndex} className="mb-20" delay={0.1 * categoryIndex}>
            <div className="flex items-center mb-8">
              <div className="text-primary-600 dark:text-primary-400 mr-4">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {skill.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-900 dark:text-gray-100 font-medium">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;