import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, X } from 'lucide-react';
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
  
  // Close sidebar when screen size changes to large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsFiltersVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isFiltersVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFiltersVisible]);
  
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
    
    // Close sidebar on mobile after applying filters
    if (window.innerWidth < 1024) {
      setIsFiltersVisible(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const sidebarVariants = {
    hidden: { 
      x: '-100%',
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: { 
      x: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const FilterContent = () => (
    <motion.div 
      className="w-full lg:w-80 max-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-200px)] bg-white dark:bg-dark-800 lg:rounded-lg lg:shadow-md border-r lg:border border-gray-200 dark:border-dark-600 overflow-hidden flex flex-col"
      variants={itemVariants}
      whileHover={{ 
        y: window.innerWidth >= 1024 ? -2 : 0,
        boxShadow: window.innerWidth >= 1024 ? "0 8px 25px -8px rgba(0, 0, 0, 0.1)" : "none"
      }}
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 flex-shrink-0">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Filters
        </h3>
        <button
          onClick={() => setIsFiltersVisible(false)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg"
        >
          <X size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Categories Section */}
        <div className="p-4 border-b border-gray-100 dark:border-dark-700">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-3">
            Categories
          </h3>
          
          <div className="max-h-48 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-dark-600">
            <button
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                !categoryParam 
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
              }`}
              onClick={() => handleCategoryChange(null)}
            >
              All Services
            </button>
            
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  categoryParam === category.id
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div className="p-4 lg:p-6">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white mb-3 lg:mb-4">
            Price Range
          </h3>
          
          <div className="space-y-3 lg:space-y-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Minimum
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full h-2 bg-gray-200 dark:bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Maximum
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full h-2 bg-gray-200 dark:bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <Button 
                onClick={applyFilters} 
                variant="primary" 
                size="sm" 
                fullWidth
              >
                Apply Filters
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.div 
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="flex justify-between items-center mb-6"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-semibold text-gray-900 dark:text-white px-16 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-dark-700 dark:to-dark-600 shadow-sm border border-blue-100 dark:border-dark-600"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            Service Catalog
          </motion.h2>
          
          <motion.button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 lg:hidden shadow-sm"
            onClick={() => setIsFiltersVisible(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown size={16} />
          </motion.button>
        </motion.div>

        {/* Desktop Filters - Add spacing */}
        <div className="hidden lg:block mb-6">
          <FilterContent />
        </div>
      </motion.div>

      {/* Mobile/Tablet Sidebar Overlay */}
      <AnimatePresence>
        {isFiltersVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsFiltersVisible(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-dark-800 z-50 lg:hidden overflow-hidden"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceFilters;