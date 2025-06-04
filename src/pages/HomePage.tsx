import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedServices from '../components/home/FeaturedServices';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BookingModal from '../components/booking/BookingModal';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedServices />
      <TestimonialsSection />
      <BookingModal />
    </>
  );
};

export default HomePage;