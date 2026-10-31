import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/mashrufmohd', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mohammad-mashruf', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/Mashruf1475501', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:aalammashruf724@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center md:justify-start">
            <Code size={24} className="text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
              Mohd Mashruf
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
            © {currentYear} Mohd Mashruf. All rights reserved.
          </p>

          <div>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 md:justify-end">
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