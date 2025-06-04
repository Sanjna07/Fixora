import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  className = '',
  children,
  onClick,
  hoverEffect = true
}) => {
  const baseStyles = 'rounded-lg overflow-hidden bg-white dark:bg-dark-800 transition-all duration-300';
  const shadowStyles = 'shadow-soft hover:shadow-medium';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverEffect ? shadowStyles : ''} ${className}`}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;