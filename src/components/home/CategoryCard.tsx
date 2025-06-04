import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/services?category=${category.id}`}>
      <motion.div 
        className="relative overflow-hidden rounded-xl group"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-200 mb-3 opacity-90">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white bg-primary-600/80 px-3 py-1 rounded-full">
              {category.services} Services
            </span>
            <motion.div
              className="text-white group-hover:text-primary-300 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;