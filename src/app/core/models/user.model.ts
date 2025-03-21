export interface User {
  id: string;
  email: string;
  role: 'ADMIN' | 'CLIENT';
  fullName: string;
  dni: string;
  createdAt: Date;
}

export interface Advisor {
  id: string;
  fullName: string;
  dni: string;
  phone: string;
  photoUrl: string;
  email: string;
  totalSales: number;
  soldLots: string[];
}

export interface Client {
  id: string;
  fullName: string;
  dni: string;
  phone: string;
  email: string;
  purchasedLots: string[];
  advisorId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  totalLots: number;
  availableLots: number;
  imageUrl: string;
  createdAt: Date;
}

export interface Lot {
  id: string;
  projectId: string;
  number: string;
  area: number;
  price: number;
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD';
  clientId?: string;
  advisorId?: string;
  soldAt?: Date;
}