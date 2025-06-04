import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-900 pt-8 md:pt-12 pb-6 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile/Tablet Layout (2x2 grid) */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          <div>
            <h3 className="text-xl font-display font-bold text-primary-600 dark:text-primary-500 mb-3">
              Fixora
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Professional services at your fingertips.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">Services</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/services?category=c1" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services?category=c2" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Landscaping
                </Link>
              </li>
              <li>
                <Link to="/services?category=c3" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services?category=c4" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Electrical
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">Support</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/faq" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout (1x4 grid) - Hidden on mobile/tablet */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-primary-600 dark:text-primary-500 mb-4">
              Fixora
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Professional services at your fingertips. Quality work, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services?category=c1" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services?category=c2" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Landscaping
                </Link>
              </li>
              <li>
                <Link to="/services?category=c3" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services?category=c4" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Electrical
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-700 mt-6 md:mt-10 pt-4 md:pt-6">
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Fixora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;