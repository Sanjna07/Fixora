'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Sparkles } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      background: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)"
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      background: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
      transition: { duration: 0.3 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-white via-slate-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 shadow-xl backdrop-blur-md py-2' 
          : 'bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.8 }}
    >
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, transparent 50%, rgba(168,85,247,0.05) 100%)",
            "linear-gradient(90deg, rgba(168,85,247,0.05) 0%, transparent 50%, rgba(59,130,246,0.05) 100%)",
            "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, transparent 50%, rgba(168,85,247,0.05) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
        <Link to="/" className="flex items-center">
          <motion.div
            className="flex items-center gap-2 text-2xl font-display font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 leading-none"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 0 8px rgba(59,130,246,0.3))"
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <motion.img
              src="Fixora.logo.png" 
              className="h-12 w-12 object-contain align-middle"
              whileHover={{ 
                rotate: [0, 5, -5, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            />
            <motion.span 
              className="align-middle relative text-blue-800"
              whileHover={{
                textShadow: "0 0 32px rgba(71,99,225,1)"
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              ixora
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles size={12} className="text-yellow-400" />
              </motion.div>
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div 
            className="flex space-x-6 p-2 rounded-full bg-gradient-to-r from-white/80 to-slate-100/80 dark:from-dark-800/80 dark:to-dark-700/80 backdrop-blur-sm border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <motion.div key={item.to} variants={navItemVariants} initial="hidden" animate="visible">
                <Link 
                  to={item.to} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    location.pathname === item.to
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <motion.span
                    className="relative z-10"
                    variants={navItemVariants}
                    whileHover="hover"
                  >
                    {item.label}
                  </motion.span>
                  {location.pathname !== item.to && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <ThemeToggle />
            </motion.div>
            {user ? (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link 
                    to="/profile" 
                    className="flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-dark-700 dark:to-dark-600 text-gray-700 dark:text-gray-300 hover:from-primary-100 hover:to-primary-50 dark:hover:from-primary-900/20 dark:hover:to-primary-800/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <User size={18} className="mr-2" />
                    </motion.div>
                    <span className="font-medium">{user.name.split(' ')[0]}</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </motion.div>
              </div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login">
                  <Button variant="primary" size="sm" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl">
                    Login / Sign Up
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <ThemeToggle />
          </motion.div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg bg-gradient-to-r from-white/80 to-slate-100/80 dark:from-dark-800/80 dark:to-dark-700/80 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 shadow-lg focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-t border-white/20 dark:border-dark-600/50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <motion.div key={item.to} variants={mobileItemVariants}>
                  <Link 
                    to={item.to} 
                    className={`block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 ${
                      location.pathname === item.to
                        ? 'bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-dark-700 dark:hover:to-dark-600'
                    }`}
                  >
                    <motion.span whileHover={{ x: 5 }}>
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              
              {user && (
                <motion.div variants={mobileItemVariants}>
                  <Link 
                    to="/profile" 
                    className="block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-dark-700 dark:hover:to-dark-600 transition-all duration-300"
                  >
                    <motion.span whileHover={{ x: 5 }}>
                      Profile
                    </motion.span>
                  </Link>
                </motion.div>
              )}
              
              <motion.div 
                className="pt-4 border-t border-gray-200/50 dark:border-dark-600/50"
                variants={mobileItemVariants}
              >
                {user ? (
                  <div className="flex flex-col space-y-3">
                    <motion.span 
                      className="text-sm text-gray-700 dark:text-gray-300 px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Hello, <span className="font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{user.name.split(' ')[0]}</span>
                    </motion.span>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" size="sm" onClick={handleLogout} fullWidth>
                        Logout
                      </Button>
                    </motion.div>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/login">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        fullWidth 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                      >
                        Login / Sign Up
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;