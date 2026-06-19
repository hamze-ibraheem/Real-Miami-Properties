export default function Footer() {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 border-2 border-slate-900 rotate-45 flex items-center justify-center">
                  <span className="text-[6px] text-slate-900 font-bold -rotate-45">RMP</span>
                </div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight uppercase">Real Miami Properties</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">
              Your Miami Lifestyle, Defined by Professionals. Premier luxury real estate brokerage serving Florida's most exclusive neighborhoods.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#properties" className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-medium">Featured Listings</a></li>
              <li><a href="#about" className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-medium">Our Expertise</a></li>
              <li><a href="#team" className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-medium">Meet The Advisors</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-medium">Contact Agent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Areas Served</h4>
            <ul className="space-y-3">
              <li><span className="text-white/50 text-sm font-medium">Brickell & Downtown</span></li>
              <li><span className="text-white/50 text-sm font-medium">Coral Gables</span></li>
              <li><span className="text-white/50 text-sm font-medium">South Beach</span></li>
              <li><span className="text-white/50 text-sm font-medium">Coconut Grove</span></li>
              <li><span className="text-white/50 text-sm font-medium">Pinecrest</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Contact Headquarters</h4>
            <ul className="space-y-3">
              <li className="text-white/50 text-sm font-medium leading-relaxed">50 Biscayne Blvd #4210<br/>Miami, FL 33132</li>
              <li className="text-cyan-400 text-sm font-bold">+1 786-609-1832</li>
              <li className="text-white/50 text-sm font-medium">info@realmiamiproperties.com</li>
              <li className="flex items-center gap-2 mt-4 text-orange-400 font-bold uppercase tracking-widest text-[10px]">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Open 24/7 for you
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Real Miami Properties. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest hover:text-white cursor-pointer transition-colors">Fair Housing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
