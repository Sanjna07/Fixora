import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, Clock, IndianRupee } from 'lucide-react';

import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { getServiceById } from '../../data/services';

interface DatePickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

// Simple DatePicker component
const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const dates: Date[] = [];
  
  // Generate dates for the next 14 days
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return (
    <div className="grid grid-cols-7 gap-2">
      {dates.map((date, index) => (
        <motion.button
          key={index}
          className={`p-2 rounded-md text-center transition-colors ${
            selectedDate && selectedDate.toDateString() === date.toDateString()
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/30'
          }`}
          onClick={() => onSelectDate(date)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-xs">{format(date, 'EEE')}</div>
          <div className="text-sm font-semibold">{format(date, 'd')}</div>
        </motion.button>
      ))}
    </div>
  );
};

interface TimeSlot {
  id: string;
  time: string;
}

// Available time slots
const timeSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM' },
  { id: '2', time: '10:00 AM' },
  { id: '3', time: '11:00 AM' },
  { id: '4', time: '01:00 PM' },
  { id: '5', time: '02:00 PM' },
  { id: '6', time: '03:00 PM' },
  { id: '7', time: '04:00 PM' },
  { id: '8', time: '05:00 PM' },
];

const BookingModal: React.FC = () => {
  const { bookingDetails, setBookingDetails, isModalOpen, closeModal } = useBooking();
  const { user } = useAuth();
  
  // Form state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  // Get service details
  const service = bookingDetails ? getServiceById(bookingDetails.serviceId) : null;
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !selectedDate || !selectedTime) return;
    
    setIsLoading(true);
    
    // Update booking details
    setBookingDetails({
      serviceId: service.id,
      date: selectedDate,
      time: selectedTime,
      name,
      email
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      closeModal();
      setCurrentStep(1);
    }, 2000);
  };
  
  const renderStepOne = () => (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Select Date
        </h3>
        <DatePicker
          selectedDate={selectedDate}
          onSelectDate={(date) => setSelectedDate(date)}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Select Time
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map(slot => (
            <motion.button
              key={slot.id}
              className={`p-2 rounded-md text-center transition-colors ${
                selectedTime === slot.time
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/30'
              }`}
              onClick={() => setSelectedTime(slot.time)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-sm">{slot.time}</div>
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={closeModal}>
          Cancel
        </Button>
        <Button 
          onClick={() => setCurrentStep(2)}
          disabled={!selectedDate || !selectedTime}
        >
          Continue
        </Button>
      </div>
    </>
  );
  
  const renderStepTwo = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 dark:border-dark-600 rounded-md bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 dark:border-dark-600 rounded-md bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentStep(1)}>
          Back
        </Button>
        <Button 
          type="submit"
          disabled={!name || !email || isLoading}
        >
          {isLoading ? 'Booking...' : 'Confirm Booking'}
        </Button>
      </div>
    </form>
  );
  
  const renderSuccess = () => (
    <div className="text-center py-6">
      <div className="w-20 h-20 mx-auto bg-success-50 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Booking Confirmed!
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        Your booking has been successfully confirmed. You will receive an email with all the details.
      </p>
    </div>
  );
  
  if (!service || !bookingDetails) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title="Book Service"
      size="md"
    >
      {isSuccess ? (
        renderSuccess()
      ) : (
        <>
          <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
              <Clock size={16} className="mr-2 text-primary-600 dark:text-primary-500" />
              <span>{Math.floor(service.duration / 60)}h {service.duration % 60}m</span>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <IndianRupee size={16} className="mr-2 text-primary-600 dark:text-primary-500" />
              <span className="font-semibold">₹{service.price}</span>
            </div>
          </div>
          
          {selectedDate && selectedTime && (
            <div className="mb-6 flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
                </span>
              </div>
            </div>
          )}
          
          {currentStep === 1 ? renderStepOne() : renderStepTwo()}
        </>
      )}
    </Modal>
  );
};

export default BookingModal;