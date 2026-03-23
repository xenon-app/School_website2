import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  name?: string;
}

export function CustomSelect({ options, value, onChange, placeholder = "Select...", label, name }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      {label && (
        <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">
          {label}
        </label>
      )}
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/5 border ${isOpen ? 'border-[#7C8CFF]' : 'border-white/10'} rounded-2xl p-5 text-white flex items-center justify-between cursor-pointer transition-all hover:bg-white/10`}
      >
        <span className={!selectedOption ? "text-[#6B6B6B]" : "text-white"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-[#6B6B6B]" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 left-0 right-0 mt-2 bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            <div className="max-h-60 overflow-y-auto no-scrollbar py-2">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-6 py-4 flex items-center justify-between hover:bg-[#7C8CFF]/10 transition-colors cursor-pointer group ${
                    value === option.value ? 'bg-[#7C8CFF]/5 text-[#7C8CFF]' : 'text-[#B3B3B3]'
                  }`}
                >
                  <span className="font-medium group-hover:text-white transition-colors">
                    {option.label}
                  </span>
                  {value === option.value && (
                    <Check size={16} className="text-[#7C8CFF]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <input type="hidden" name={name} value={value} required />
    </div>
  );
}
