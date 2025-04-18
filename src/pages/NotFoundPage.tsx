import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/" className="btn btn-primary w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline w-full sm:w-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;