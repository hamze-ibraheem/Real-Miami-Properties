import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row p-2">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 p-8 md:p-12 text-white relative flex flex-col justify-between bg-white/5 rounded-2xl border border-white/10 m-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <span className="uppercase tracking-[0.3em] text-orange-400 font-bold text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Let's Connect</h2>
              <p className="text-white/70 mb-12 font-medium">
                Ready to find your Miami dream home or list your luxury property? Reach out and let our experts guide you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 mt-1">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-1">Office Location</h4>
                    <p className="text-white font-medium">50 Biscayne Blvd #4210<br/>Miami, FL 33132</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 mt-1">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-1">Give Us a Call</h4>
                    <p className="text-white font-medium">+1 786-609-1832</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 mt-1">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-1">Business Hours</h4>
                    <p className="text-white font-medium">Open 24/7 for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8">Instant Inquiry</h3>
            
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="backdrop-blur-md bg-green-500/10 border border-green-500/30 text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center h-[400px]"
               >
                 <div className="bg-green-500/20 p-4 rounded-full mb-6">
                   <Send className="h-8 w-8 text-green-400" />
                 </div>
                 <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                 <p className="text-green-300 font-medium">One of our luxury property agents will contact you shortly.</p>
               </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="First Name *"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="Last Name *"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address *"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <select 
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white/80 focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
                >
                  <option className="bg-slate-900 text-white" value="" disabled>I am interested in...</option>
                  <option className="bg-slate-900 text-white">Buying property</option>
                  <option className="bg-slate-900 text-white">Selling property</option>
                  <option className="bg-slate-900 text-white">Investment ops</option>
                </select>

                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>

                <button 
                  type="submit"
                  className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all uppercase tracking-widest text-xs mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
