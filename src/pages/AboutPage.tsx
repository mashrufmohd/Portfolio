import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const timelineItems = [
    {
      year: 'Apr 2016 - Jun 2017',
      title: 'High School (Xth)',
      company: 'Jai Hind Public Higher Secondary School',
      description: 'Graduated with 73% under the Uttar Pradesh Board.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: 'Apr 2019 - Jun 2020',
      title: 'Intermediate (XIIth)',
      company: 'Jai Hind Public Higher Secondary School',
      description: 'Completed with 77.4% under the Uttar Pradesh Board, focusing on foundational academics.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: 'Aug 2022 - Jun 2026 (Expected)',
      title: 'B.E. in Computer Science and Engineering',
      company: 'Chandigarh University',
      description: 'Pursuing a Bachelor’s degree with a CGPA of 7.37, specializing in web development, AI, and software engineering.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: 'May 2024 - Jun 2024',
      title: 'Intern',
      company: 'Chandigarh University',
      description: 'Completed in-house training on Computational Programming with Java, developing and debugging efficient algorithms.',
      icon: <Briefcase size={20} />,
    },
    {
      year: 'Dec 2024 - Present',
      title: 'Contributor',
      company: 'Social Winter of Code',
      description: 'Contributed to AI-based open-source projects, improving features and optimizing performance using JavaScript, React, Next.js, Node.js, and MongoDB.',
      icon: <Briefcase size={20} />,
    },
    {
      year: 'Jan 2025 - Present',
      title: 'Mentor',
      company: 'JGEC Winter of Code (JWoC)',
      description: 'Mentored contributors in frontend and backend open-source projects, guiding development with JavaScript, React, Next.js, Node.js, and MongoDB.',
      icon: <Briefcase size={20} />,
    },
  ];

  const cardDetails = {
    about: {
      title: 'About Me',
      summary: 'Explore my personal background and story.',
      details: {
        name: 'Mohd Mashruf',
        age: '21',
        location: 'Mohali, Punjab, India',
        bio: 'I am a dedicated Frontend Developer with expertise in HTML, CSS, React, and JavaScript, complemented by strong backend skills in Node.js and MongoDB. I specialize in building scalable, efficient web applications and enjoy tackling complex technical challenges. Outside of my professional work, I am an aspiring musician, an enthusiastic gardener, and a keen reader, with a growing interest in cooking as a creative outlet.',

        Interests: 'Technology, music, gardening, reading, and cooking.',
       
      },
      icon: <Calendar size={20} />,
    },
    education: {
      title: 'Education',
      summary: 'Learn about my academic journey and qualifications.',
      details: {
        degree: 'B.E. in Computer Science and Engineering',
        institution: 'Chandigarh University',
        year: '2022 - 2026 (Expected)',
        cgpa: '7.37',
        focus: 'Data Structures, Web Development, AI, Machine Learning',
        achievements: 'Active participant in open-source programs and coding competitions.',
      },
      icon: <GraduationCap size={20} />,
    },
    experience: {
      title: 'Experience',
      summary: 'Discover my professional experience and achievements.',
      details: {
        current: 'Contributor at Social Winter of Code (Dec 2024 - Present)',
        previous: 'Mentor at JGEC Winter of Code (Jan 2025 - Present), Intern at Chandigarh University (May 2024 - Jun 2024)',
        skills: 'JavaScript, React, Next.js, Node.js, MongoDB, Python, OpenCV',
        achievements: 'Improved processing efficiency by 40% in Multi-RAG-Agent Tools, onboarded 15-20 users for Guard AI testing.',
      },
      icon: <Briefcase size={20} />,
    },
    hobbies: {
      title: 'Hobbies & Interests',
      summary: 'Explore my passions and leisure activities.',
      details: {
        hobbies: ['Gardening', 'Reading Books', 'Aspiring Musician'],
        favoriteBooks: 'N/A', // Add your favorite books if desired
        favoriteActivities: 'Tending to my garden, reading insightful books, and playing musical instruments.',
      },
      icon: <Award size={20} />,
    },
    certificates: {
      title: 'Certificates & Achievements',
      summary: 'View my professional certifications and notable achievements.',
      details: {
        certifications: [
          'Learn C++ Programming: Beginner to Advance (Udemy)',
          'Learn JAVA Programming: Beginner to Master (Udemy)',
          'Internet of Things (IoT) (NPTEL)',
          'Innovation Through Design (University of Sydney)',
          'Introduction to Psychology (Yale University)',
          'Introduction to Big Data with Spark and Hadoop (IBM)',
          'Introduction to NoSQL Databases (IBM)',
          'In-House Training: Computational Programming with Java (Chandigarh University)',
        ],
        achievements: [
          'Selected for JGEC Winter of Code Open Source Program',
          'Contributed to Guard AI, selected in JWOC, DWOC, SWOC',
          'Developed GitHub Trending Repo Extension',
        ],
      },
      icon: <Award size={20} />,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        duration: 0.5 
      } 
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 12,
        duration: 0.7,
        bounce: 0.3 
      } 
    },
  };

  return (
    <div className="pt-24 bg-gray-900 min-h-screen">
      <div className="section-container">
        <motion.div 
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-4 rounded-lg bg-gray-800 shadow-md border border-gray-700 max-w-xs mx-auto transition-all duration-500"
        >
          <h1 
            className="text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            My Story
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {Object.entries(cardDetails).map(([key, card], index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl shadow-md text-white cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => setExpandedCard(expandedCard === key ? null : key)}
            >
              <div className="flex items-center mb-4">
                <span className="text-blue-400 mr-3">{card.icon}</span>
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              {!expandedCard || expandedCard !== key ? (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-gray-300"
                >
                  {card.summary}
                </motion.p>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-gray-300"
                >
                  {'certifications' in card.details ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
                      >
                        <h4 className="text-lg font-semibold mb-2">Certifications:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {card.details.certifications.map((cert, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                            >
                              {cert}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: 'easeInOut' }}
                        className="mt-4"
                      >
                        <h4 className="text-lg font-semibold mb-2">Achievements:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {card.details.achievements.map((achieve, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
                            >
                              {achieve}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </>
                  ) : (
                    Object.entries(card.details).map(([detailKey, detailValue], i) => (
                      <motion.p 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeInOut' }}
                        className="mt-2"
                      >
                        {detailKey.charAt(0).toUpperCase() + detailKey.slice(1).replace(/([A-Z])/g, ' $1').trim() + ': '}
                        {Array.isArray(detailValue) 
                          ? detailValue.join(', ') 
                          : typeof detailValue === 'object' 
                            ? JSON.stringify(detailValue) 
                            : detailValue}
                      </motion.p>
                    ))
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <AnimatedSection className="mb-24">
          <motion.div 
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 p-4 rounded-lg bg-gray-800 shadow-md border border-gray-700 max-w-xs mx-auto transition-all duration-500"
          >
            <h2 
              className="text-xl md:text-2xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 bg-clip-text text-transparent"
            >
              My Journey
            </h2>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mx-4"
                      >
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{item.company}</p>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white shadow-lg"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">Personal Interests</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Gardening', description: 'Tending to plants and nurturing green spaces.' },
              { title: 'Reading Books', description: 'Exploring knowledge and stories through literature.' },
              { title: 'Aspiring Musician', description: 'Learning instruments and creating music.' },
            ].map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;