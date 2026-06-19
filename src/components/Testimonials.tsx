import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[0.3em] text-cyan-400 font-bold text-xs mb-4 block">Client Success Stories</span>
          <h2 className="text-4xl font-extrabold text-white mb-6">Don't Just Take Our Word For It</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5 h-16 w-16 rotate-180 z-0" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-white/80 italic text-sm font-medium mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-slate-700 border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-0.5 font-bold">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
