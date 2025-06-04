import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Loader } from 'lucide-react';

import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

type FormType = 'login' | 'signup';

const AuthForm: React.FC = () => {
  const [formType, setFormType] = useState<FormType>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let success = false;
    
    if (formType === 'login') {
      success = await login(email, password);
    } else {
      success = await signup(name, email, password);
    }
    
    if (success) {
      navigate('/');
    }
  };
  
  const toggleFormType = () => {
    setFormType(current => current === 'login' ? 'signup' : 'login');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-800 rounded-lg shadow-medium p-6 md:p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {formType === 'login' ? 'Welcome Back' : 'Create an Account'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        {formType === 'signup' && (
          <div className="mb-4">
            <label htmlFor="name\" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <User size={18} />
              </span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <Mail size={18} />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <Lock size={18} />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder={formType === 'login' ? '********' : 'Minimum 6 characters'}
            />
          </div>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-error-50 text-error-700 dark:bg-error-700/20 dark:text-error-500 rounded-lg">
            {error}
          </div>
        )}
        
        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader size={18} className="animate-spin mr-2" />
              {formType === 'login' ? 'Signing In...' : 'Creating Account...'}
            </span>
          ) : (
            formType === 'login' ? 'Sign In' : 'Sign Up'
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {formType === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={toggleFormType}
            className="text-primary-600 dark:text-primary-500 hover:underline"
          >
            {formType === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
      
      {formType === 'login' && (
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-primary-600 dark:text-primary-500 hover:underline text-sm"
          >
            Forgot your password?
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default AuthForm;