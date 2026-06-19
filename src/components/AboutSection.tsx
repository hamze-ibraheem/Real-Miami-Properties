import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Hyper-Local Precision",
      description: "We don't just know Miami; we live its neighborhoods. Our precise market analysis ensures you never overpay and always maximize value."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Data-Driven Strategy",
      description: "Combining real-time market data with decades of intuition to position your property perfectly or secure your dream home at the right price."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Confidentiality Assured",
      description: "We represent high-profile individuals across the globe with absolute discretion, white-glove service, and unwavering loyalty."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-white/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop" 
              alt="Miami Coastal Living" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-white/10 border-t border-white/20 p-8 m-4 rounded-2xl shadow-xl">
              <h3 className="text-white font-bold text-2xl mb-2">Unlocking Miami's Best</h3>
              <p className="text-cyan-300 text-xs font-bold uppercase tracking-widest">Turning dreams into addresses.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] text-cyan-400 font-bold text-xs mb-4 block">Our Heritage</span>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Elevating standard real estate into an <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-300">art form.</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-medium">
              Real Miami Properties isn't just a brokerage; it's an institution built on 
              trust, unmatched market intelligence, and an obsession with client success in the 
              Sunshine State. Your priorities dictate our process.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5 backdrop-blur-md bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
