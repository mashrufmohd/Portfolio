import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  pdfUrl?: string;
  tags?: string[];
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  title,
  issuer,
  date,
  imageUrl,
  pdfUrl,
  tags,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex justify-between items-start gap-4 z-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {issuer} • {date}
            </p>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Certificate Image */}
          <div className="mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={encodeURI(imageUrl)}
              alt={title}
              className="w-full h-auto"
            />
          </div>

          {/* Actions */}
          {pdfUrl && (
            <div className="flex gap-3">
              <a
                href={encodeURI(pdfUrl)}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download Certificate
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
