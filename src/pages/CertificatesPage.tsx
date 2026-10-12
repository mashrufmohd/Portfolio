import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import certificatesData from '../data/certificates.json';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  pdfUrl?: string;
  tags?: string[];
}

const CertificatesPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    certificatesData.forEach((cert) => {
      cert.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter certificates
  const filteredCerts = useMemo(() => {
    return certificatesData.filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        !selectedTag || cert.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

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
            My Certificates
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            A collection of professional certifications and credentials I've earned through continuous learning and development.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="section-container mb-8">
        <div className="space-y-4">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-container">
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <CertificateCard
                key={cert.id}
                {...cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No certificates found matching your criteria.
            </p>
          </motion.div>
        )}
      </section>

      {/* Modal */}
      <CertificateModal
        isOpen={selectedCert !== null}
        title={selectedCert?.title || ''}
        issuer={selectedCert?.issuer || ''}
        date={selectedCert?.date || ''}
        imageUrl={selectedCert?.imageUrl || ''}
        pdfUrl={selectedCert?.pdfUrl}
        tags={selectedCert?.tags}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

export default CertificatesPage;
