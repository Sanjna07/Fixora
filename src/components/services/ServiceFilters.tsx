import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { categories } from '../../data/services';
import Button from '../ui/Button';

const ServiceFilters: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  // Price filter state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  const handleCategoryChange = (categoryId: string | null) => {
    const params = new URLSearchParams(location.search);
    
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };
  
  const applyFilters = () => {
    const params = new URLSearchParams(location.search);
    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Service Catalog
        </h2>
        <button
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 md:hidden"
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        >
          <Filter size={18} className="mr-2" />
          Filters
        </button>
      </div>

      <motion.div 
        className={`md:grid md:grid-cols-4 gap-6 ${isFiltersVisible ? 'block' : 'hidden md:grid'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isFiltersVisible ? 1 : 1, 
          height: isFiltersVisible ? 'auto' : 'auto' 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="md:col-span-1 bg-white dark:bg-dark-800 rounded-lg shadow-soft p-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Categories
          </h3>
          <div className="space-y-2">
            <motion.button
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                !categoryParam 
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
              }`}
              onClick={() => handleCategoryChange(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              All Services
            </motion.button>
            
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  categoryParam === category.id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          
          <hr className="my-4 border-gray-200 dark:border-dark-700" />
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Price Range
          </h3>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange[0]}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange[1]}</span>
            </div>
            <div className="flex space-x-4">
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full"
              />
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button onClick={applyFilters} variant="primary" size="sm" fullWidth>
              Apply Filters
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceFilters;