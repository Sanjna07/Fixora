import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, IndianRupee } from 'lucide-react';

import Button from '../components/ui/Button';
import BookingModal from '../components/booking/BookingModal';
import { Service } from '../types';
import { getServiceById, services } from '../data/services';
import { useBooking } from '../context/BookingContext';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setBookingDetails, openModal } = useBooking();
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);

  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const foundService = getServiceById(id);
      setService(foundService || null);
      
      if (foundService) {
        // Get services in the same category
        const related = services
          .filter(s => s.category === foundService.category && s.id !== foundService.id)
          .slice(0, 3);
        setRelatedServices(related);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleBookNow = () => {
    if (!service) return;
    
    setBookingDetails({
      serviceId: service.id,
      date: null,
      time: '',
      name: '',
      email: ''
    });
    
    openModal();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="animate-pulse bg-gray-200 dark:bg-dark-700 h-8 w-48 mb-4"></div>
          <div className="animate-pulse bg-gray-200 dark:bg-dark-700 h-80 w-full rounded-lg mb-6"></div>
          <div className="animate-pulse bg-gray-200 dark:bg-dark-700 h-6 w-full mb-2"></div>
          <div className="animate-pulse bg-gray-200 dark:bg-dark-700 h-6 w-3/4 mb-2"></div>
          <div className="animate-pulse bg-gray-200 dark:bg-dark-700 h-6 w-1/2 mb-6"></div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Service not found
          </h2>
          <Button onClick={() => navigate('/services')}>
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => navigate('/services')} 
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all services
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto rounded-lg shadow-medium"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h1>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4 space-x-6">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-primary-600 dark:text-primary-500" />
                  <span>{Math.floor(service.duration / 60)}h {service.duration % 60}m</span>
                </div>
                
                <div className="flex items-center">
                  <IndianRupee size={20} className="mr-1 text-primary-600 dark:text-primary-500" />
                  <span className="text-xl font-semibold">₹{service.price}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Description
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
              
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg mb-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  <Calendar size={18} className="mr-2 text-primary-600 dark:text-primary-500" />
                  Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This service is available 7 days a week. Book now to secure your preferred date and time.
                </p>
              </div>
              
              <Button size="lg" onClick={handleBookNow} fullWidth>
                Book Now
              </Button>
            </motion.div>
          </div>
          
          {relatedServices.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((related, index) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white dark:bg-dark-800 rounded-lg shadow-soft overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/services/${related.id}`)}
                  >
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {related.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600 dark:text-gray-300 text-sm">
                          {Math.floor(related.duration / 60)}h {related.duration % 60}m
                        </div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          ${related.price}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      <BookingModal />
    </div>
  );
};

export default ServiceDetailPage;