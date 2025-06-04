import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types';
import ServiceCard from './ServiceCard';
import { useLocation } from 'react-router-dom';
import { categories } from '../../data/services';

interface ServicesListProps {
  services: Service[];
  isLoading?: boolean;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, isLoading = false }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('category');
  
  const getCategoryName = (id: string | null) => {
    if (!id) return 'All Services';
    const category = categories.find(cat => cat.id === id);
    return category ? category.name : 'All Services';
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item * 0.1 }}
            className="bg-gray-100 dark:bg-dark-800 animate-pulse h-80 rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <motion.div 
        className="text-center py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl text-gray-700 dark:text-gray-300">
          No services found.
        </h3>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div 
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {getCategoryName(categoryId)}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {services.length} services available
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ServicesList;