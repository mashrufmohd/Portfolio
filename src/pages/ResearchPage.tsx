import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Award, BookOpen } from 'lucide-react';
import achievementsData from '../data/achievements.json';

const ResearchPage: React.FC = () => {
  const { patents, research } = achievementsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-20 pb-12">
      {/* Header */}
      <section className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Patents & Research
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            My contributions to innovation through patents and published research papers.
          </p>
        </motion.div>
      </section>

      {/* Patents Section */}
      <section className="section-container mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award size={32} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Patents ({patents.length})
            </h2>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {patents.map((patent) => (
              <motion.div
                key={patent.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {patent.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Patent #{patent.patentNumber}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {patent.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Granted: {patent.date}
                    </p>
                  </div>
                </div>

                {/* Patent Actions */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={16} /> View Patent
                  </a>
                  {patent.pdfUrl && (
                    <a
                      href={patent.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Download size={16} /> Download
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Research Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={32} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Research Papers ({research.length})
            </h2>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {research.map((paper) => (
              <motion.div
                key={paper.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {paper.journal}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {paper.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                      <span>Published: {paper.date}</span>
                      {paper.doi && (
                        <span>DOI: {paper.doi}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Research Actions */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} /> Read Paper
                  </a>
                  {paper.pdfUrl && (
                    <a
                      href={paper.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Download size={16} /> Download PDF
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ResearchPage;
