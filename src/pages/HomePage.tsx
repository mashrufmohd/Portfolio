import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, AnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, BookOpen, ArrowRight } from 'lucide-react';

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
    { icon: <Github size={20} />, url: 'https://github.com/mashrufmohd', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mohammad-mashruf', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/Mashruf1475501', label: 'Twitter' },
    { icon: <BookOpen size={20} />, url: 'https://takeuforward.org/profile/mashruf', label: 'TakeUForward' },
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
                className="text-4xl sm:text-5xl lg:text-[4.1rem] font-black leading-[0.9] tracking-[-0.06em] mb-6"
              >
                <span className="block text-gray-900 dark:text-white">Hi, I&apos;m</span>
                <span className="block text-primary-600 dark:text-primary-400">Mohd Mashruf</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block mt-2 text-gray-900 dark:text-white"
                >
                  Full-Stack Developer
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="block mt-2 text-primary-600 dark:text-primary-400"
                >
                  AI/ML Enthusiast
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
              >
                I’m a developer with a strong foundation in Python, data analysis, AI-powered application development, backend engineering, and modern web technologies. I enjoy building practical software, working with data, and turning ideas into usable products, dashboards, and AI workflows.
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
                  <a
                    href="/docs/CV_Mohd_Mashruf.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    My Resume
                  </a>
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
              className="flex justify-center -mt-4 lg:-mt-8"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src="/image/linkedin_profile.png"
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