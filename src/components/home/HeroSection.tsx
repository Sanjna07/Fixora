import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-mellow-100 dark:from-dark-900 dark:to-dark-800 pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-300 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-300 rounded-tr-full" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                Professional Services <span className="text-primary-600 dark:text-primary-500"><br />At Your Fingertips</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
                Book expert service professionals with just a few clicks. Quality work, transparent pricing, and satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/login">
                  <Button size="lg">
                    Browse Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className=" h-75% md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl h-1/2">
                <img 
                  src="https://res.cloudinary.com/dx0r0pbgb/image/upload/v1749035613/home.i_uey54o.png" 
                  alt="Professional service provider" 
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;