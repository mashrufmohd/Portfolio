import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

// Define the shape of contact information
interface ContactItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string; // Optional link for clickable items
}

const ContactPage: React.FC = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'aalammashruf724@gmail.com',
      link: 'mailto:example@email.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+918630549203',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Chandigarh, Punjab, India',
      
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/mashrufmohd',
      link: 'https://github.com/mashrufmohd',
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/mohd-mashruf',
      link: 'https://www.linkedin.com/in/mohd-mashruf/',
    },
    {
      icon: <Twitter size={24} />,
      title: 'Twitter',
      value: '@Mashruf1475501',
      link: 'https://x.com/Mashruf1475501',
    },
  ];

  return (
    <div className="section-container">
      <Navbar /> {/* Optional: Add navigation */}
      <AnimatedSection>
        <h1 className="section-title text-gray-900 dark:text-gray-50">Contact Me</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Contact Information Column */}
          <div className="card w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-blue-500">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="card w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;