import React from 'react';
import { motion } from 'framer-motion';
import { getFeaturedServices } from '../../data/services';
import ServiceCard from '../services/ServiceCard';

const FeaturedServices: React.FC = () => {
  const featuredServices = getFeaturedServices();
  
  const handleExploreClick = () => {
    // Navigate to services page
    window.location.href = '/services';
    // Or if using React Router: navigate('/services')
    // Or if using Next.js: router.push('/services')
  };
     
  return (
    <section className="py-16 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Our Most Popular Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our top-rated services that customers love and trust for their homes and businesses.
          </p>
        </motion.div>
        
        {/* Grid - Hidden on medium and small screens, shown on large screens */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        
        {/* Explore Button - Shown on medium and small screens, hidden on large screens */}
        <div className="lg:hidden flex justify-center">
          <motion.button
            onClick={handleExploreClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 via-orange-200 to-white text-gray-800 font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-100 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0, opacity: 0.5 }}
              whileTap={{ 
                scale: 1.2, 
                opacity: 0,
                transition: { duration: 0.4 }
              }}
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;