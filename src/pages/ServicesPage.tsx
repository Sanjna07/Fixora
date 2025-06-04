import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import ServiceFilters from '../components/services/ServiceFilters';
import ServicesList from '../components/services/ServicesList';
import BookingModal from '../components/booking/BookingModal';
import { Service } from '../types';
import { services, getServicesByCategory } from '../data/services';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get('category');
    const minPrice = queryParams.get('minPrice');
    const maxPrice = queryParams.get('maxPrice');
    
    // Filter services based on query parameters
    let result = categoryId 
      ? getServicesByCategory(categoryId) 
      : [...services];
    
    if (minPrice) {
      result = result.filter(service => service.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      result = result.filter(service => service.price <= parseInt(maxPrice));
    }
    
    // Simulate API call
    setTimeout(() => {
      setFilteredServices(result);
      setIsLoading(false);
    }, 500);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Browse our professional services and find the perfect solution for your needs
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ServiceFilters />
          </div>
          <div className="md:col-span-3">
            <ServicesList 
              services={filteredServices}
              isLoading={isLoading}
            />
          </div>
        </div>
        
        <BookingModal />
      </motion.div>
    </div>
  );
};

export default ServicesPage;