import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900"
            aria-label="View live demo"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900"
            aria-label="View source code"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;