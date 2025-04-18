import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code size={24} className="text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;