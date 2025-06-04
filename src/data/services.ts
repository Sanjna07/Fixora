import { Service, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Home Cleaning',
    description: 'Professional cleaning services for your home',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    services: 4
  },
  {
    id: 'c2',
    name: 'Landscaping',
    description: 'Transform your outdoor spaces',
    image: 'https://i.pinimg.com/736x/f8/0c/49/f80c49019a52ea9d61ebec183c453661.jpg',
    services: 3
  },
  {
    id: 'c3',
    name: 'Plumbing',
    description: 'Expert plumbing repairs and installations',
    image: 'https://images.pexels.com/photos/4108771/pexels-photo-4108771.jpeg',
    services: 5
  },
  {
    id: 'c4',
    name: 'Electrical',
    description: 'Reliable electrical services for your property',
    image: 'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg',
    services: 4
  },
  {
    id: 'c5',
    name: 'Interior Design',
    description: 'Creative solutions for beautiful living spaces',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    services: 3
  },
  {
    id: 'c6',
    name: 'Home Renovation',
    description: 'Complete home transformation services',
    image: 'https://i.pinimg.com/736x/a1/88/1e/a1881e0a6366e9fc2ad83bac5e7b2a34.jpg',
    services: 6
  }
];

export const services: Service[] = [
  {
    id: 's1',
    title: 'Regular Home Cleaning',
    description: 'Thorough cleaning of all rooms including dusting, vacuuming, mopping, and bathroom sanitizing.',
    price: 120,
    duration: 180,
    category: 'c1',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    featured: true
  },
  {
    id: 's2',
    title: 'Deep Cleaning',
    description: 'Comprehensive cleaning including hard-to-reach areas, inside appliances, and detailed attention to all surfaces.',
    price: 220,
    duration: 300,
    category: 'c1',
    image: 'https://i.pinimg.com/736x/d0/8b/fa/d08bfae4d325b76298a23b8d9dd3e239.jpg'
  },
  {
    id: 's3',
    title: 'Move-in/Move-out Cleaning',
    description: 'Complete cleaning service to prepare properties for new occupants or departing residents.',
    price: 250,
    duration: 360,
    category: 'c1',
    image: 'https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg'
  },
  {
    id: 's4',
    title: 'Garden Maintenance',
    description: 'Regular care for your garden including mowing, weeding, pruning, and seasonal planting.',
    price: 95,
    duration: 120,
    category: 'c2',
    image: 'https://i.pinimg.com/736x/f4/73/d2/f473d2623b689c89a389dbc754cc4fef.jpg',
    featured: true
  },
  {
    id: 's5',
    title: 'Landscape Design',
    description: 'Custom landscape planning and installation to transform your outdoor space.',
    price: 350,
    duration: 480,
    category: 'c2',
    image: 'https://i.pinimg.com/736x/51/07/d3/5107d39801ff468906e63f5d9445b690.jpg'
  },
  {
    id: 's6',
    title: 'Pipe Repair',
    description: 'Quick and reliable repair of leaking or damaged pipes.',
    price: 120,
    duration: 90,
    category: 'c3',
    image: 'https://i.pinimg.com/736x/93/e3/2e/93e32e51dfe45dfbe76c9ce389be6312.jpg'
  },
  {
    id: 's7',
    title: 'Drain Cleaning',
    description: 'Professional unclogging and cleaning of drains and pipes.',
    price: 95,
    duration: 60,
    category: 'c3',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg'
  },
  {
    id: 's8',
    title: 'Fixture Installation',
    description: 'Expert installation of sinks, faucets, toilets, and other fixtures.',
    price: 160,
    duration: 120,
    category: 'c3',
    image: 'https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg',
    featured: true
  },
  {
    id: 's9',
    title: 'Electrical Repairs',
    description: 'Fixing electrical issues safely and according to code.',
    price: 110,
    duration: 90,
    category: 'c4',
    image: 'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg'
  },
  {
    id: 's10',
    title: 'Lighting Installation',
    description: 'Installation of new lighting fixtures with professional wiring.',
    price: 135,
    duration: 120,
    category: 'c4',
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg',
    featured: true
  },
  {
    id: 's11',
    title: 'Interior Design Consultation',
    description: 'Professional advice on design elements, color schemes, and furniture selection.',
    price: 175,
    duration: 120,
    category: 'c5',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    featured: true
  },
  {
    id: 's12',
    title: 'Kitchen Remodeling',
    description: 'Complete renovation of your kitchen space for functionality and style.',
    price: 5000,
    duration: 2880, // 48 hours (multi-day project)
    category: 'c6',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    featured: true
  }
];

export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter(service => service.category === categoryId);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};