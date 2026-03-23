import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Campus', path: '/campus' },
  { name: 'Admissions', path: '/admissions' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C8CFF] to-[#FF8DA1] rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-lg shadow-[#7C8CFF]/20">
              <GraduationCap size={28} />
            </div>
            <div>
              <h1 className="text-lg font-black text-white leading-tight tracking-tight">Adarsh Public School</h1>
              <p className="text-[10px] text-[#6B6B6B] uppercase tracking-widest font-bold">Bathnaha, Sitamarhi</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-colors relative group ${location.pathname === link.path
                  ? 'text-[#7C8CFF]'
                  : 'text-[#B3B3B3] hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] rounded-full transition-all duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-[#B3B3B3] hover:text-white transition-colors">
              <Phone size={16} />
              <span className="text-sm font-bold">+91 98765 43210</span>
            </a>
            <Link
              to="/admissions?tab=apply"
              className="px-6 py-3 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#7C8CFF]/20"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#B3B3B3] hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121212] border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest py-3 border-b border-white/5 transition-colors ${location.pathname === link.path
                    ? 'text-[#7C8CFF]'
                    : 'text-[#B3B3B3]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions?tab=apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white text-center text-sm font-black uppercase tracking-widest rounded-xl"
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
