import React from 'react';
import { motion } from 'framer-motion';
import AuthForm from '../components/auth/AuthForm';

const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-mellow-100 dark:from-dark-900 dark:to-dark-800 flex flex-col justify-center items-center pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center max-w-6xl mx-auto">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-md mx-auto md:mx-0">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Welcome to <span className="text-primary-600 dark:text-primary-500">ServiceHub</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Sign in to manage your bookings, track service history, and enjoy exclusive benefits.
              </p>
              
              <div className="bg-white dark:bg-dark-800/50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Demo Credentials
                </h3>
                <div className="mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Email: </span>
                  <span className="text-gray-600 dark:text-gray-400">user@example.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Password: </span>
                  <span className="text-gray-600 dark:text-gray-400">password</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Why join ServiceHub?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Save your favorite service providers',
                    'Schedule recurring appointments',
                    'Receive exclusive promotions',
                    'Manage and view your booking history'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <span className="mr-2 mt-1 text-primary-600 dark:text-primary-500">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AuthForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;