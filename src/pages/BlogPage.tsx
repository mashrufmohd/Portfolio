import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'How to Build a Responsive Website with Tailwind CSS',
      excerpt: 'Learn how to create a fully responsive website using Tailwind CSS, a utility-first CSS framework that makes styling your projects a breeze.',
      date: 'June 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      category: 'Frontend',
    },
    {
      id: 2,
      title: 'Understanding React Hooks: A Comprehensive Guide',
      excerpt: 'Dive deep into React Hooks and learn how they can simplify your components and make your code more reusable and maintainable.',
      date: 'May 22, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      category: 'React',
    },
    {
      id: 3,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'Learn how to create robust and scalable RESTful APIs using Node.js and Express, with best practices for authentication and error handling.',
      date: 'April 10, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      category: 'Backend',
    },
    {
      id: 4,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'Discover how TypeScript can enhance your JavaScript development experience with static typing, interfaces, and advanced type features.',
      date: 'March 5, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      category: 'TypeScript',
    },
    {
      id: 5,
      title: 'Optimizing Website Performance: A Developer\'s Guide',
      excerpt: 'Learn practical techniques to improve your website\'s performance, from image optimization to code splitting and lazy loading.',
      date: 'February 18, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
      url: '#',
      category: 'Performance',
    },
    {
      id: 6,
      title: 'Getting Started with Framer Motion in React',
      excerpt: 'Explore how to add beautiful animations to your React applications using Framer Motion, a production-ready animation library.',
      date: 'January 30, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      category: 'Animation',
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'Frontend', name: 'Frontend' },
    { id: 'Backend', name: 'Backend' },
    { id: 'React', name: 'React' },
    { id: 'TypeScript', name: 'TypeScript' },
    { id: 'Performance', name: 'Performance' },
    { id: 'Animation', name: 'Animation' },
  ];
  
  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="pt-24">
      <div className="section-container">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Thoughts, tutorials, and insights on web development and technology.
            </p>
            <motion.div
              className="mt-6 h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-1/2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                url={post.url}
                category={post.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        <AnimatedSection className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Want to read more articles?
          </p>
          <motion.a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-semibold rounded-lg shadow-lg hover:from-primary-700 hover:to-primary-900 transition-all duration-300"
          >
            <span>Visit My Medium Blog</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPage;