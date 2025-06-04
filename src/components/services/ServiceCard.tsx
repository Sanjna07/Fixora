import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, IndianRupee } from 'lucide-react';
import { Service } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useBooking } from '../../context/BookingContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const { setBookingDetails, openModal } = useBooking();
  
  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    setBookingDetails({
      serviceId: service.id,
      date: null,
      time: '',
      name: '',
      email: ''
    });
    
    openModal();
  };
  
  const handleCardClick = () => {
    navigate(`/services/${service.id}`);
  };
  
  const formatDuration = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  return (
    <Card onClick={handleCardClick} className="h-full flex flex-col">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        {service.featured && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
          {service.description}
        </p>
        
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{formatDuration(service.duration)}</span>
          </div>
          
          <div className="font-semibold text-gray-900 dark:text-white flex items-center">
            <IndianRupee size={16} className="text-primary-600 dark:text-primary-500" />
            <span>{service.price}</span>
          </div>
        </div>
        
        <Button onClick={handleBookNow} fullWidth>
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;