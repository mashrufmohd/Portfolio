import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'Frontend', name: 'Frontend' },
  { id: 'Backend', name: 'Backend' },
  { id: 'DevOps', name: 'DevOps' },
  // Add more categories as needed
];

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