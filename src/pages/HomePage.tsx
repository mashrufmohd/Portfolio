import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, AnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

// Reusable SocialLink component to handle motion value and spring
interface SocialLinkProps {
  link: { icon: JSX.Element; url: string; label: string };
  index: number;
  controls: AnimationControls;
}

const SocialLink = ({ link, index, controls }: SocialLinkProps) => {
  const y = useMotionValue(0);
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const handleHoverStart = () => {
    y.set(-5);
    setTimeout(() => y.set(0), 100);
    setTimeout(() => y.set(-3), 200);
    setTimeout(() => y.set(0), 300);
  };

  return (
    <motion.a
      custom={index}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      style={{ y: ySpring }}
      onHoverStart={handleHoverStart}
      onHoverEnd={() => y.set(0)}
      onClick={(e) => {
        y.set(0);
        e.currentTarget.blur();
      }}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
      aria-label={link.label}
    >
      {link.icon}
    </motion.a>
  );
};

const HomePage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3 },
    }));
  }, [controls]);

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/mashrufmohd', label: 'GitHub' }, // Replace with your GitHub
    { icon: <Linkedin size={20} />, url: 'linkedin.com/in/mohd-mashruf', label: 'LinkedIn' }, // Replace with your LinkedIn
    { icon: <Twitter size={20} />, url: 'https://x.com/Mashruf1475501', label: 'Twitter' }, // Replace with your Twitter
    { icon: <Mail size={20} />, url: 'aalammashruf724@gmail.com', label: 'Email' }, // Replace with your email
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Mohd Mashruf</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block mt-2"
                >
                  Frontend Developer
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
              >
                Results-driven Frontend Developer with expertise in HTML, CSS, React, and JavaScript. Skilled in backend development using Node.js and MongoDB. Passionate about building scalable, user-friendly web applications with modern technologies.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Link to="/contact" className="btn btn-outline">
                    Hire Me
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link to="/projects" className="btn btn-outline">
                    View My Work
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Connect with me:
                </p>
                <div className="flex space-x-4 items-center">
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      link={link}
                      index={index}
                      controls={controls}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src="\image\linkedin_profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;