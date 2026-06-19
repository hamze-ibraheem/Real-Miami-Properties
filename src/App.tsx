/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative font-sans overflow-x-hidden flex flex-col">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-400 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600 blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 w-full">
        <Navbar />
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Hero />
        <FeaturedProperties />
        <AboutSection />
        <TeamSection />
        <Testimonials />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}

