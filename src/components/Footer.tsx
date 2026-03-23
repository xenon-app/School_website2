import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C8CFF] to-[#FF8DA1] rounded-xl flex items-center justify-center">
                <GraduationCap size={28} />
              </div>
              <div>
                <h2 className="text-lg font-black leading-tight">Adarsh Public School</h2>
                <p className="text-[10px] text-[#6B6B6B] uppercase tracking-widest font-bold">Bathnaha, Sitamarhi</p>
              </div>
            </Link>
            <p className="text-[#B3B3B3] text-sm leading-relaxed mb-6">
              Empowering young minds with knowledge, discipline, and values since 1998. committed to academic excellence and holistic development.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#7C8CFF] transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#FF8DA1]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Campus', path: '/campus' },
                { name: 'Admissions', path: '/admissions' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#6B6B6B] text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#FF8DA1]">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Academic Calendar', path: '/academics' },
                { name: 'Fee Structure', path: '/admissions' },
                { name: 'Modern Disclosure', path: '/campus' },
                { name: 'Rules & Regulations', path: '/academics' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#6B6B6B] text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#FF8DA1]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7C8CFF] shrink-0 mt-1" />
                <span className="text-[#B3B3B3] text-sm">Bathnaha, Sitamarhi, Bihar - 843302</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#7C8CFF] shrink-0" />
                <a href="tel:+919876543210" className="text-[#B3B3B3] text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#7C8CFF] shrink-0" />
                <a href="mailto:info@adarshpublicschool.com" className="text-[#B3B3B3] text-sm hover:text-white transition-colors">
                  info@adarshpublicschool.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6B6B]">
            <p>© {new Date().getFullYear()} Adarsh Public School. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <p className="text-white/20">Created By Divyanshu Kumar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
