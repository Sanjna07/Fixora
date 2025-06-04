import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Award, Users, Wrench, Home, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All our service providers are fully licensed, insured, and background-checked for your peace of mind.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Emergency services available round the clock. We're here when you need us most.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services. If you're not happy, we'll make it right.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Trusted Professionals",
      description: "Carefully vetted experts with years of experience in their respective fields.",
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Service Professionals" },
    { number: "50+", label: "Service Categories" },
    { number: "4.9★", label: "Average Rating" }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We show up on time, every time. Your schedule matters to us."
    },
    {
      title: "Transparency", 
      description: "Clear pricing, honest communication, and no hidden fees."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every job, big or small."
    },
    {
      title: "Trust",
      description: "Building lasting relationships through consistent quality service."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-300 via-amber-200 to-transparent rounded-bl-full dark:from-orange-400 dark:via-amber-300"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-300 via-orange-200 to-transparent rounded-tr-full dark:from-yellow-400 dark:via-orange-300"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-2xl">
                  <Home className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-white dark:via-orange-400 dark:to-yellow-400"
            >
              About <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Fixora</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Your trusted partner for all home service needs. We connect you with skilled professionals 
              who deliver exceptional quality and reliable service, making home maintenance effortless.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white via-orange-50 to-amber-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent dark:from-white dark:to-orange-400"
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Founded in 2019, Fixora was born from a simple idea: home services should be 
                accessible, reliable, and stress-free. We saw how difficult it was for homeowners 
                to find trustworthy professionals for their needs.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Today, we're proud to be the leading platform connecting homeowners with skilled 
                service professionals across multiple categories. Our mission remains the same: 
                making quality home services accessible to everyone.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <Sparkles className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 dark:text-orange-400 font-semibold">Excellence in every service</span>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-105">
                <div className="h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-yellow-300/20"></div>
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Wrench className="w-32 h-32 text-orange-500 dark:text-orange-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-white via-orange-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent dark:from-white dark:to-orange-400">
              Why Choose Fixora?
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              We're committed to providing the best experience for both our customers and service professionals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                  <div className="relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-r ${feature.gradient} shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent dark:from-white dark:to-orange-400">
              Our Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              The principles that guide everything we do at Fixora.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 dark:from-orange-600 dark:via-amber-600 dark:to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent rounded-l-full"
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Experience the Fixora Difference?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl mb-10 text-orange-100 max-w-3xl mx-auto"
            >
              Join thousands of satisfied customers who trust Fixora for all their home service needs.
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="px-12 py-6 bg-white text-orange-600 rounded-2xl font-bold text-xl shadow-2xl hover:bg-orange-50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your Service Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;