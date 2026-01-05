
export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  RESULTS = 'results',
  ABOUT = 'about',
  CONTACT = 'contact',
  PRIVACY = 'privacy'
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  videoPlaceholder?: string;
}

export interface LeadSnapshot {
  month: string;
  spend: number;
  leads: number;
  bookings: number;
}
