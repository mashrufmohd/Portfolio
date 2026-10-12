import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

interface CertificateCardProps {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  pdfUrl?: string;
  tags?: string[];
  onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  imageUrl,
  pdfUrl,
  tags,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow"
    >
      {/* Certificate Image */}
      <div
        className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={encodeURI(imageUrl)}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <Eye className="opacity-0 group-hover:opacity-100 text-white transition-opacity" size={32} />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{issuer}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{date}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onClick}
            className="flex-1 px-3 py-2 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={16} /> View
          </button>
          {pdfUrl && (
            <a
              href={encodeURI(pdfUrl)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} /> PDF
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
