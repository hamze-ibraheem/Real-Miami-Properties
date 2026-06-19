import { useState } from 'react';
import { Bed, Bath, Square, ArrowRight, MapPin, SlidersHorizontal, LayoutGrid, Map as MapIcon, Check, X } from 'lucide-react';
import { properties } from '../data';
import { motion } from 'motion/react';
import MockMap from './MockMap';

export default function FeaturedProperties() {
  const [priceRange, setPriceRange] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [neighborhood, setNeighborhood] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [compareList, setCompareList] = useState<number[]>([]);

  const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, ''));

  const toggleCompare = (id: number) => {
    setCompareList(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const comparedPropertiesData = properties.filter(p => compareList.includes(p.id));

  const filteredProperties = properties.filter(property => {
    const price = parsePrice(property.price);
    let matchPrice = true;
    if (priceRange === 'Under $3M') matchPrice = price < 3000000;
    else if (priceRange === '$3M - $5M') matchPrice = price >= 3000000 && price <= 5000000;
    else if (priceRange === 'Over $5M') matchPrice = price > 5000000;

    let matchType = true;
    if (propertyType !== 'All') {
      matchType = property.type === propertyType;
    }

    let matchNeighborhood = true;
    if (neighborhood !== 'All') {
      if (neighborhood === 'Miami Beach') matchNeighborhood = property.address.includes('Miami Beach');
      else if (neighborhood === 'Brickell/Downtown') matchNeighborhood = property.address.includes('Brickell') || (property.address.includes('Miami, FL') && !property.address.includes('Miami Beach'));
      else if (neighborhood === 'Coral Gables') matchNeighborhood = property.address.includes('Coral Gables');
    }

    return matchPrice && matchType && matchNeighborhood;
  });

  return (
    <section id="properties" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-cyan-400 font-bold text-xs mb-4 block">Exclusive Portfolios</span>
            <h2 className="text-4xl font-extrabold text-white mb-4">Featured Properties</h2>
            <p className="text-white/70 text-lg font-medium">Curated selections of the finest homes available in the vibrant Miami real estate market.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors group uppercase tracking-widest text-sm pr-4 border-r-2 border-white/20 hover:border-cyan-400">
            View All Listings
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Component */}
        <div className="mb-10 p-4 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 flex flex-col lg:flex-row gap-4 items-center shadow-lg">
          <div className="flex items-center gap-2 text-cyan-400 px-4 shrink-0 w-full lg:w-auto">
            <SlidersHorizontal className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest flex-1 lg:flex-auto">Filter Properties</span>
            <button 
              onClick={() => { setPriceRange('All'); setPropertyType('All'); setNeighborhood('All'); }}
              className="lg:hidden text-white/50 hover:text-white text-xs uppercase tracking-widest font-bold"
            >
              Clear
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
            >
              <option className="bg-slate-900 text-white" value="All">Any Price</option>
              <option className="bg-slate-900 text-white" value="Under $3M">Under $3M</option>
              <option className="bg-slate-900 text-white" value="$3M - $5M">$3M - $5M</option>
              <option className="bg-slate-900 text-white" value="Over $5M">Over $5M</option>
            </select>

            <select 
              value={propertyType} 
              onChange={(e) => setPropertyType(e.target.value)}
              className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
            >
              <option className="bg-slate-900 text-white" value="All">Any Type</option>
              <option className="bg-slate-900 text-white" value="Single Family">Single Family</option>
              <option className="bg-slate-900 text-white" value="Condominium">Condominium</option>
            </select>

            <select 
              value={neighborhood} 
              onChange={(e) => setNeighborhood(e.target.value)}
              className="bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
            >
              <option className="bg-slate-900 text-white" value="All">Any Neighborhood</option>
              <option className="bg-slate-900 text-white" value="Miami Beach">Miami Beach</option>
              <option className="bg-slate-900 text-white" value="Brickell/Downtown">Brickell / Downtown</option>
              <option className="bg-slate-900 text-white" value="Coral Gables">Coral Gables</option>
            </select>
          </div>
          
          <button 
            onClick={() => { setPriceRange('All'); setPropertyType('All'); setNeighborhood('All'); }}
            className="hidden lg:block shrink-0 px-4 py-3 text-white/50 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
          >
            Clear
          </button>
        </div>

        {filteredProperties.length > 0 ? (
          <>
            {/* View Toggle */}
            <div className="flex justify-end mb-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-1 rounded-xl inline-flex shadow-lg">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/50 hover:text-white'}`}
                >
                  <LayoutGrid className="w-4 h-4" /> Grid
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${viewMode === 'map' ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/50 hover:text-white'}`}
                >
                  <MapIcon className="w-4 h-4" /> Map
                </button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                <motion.div 
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-5 flex flex-col justify-between shadow-xl group hover:bg-white/20 transition-all duration-300"
                >
                  <div>
                    <div className="w-full h-48 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-2xl mb-4 overflow-hidden relative border border-white/10 group/image">
                      <img 
                        src={property.imageUrl} 
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 mix-blend-overlay md:opacity-90"
                      />
                      <span className="absolute top-3 right-3 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
                        {property.type}
                      </span>
                      
                      <button 
                        onClick={() => toggleCompare(property.id)}
                        className={`absolute top-3 left-3 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all ${compareList.includes(property.id) ? 'bg-orange-500 text-white' : 'backdrop-blur-md bg-slate-900/50 text-white border border-white/20 hover:bg-slate-900/80'}`}
                      >
                        <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${compareList.includes(property.id) ? 'border-white bg-white/20' : 'border-white/50'}`}>
                          {compareList.includes(property.id) && <Check className="w-2.5 h-2.5" />}
                        </div>
                        Compare
                      </button>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2 line-clamp-1">{property.title}</h3>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p className="text-white/60 text-sm line-clamp-2">{property.address}</p>
                    </div>

                    <div className="flex gap-4 text-white/80 text-xs font-medium font-sans mb-4">
                      <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5 text-cyan-400" /> {property.beds}</span>
                      <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5 text-cyan-400" /> {property.baths}</span>
                      <span className="flex items-center gap-1.5"><Square className="w-3.5 h-3.5 text-cyan-400" /> {property.sqft}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 pt-4 border-t border-white/10">
                    <span className="text-orange-300 font-bold text-xl">{property.price}</span>
                    <button className="text-white text-xs underline font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors">View Details</button>
                  </div>
                </motion.div>
              ))}
              </div>
            ) : (
              <MockMap properties={filteredProperties} />
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-3">No properties found</h3>
            <p className="text-white/60 mb-8 font-medium">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setPriceRange('All'); setPropertyType('All'); setNeighborhood('All'); }}
              className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/50 px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        <button className="mt-10 w-full md:hidden flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg">
          View All Listings
          <ArrowRight className="h-4 w-4" />
        </button>

        {/* Sticky Compare Footer */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transform transition-transform duration-500 translate-y-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <div className="flex gap-4 min-w-max">
                  {comparedPropertiesData.map(p => (
                    <div key={p.id} className="relative flex items-center gap-3 bg-white/5 border border-white/10 p-2 pr-4 rounded-xl w-64 shrink-0 transition-opacity">
                      <img src={p.imageUrl} alt={p.title} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 overflow-hidden">
                        <h4 className="text-white text-xs font-bold truncate">{p.title}</h4>
                        <p className="text-orange-300 text-xs font-bold">{p.price}</p>
                      </div>
                      <button 
                        onClick={() => toggleCompare(p.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-slate-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex shrink-0 gap-4 mt-2 md:mt-0 justify-between md:justify-end items-center">
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                  <span className="text-cyan-400">{compareList.length}</span> Selected
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setCompareList([])}
                    className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                  >
                    Clear All
                  </button>
                  <button 
                    disabled={compareList.length < 2}
                    className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${compareList.length >= 2 ? 'bg-orange-500 text-white shadow-lg hover:bg-orange-600' : 'bg-white/5 text-white/20 border border-white/5'}`}
                  >
                    Compare Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
