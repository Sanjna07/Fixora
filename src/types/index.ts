export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  services: number;
}

export interface BookingDetails {
  serviceId: string;
  date: Date | null;
  time: string;
  name: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}