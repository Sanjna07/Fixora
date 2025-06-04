import React from 'react';
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
    <Card 
      onClick={handleCardClick} 
      className="h-full flex flex-col group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
    >
      <div className="relative overflow-hidden">
        <img 
          src={service.image}
          alt={service.title}
          className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {service.featured && (
          <div className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-primary-600 text-white text-xs font-semibold px-2 py-1 lg:px-3 lg:py-1 rounded-full animate-pulse">
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
             
      <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors duration-200">
          {service.title}
        </h3>
                
        <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2 flex-grow text-xs sm:text-sm lg:text-base">
          {service.description}
        </p>
                
        <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
          <div className="flex items-center text-gray-600 dark:text-gray-400 transform group-hover:translate-x-1 transition-transform duration-200">
            <Clock size={14} className="mr-1 sm:size-4 lg:size-4" />
            <span className="text-xs sm:text-sm">{formatDuration(service.duration)}</span>
          </div>
                     
          <div className="font-semibold text-gray-900 dark:text-white flex items-center transform group-hover:scale-110 transition-transform duration-200">
            <IndianRupee size={14} className="text-primary-600 dark:text-primary-500 sm:size-4 lg:size-4" />
            <span className="text-sm sm:text-base">{service.price}</span>
          </div>
        </div>
                
        <Button 
          onClick={handleBookNow} 
          fullWidth
          className="text-xs sm:text-sm lg:text-base py-2 sm:py-2.5 lg:py-3 transform transition-all duration-200 hover:shadow-md active:scale-95"
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;