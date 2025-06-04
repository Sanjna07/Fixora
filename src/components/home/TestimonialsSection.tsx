import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aanya Sharma',
    role: 'Homeowner',
    content: 'The cleaning service was outstanding! The team arrived on time and did a thorough job. My home has never looked better.',
    avatar: 'https://i.pinimg.com/736x/bb/0d/1e/bb0d1e47b4344363c7d47c145ac2faf7.jpg'
  },
  {
    id: 2,
    name: 'Vivaan Mehta',
    role: 'Business Owner',
    content: 'We hired Fixora for our office renovation and they delivered beyond expectations. Professional, efficient, and high-quality work.',
    avatar: 'https://i.pinimg.com/736x/da/31/38/da313829618ce49ebec8517389ff6016.jpg'
  },
  {
    id: 3,
    name: 'Diya Singh',
    role: 'Interior Designer',
    content: 'I regularly recommend Fixora to my clients. Their plumbing and electrical services are reliable and their professionals are always courteous.',
    avatar: 'https://i.pinimg.com/736x/85/43/66/8543664f4de253fbd53c0fce2baed433.jpg'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real reviews from satisfied customers who have experienced our quality services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-50 dark:bg-dark-800 rounded-lg p-6 h-full flex flex-col">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;