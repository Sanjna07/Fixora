import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, Clock, IndianRupee, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { getServiceById } from '../data/services';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { bookingDetails } = useBooking();
  const service = bookingDetails ? getServiceById(bookingDetails.serviceId) : null;

  if (!user) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Please login to view your profile
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 md:p-8 mb-8"
          >
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Profile
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Personal Information
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Name:</span> {user.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {bookingDetails && service && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 md:p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Latest Booking
              </h2>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-500" />
                    <span>
                      {bookingDetails.date ? format(bookingDetails.date, 'MMMM d, yyyy') : 'Date not set'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-500" />
                    <span>{bookingDetails.time || 'Time not set'}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <IndianRupee className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-500" />
                    <span>₹{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-500" />
                    <span>Your Location</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-dark-700 pt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Service Details
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;