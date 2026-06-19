import { Property, TeamMember, Testimonial } from './types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    price: '$6,500,000',
    address: '100 Palm Avenue, Miami Beach, FL 33139',
    beds: 5,
    baths: 6,
    sqft: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    type: 'Single Family',
    featured: true
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    price: '$3,850,000',
    address: '888 Brickell Ave #PH12, Miami, FL 33131',
    beds: 3,
    baths: 4,
    sqft: 3100,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    type: 'Condominium',
    featured: true
  },
  {
    id: '3',
    title: 'Coral Gables Estate',
    price: '$4,200,000',
    address: '1500 Coral Way, Coral Gables, FL 33134',
    beds: 4,
    baths: 4,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    type: 'Single Family',
    featured: true
  },
  {
    id: '4',
    title: 'Oceanfront Luxury Condo',
    price: '$2,950,000',
    address: '1 Collins Ave #405, Miami Beach, FL 33139',
    beds: 2,
    baths: 2,
    sqft: 1850,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    type: 'Condominium',
    featured: false
  }
];

export const team: TeamMember[] = [
  {
    id: 't1',
    name: 'Isabella Mendes',
    role: 'Principal Broker',
    bio: 'With over 15 years in the Miami luxury market, Isabella specializes in waterfront estates and high-profile clientele.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop',
    phone: '+1 786-609-1832',
    email: 'isabella@realmiamiproperties.com'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Downtown/Brickell Specialist',
    bio: 'Marcus is the go-to expert for luxury condominiums and penthouses in the urban core of Miami.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop',
    phone: '+1 786-609-1833',
    email: 'marcus@realmiamiproperties.com'
  },
  {
    id: 't3',
    name: 'Sofia Rodriguez',
    role: 'Residential Sales Director',
    bio: 'A Miami-native with an unmatched understanding of Coral Gables, Coconut Grove, and Pinecrest neighborhoods.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop',
    phone: '+1 786-609-1834',
    email: 'sofia@realmiamiproperties.com'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'r1',
    name: 'David & Sarah L.',
    role: 'Relocated from NY',
    text: "Real Miami Properties made our transition from New York seamless. They understood exactly what we wanted in a waterfront home and their negotiation skills saved us tremendously. The best decision we made was working with them.",
    rating: 5
  },
  {
    id: 'r2',
    name: 'Michael T.',
    role: 'Property Investor',
    text: "Their knowledge of the Brickell market is truly unmatched. They identified an undervalued investment property before it hit the mainstream market and coordinated a flawless closing. Highly recommended for serious buyers.",
    rating: 5
  },
  {
    id: 'r3',
    name: 'Elena R.',
    role: 'First-time Luxury Buyer',
    text: "The team was available 24/7 exactly as advertised. They were patient, incredibly knowledgeable, and guided me through purchasing my first luxury condo in South Beach. A five-star experience from start to finish.",
    rating: 5
  }
];
