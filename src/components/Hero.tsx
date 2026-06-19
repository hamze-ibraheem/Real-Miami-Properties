import { motion } from 'motion/react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] xl:min-h-[800px] flex items-center justify-center pt-20 pb-16">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">
            Expertise that moves you
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 text-balance">
            Your Miami Lifestyle,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-300">Defined by Professionals.</span>
          </h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            From exclusive waterfront estates to luxury downtown penthouses, we connect discerning buyers with Miami's most extraordinary real estate.
          </p>

          <div className="w-full max-w-3xl backdrop-blur-xl bg-white/20 border border-white/20 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 shadow-2xl mb-12 mx-auto">
            <div className="flex-1 w-full pl-4 flex flex-col items-start py-2">
              <p className="text-white/50 text-xs font-bold uppercase mb-1">Location</p>
              <div className="flex w-full items-center">
                 <MapPin className="h-4 w-4 text-white/50 mr-2" />
                 <input 
                   type="text" 
                   placeholder="Brickell, Miami, FL" 
                   className="w-full bg-transparent border-none outline-none focus:ring-0 text-white placeholder-white/50 text-sm font-medium"
                 />
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/20"></div>
            <div className="flex-1 w-full pl-4 flex flex-col items-start py-2 border-t border-white/10 sm:border-t-0">
              <p className="text-white/50 text-xs font-bold uppercase mb-1">Property Type</p>
              <select defaultValue="" className="w-full bg-transparent border-none outline-none focus:ring-0 text-white text-sm font-medium appearance-none">
                <option className="bg-slate-900 text-white" value="" disabled>Select property type</option>
                <option className="bg-slate-900 text-white">Luxury Penthouse</option>
                <option className="bg-slate-900 text-white">Waterfront Villa</option>
                <option className="bg-slate-900 text-white">Condominium</option>
              </select>
            </div>
            <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-orange-600 transition-colors mt-2 sm:mt-0 flex items-center justify-center gap-2 group border border-orange-400">
              Search
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#properties" className="text-white/80 hover:text-white flex items-center gap-2 font-bold uppercase tracking-wider text-xs transition-colors group">
              View Featured Listings
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
