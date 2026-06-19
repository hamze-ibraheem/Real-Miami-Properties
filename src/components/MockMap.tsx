import { MapPin } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';

interface MockMapProps {
  properties: Property[];
}

export default function MockMap({ properties }: MockMapProps) {
  // Rough coordinates mapping based on addresses (just for mock purposes)
  const getCoordinates = (address: string) => {
    if (address.includes('Miami Beach')) return { top: '30%', left: '75%' };
    if (address.includes('Brickell') || address.includes('Biscayne')) return { top: '55%', left: '50%' };
    if (address.includes('Coral Gables')) return { top: '70%', left: '25%' };
    if (address.includes('Pinecrest')) return { top: '85%', left: '20%' };
    if (address.includes('Coconut Grove')) return { top: '65%', left: '35%' };
    return { top: '50%', left: '50%' };
  };

  return (
    <div className="relative w-full h-[600px] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Map Background visual */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
      
      {/* Grid lines to make it look like a map overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {properties.map((property, idx) => {
        const coords = getCoordinates(property.address);
        // Slightly offset based on idx to prevent complete overlap if in same general area
        const top = `calc(${coords.top} + ${idx * 1.5 - 2}%)`;
        const left = `calc(${coords.left} + ${idx * 1.5 - 2}%)`;

        return (
          <motion.div
            key={property.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ top, left }}
          >
            <div className="relative z-10 w-10 h-10 bg-cyan-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all">
               <MapPin className="w-5 h-5 text-cyan-400" fill="currentColor" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-2 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none origin-bottom z-20">
              <img src={property.imageUrl} className="w-full h-24 object-cover rounded-lg mb-2 opacity-90" />
              <p className="text-white font-bold text-xs truncate mb-1">{property.title}</p>
              <p className="text-orange-400 font-bold text-xs">{property.price}</p>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-slate-900/80 border border-white/10 px-4 py-2 rounded-xl text-xs text-cyan-400 font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        Interactive Map View Live
      </div>
    </div>
  );
}
