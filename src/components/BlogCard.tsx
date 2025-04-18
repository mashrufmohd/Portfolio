import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  url,
  category,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="card overflow-hidden flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-secondary-500 text-white rounded">
          {category}
        </span>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <Calendar size={16} className="mr-1" />
          <span className="mr-4">{date}</span>
          <Clock size={16} className="mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default BlogCard;