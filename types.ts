
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  mapsLink: string;
  instagram: string;
  facebook: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  longDescription: string;
  img: string;
  imageFit?: string;
  iconKey: string;
}