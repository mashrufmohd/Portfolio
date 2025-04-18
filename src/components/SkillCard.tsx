import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card p-6 flex flex-col items-center"
    >
      <div className="text-primary-600 dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
        <motion.div 
          className="bg-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {level}%
      </span>
    </motion.div>
  );
};

export default SkillCard;