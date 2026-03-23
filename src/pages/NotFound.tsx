import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchX, Home, ArrowLeft, Phone, GraduationCap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7C8CFF]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF8DA1]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] blur-3xl opacity-20 scale-150 rounded-full animate-pulse"></div>
          <div className="relative bg-white/5 p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
            <SearchX size={120} strokeWidth={1} className="text-[#7C8CFF] drop-shadow-[0_0_20px_rgba(124,140,255,0.4)]" />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FF8DA1] px-6 py-2 rounded-full border-4 border-[#0A0A0A] font-black text-xs uppercase tracking-[0.3em]"
          >
            Error 404
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#B3B3B3] to-white/50">
            Lost in <br /> Space?
          </h1>
          <p className="text-[#6B6B6B] text-xl font-medium max-w-lg mx-auto leading-relaxed">
            The page you're looking for has vanished. Don't worry, we can help you find your way back.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white rounded-2xl font-black shadow-[0_10px_40px_rgba(124,140,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
          >
            <Home size={18} />
            Back to Safety
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black hover:bg-white/10 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs backdrop-blur-xl"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-12 border-t border-white/5 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#7C8CFF]">
               <Phone size={18} />
             </div>
             <div className="text-left">
               <p className="text-[10px] text-[#6B6B6B] font-black uppercase tracking-widest mb-1">Emergency Support</p>
               <a href="tel:+919876543210" className="text-xl font-bold hover:text-[#FF8DA1] transition-colors tracking-tighter">+91 98765 43210</a>
             </div>
          </div>
          <div className="flex items-center gap-2 opacity-20 group cursor-default">
            <GraduationCap size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Adarsh Public School</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
