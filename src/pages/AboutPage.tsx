import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award, Users } from 'lucide-react';
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
      description: 'Pursuing a Bachelor’s degree in Computer Science and Engineering (CSE), currently in 7th semester, with a CGPA of 7.37. Learned web development and software engineering skills.',
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
      year: 'Dec 2024 - Mar 2025',
      title: 'Contributor',
      company: 'Social Winter of Code',
      description: 'Contributed to AI-based open-source projects, improving features and optimizing performance using JavaScript, React, Next.js, Node.js, and MongoDB.',
      icon: <Briefcase size={20} />,
    },
    {
      year: 'Jan 2025 - 15 Mar 2025',
      title: 'Mentor',
      company: 'JGEC Winter of Code (JWoC)',
      description: 'Mentored contributors in frontend and backend open-source projects, guiding development with JavaScript, React, Next.js, Node.js, and MongoDB.',
      icon: <Briefcase size={20} />,
    },
    {
      year: 'Aug 2025 - Present',
      title: 'Project Admin',
      company: 'GirlScript Summer of Code (GSSoC)',
      description: 'Leading and managing open-source projects, coordinating with contributors, and ensuring successful project delivery using modern web technologies.',
      icon: <Briefcase size={20} />,
    },
    {
      year: 'Nov 2025 - Dec 2025',
      title: 'Software Development Engineer Intern',
      company: 'Bluestock Fintech',
      description: 'Worked as a Software Development Engineer (SDE) Intern on full-stack and data-driven projects. Built an end-to-end ML-based Financial Analysis System for Nifty 100 companies, including API data ingestion, multi-year financial metric analysis (CAGR, ROE, dividend evaluation), ML-driven insights, and data storage using MongoDB Atlas. Developed React-based dashboards and a Python Playwright web scraper with infinite scrolling, anti-bot protections, duplicate removal, and Excel export.',
      icon: <Briefcase size={20} />,
    },
    {
      year: "Sep 2025 - Jan 2026",
      title: "Team Lead",
      company: "EY Techathon (National Level)",
      description: "Selected and progressed to the national-level second round of the EY Techathon. Led a team through problem analysis, solution design, and prototype development. Developed Omniverse - ABFRL Conversational Sales Agent featuring intelligent AI chatbot, real-time cart management, and order processing.",
      icon: <Users size={20} />,
    },
    {
      year: "Dec 2025 - Jan 2026",
      title: "Campus Ambassador",
      company: "eDC (Entrepreneurship Development Cell) IIT Delhi",
      description: "Selected as Campus Ambassador for EDC IIT Delhi. Represented the cell, promoted entrepreneurship initiatives among university students, organized workshops, and coordinated innovation-focused events and programs.",
      icon: <Award size={20} />,
    },
    {
      year: "Jan 2026 - Feb 2026",
      title: "AI & Machine Learning Intern",
      company: "Edunet Foundation (AICTE-IBM SkillsBuild)",
      description: "Gained hands-on experience in Artificial Intelligence and Machine Learning. Developed AI Study Buddy - an AI-powered learning platform with personalized explanations, summarization, quiz generation, flashcards, and integration with Google Gemini API using React, FastAPI, and Firebase.",
      icon: <Briefcase size={20} />,
    },
  ];

  const cardDetails = {
  about: {
    title: 'About Me',
    summary: 'Explore my personal background and story.',
    details: {
      name: 'Mohd Mashruf',
      location: 'Mohali, Punjab, India',
      bio: 'I am a Full Stack Developer with hands-on experience in building scalable web applications using React, Node.js, MongoDB, and modern frontend frameworks. I have worked on real-world projects including healthcare platforms and AI-based tools. I enjoy solving complex problems, building efficient systems, and continuously improving my development skills. Alongside tech, I have a strong interest in music, reading, and personal growth.',
      interests: 'Full Stack Development, Open Source, AI Projects, Music, Reading',
    },
    icon: <Calendar size={20} />,
  },

  education: {
    title: 'Education',
    summary: 'Learn about my academic journey and qualifications.',
    details: {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Chandigarh University, Mohali',
      year: '2022 - 2026 (Expected)',
      cgpa: '7.37',
      focus: 'Data Structures, Full Stack Development, Backend APIs',
      achievements: 'Active contributor in open-source programs and campus ambassador initiatives.',
    },
    icon: <GraduationCap size={20} />,
  },

  experience: {
    title: 'Experience',
    summary: 'Discover my professional experience and achievements.',
    details: {
      bluestock: 'Software Development Engineer Intern at Bluestock Fintech (Nov 2025 - Dec 2025)',
      edc: 'Campus Ambassador at EDC IIT Delhi (Dec 2025 - Present)',
      gssoc: 'Project Admin at GirlScript Summer of Code (Jul 2025 - Oct 2025)',
      jwoc: 'Mentor at JGEC Winter of Code (Jan 2025 - Mar 2025)',
      swoc: 'Contributor at Social Winter of Code (Dec 2024 - Mar 2025)',
      inhouse: 'In-house Intern at Chandigarh University (May 2024 - Jun 2024)',
      skills: 'React, Next.js, Node.js, Express.js, MongoDB, SQL, JavaScript, TypeScript',
    },
    icon: <Briefcase size={20} />,
  },

  hobbies: {
    title: 'Hobbies & Interests',
    summary: 'Explore my passions and leisure activities.',
    details: {
      hobbies: ['Music', 'Reading', 'Gardening'],
      favoriteActivities: 'Listening to music, exploring new technologies, reading books, and maintaining a garden.',
    },
    icon: <Award size={20} />,
  },

  certificates: {
    title: 'Certificates & Achievements',
    summary: 'View my professional certifications and notable achievements.',
    details: {
      certifications: [
        'Java & JDBC In-House Training (Chandigarh University)',
        'Azure Fundamentals (Microsoft & Simplilearn)',
        'IoT Certification (SWAYAM)',
        'Introduction to Big Data with Spark and Hadoop (IBM)',
        'Introduction to NoSQL Databases (IBM)',
      ],
      achievements: [
        'Campus Ambassador at EDC IIT Delhi',
        'AI Project Contributor – Google for Startups (Prompt to Prototype)',
        'Project Admin at GirlScript Summer of Code',
        'Mentor at JGEC Winter of Code',
        'Contributor at Social Winter of Code',
        'Built QuickConsult (Doctor Appointment Platform)',
        'Built BuildMyResume.ai (ATS Resume Builder)',
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
        
        <div className="mb-24 py-12">
          <motion.div 
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 p-4 rounded-lg bg-gray-800 shadow-md border border-gray-700 max-w-xs mx-auto transition-all duration-500"
          >
            <h2 
              className="text-xl md:text-2xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 bg-clip-text text-transparent"
            >
              My Journey
            </h2>
          </motion.div>
          
          <div className="relative w-full py-8">
            {/* Vertical timeline line - center */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="space-y-12">
                {timelineItems.map((item, index) => {
                  const isLeft = index % 2 === 1; // ODD = left, EVEN = right (starts from RIGHT)
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="relative"
                    >
                      {/* Desktop: Alternating left-right layout */}
                      <div className="hidden md:flex items-center">
                        {isLeft ? (
                          <>
                            {/* LEFT CONTENT - RIGHT ALIGNED */}
                            <div className="w-1/2 pr-12">
                              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all text-left">
                                <p className="text-blue-400 font-semibold text-sm mb-2">{item.year}</p>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                            
                            {/* CENTER CIRCLE */}
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-gray-900 relative z-20"
                              >
                                {item.icon}
                              </motion.div>
                            </div>
                            
                            {/* EMPTY RIGHT */}
                            <div className="w-1/2"></div>
                          </>
                        ) : (
                          <>
                            {/* EMPTY LEFT */}
                            <div className="w-1/2"></div>
                            
                            {/* CENTER CIRCLE */}
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-gray-900 relative z-20"
                              >
                                {item.icon}
                              </motion.div>
                            </div>
                            
                            {/* RIGHT CONTENT - LEFT ALIGNED */}
                            <div className="w-1/2 pl-12">
                              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all text-left">
                                <p className="text-blue-400 font-semibold text-sm mb-2">{item.year}</p>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Mobile: Single column layout */}
                      <div className="md:hidden flex gap-4 items-start">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border-3 border-gray-900 flex-shrink-0 mt-1"
                        >
                          {item.icon}
                        </motion.div>
                        
                        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-blue-400 transition-all flex-1">
                          <p className="text-blue-400 font-semibold text-sm mb-1">{item.year}</p>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-xs mb-2">{item.company}</p>
                          <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
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