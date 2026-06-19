import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Listings', href: '#properties' },
    { name: 'Market Info', href: '#about' },
    { name: 'Our Team', href: '#team' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 border-2 border-slate-900 rotate-45 flex items-center justify-center">
                <span className="text-[10px] text-slate-900 font-bold -rotate-45">RMP</span>
              </div>
            </div>
            <span className="text-white font-bold text-xl tracking-tight uppercase hidden sm:block">Real Miami Properties</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold hover:bg-cyan-50 transition-colors text-sm uppercase tracking-wide shadow-lg"
            >
              Contact Agent
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full left-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-3 py-3 text-base font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl mt-4 text-center uppercase tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Contact Agent
          </a>
        </div>
      )}
    </nav>
  );
}
