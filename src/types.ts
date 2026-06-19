export interface Property {
  id: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
