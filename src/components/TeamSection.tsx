import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { team } from '../data';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[0.3em] text-orange-400 font-bold text-xs mb-4 block">Expert Advisors</span>
          <h2 className="text-4xl font-extrabold text-white mb-6">Meet Your Local Pros</h2>
          <p className="text-white/70 text-lg font-medium leading-relaxed text-balance">
            Our agents do more than sell property—they act as your personal market analysts, 
            navigators, and fierce negotiators in the competitive Miami landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-colors duration-300 p-5 shadow-xl flex flex-col"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 border border-white/10">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-100 hover:scale-105 transition duration-500 mix-blend-overlay opacity-90"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 uppercase tracking-widest text-xs font-bold mb-4">{member.role}</p>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex-1 bg-white/5 border border-white/10 flex items-center justify-center py-2.5 rounded-xl hover:bg-white/10 transition-colors text-white text-xs font-bold uppercase tracking-wider">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" /> Call
                  </a>
                  <a href={`mailto:${member.email}`} className="flex-1 bg-white/5 border border-white/10 flex items-center justify-center py-2.5 rounded-xl hover:bg-white/10 transition-colors text-white text-xs font-bold uppercase tracking-wider">
                    <Mail className="h-4 w-4 mr-2 text-orange-400" /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
