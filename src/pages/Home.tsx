import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Users, Award, 
  Phone, Mail, MapPin, ChevronRight, 
  ChevronLeft, Lightbulb, Star, Trophy, Globe,
  CheckCircle2, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const testimonials = [
  {
    quote: "Adarsh Public School provides the best environment for our daughters. The teachers are supportive, and the focus on both academics and character building is truly impressive.",
    author: "Mrs. Anjali Sharma",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    quote: "I love my school! The teachers explain everything clearly and encourage us to participate in activities. I feel confident and happy here.",
    author: "Riya Kumari",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "As a teacher at Adarsh Public School, I am proud to be part of an institution that values education, discipline, and innovation. Every child is encouraged to shine.",
    author: "Mr. Rajesh Kumar",
    role: "Faculty Member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

const campusImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white font-sans">
      <HeroGeometric 
        badge="Adarsh Public School"
        title1="Quality Education for"
        title2="a Brighter Tomorrow"
      />

      <section id="about-us" className="py-32 px-6 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=900&fit=crop" 
                alt="Students in Classroom" 
                className="w-full h-auto opacity-80"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7C8CFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#FF8DA1]/5 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Nurturing Excellence in the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">Heart of Bihar</span>
            </h2>
            <div className="space-y-6 text-[#B3B3B3] leading-relaxed text-lg">
              <p className="font-medium text-white">
                At Adarsh Public School, we believe that education is the most powerful weapon which you can use to change the world.
              </p>
              <p>
                Established in 1998, our school has been a beacon of knowledge in Sitamarhi, providing a world-class CBSE curriculum tailored to the needs of the modern learner. We implement a <span className="text-[#7C8CFF] font-bold">student-centric pedagogy</span> that focuses on individual strengths.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#7C8CFF]/10 rounded-xl flex items-center justify-center text-[#7C8CFF] shrink-0 border border-[#7C8CFF]/20">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Modern Labs</h4>
                    <p className="text-sm text-[#6B6B6B]">State-of-the-art</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FF8DA1]/10 rounded-xl flex items-center justify-center text-[#FF8DA1] shrink-0 border border-[#FF8DA1]/20">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Expert Faculty</h4>
                    <p className="text-sm text-[#6B6B6B]">Dedicated team</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-[#7C8CFF] font-bold hover:text-[#FF8DA1] transition-colors"
              >
                Learn More About Us <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Beautiful Campus</h2>
              <p className="text-xl text-[#B3B3B3] font-medium">A world-class infrastructure designed to inspire learning and creativity.</p>
            </div>
            <Link 
              to="/campus"
              className="px-10 py-5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white font-extrabold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-[#7C8CFF]/20 uppercase tracking-widest text-sm"
            >
              Explore Campus
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl cursor-pointer border border-white/5"
              >
                <img src={img} alt={`Campus ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] opacity-0 group-hover:opacity-60 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why Adarsh Public School?</h2>
            <p className="text-xl text-[#B3B3B3] font-medium max-w-2xl mx-auto">Providing a nurturing environment where every child can reach their potential.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { label: 'Students Enrolled', val: '1000+', icon: Users, color: 'text-[#7C8CFF]' },
              { label: 'Expert Faculty', val: '50+', icon: GraduationCap, color: 'text-[#FF8DA1]' },
              { label: 'Board Results', val: '100%', icon: Award, color: 'text-emerald-400' },
              { label: 'Years of Excellence', val: '25+', icon: Star, color: 'text-sky-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] text-center border border-white/10 shadow-2xl"
              >
                <div className={`w-14 h-14 ${stat.color} bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10`}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <p className="text-4xl font-extrabold mb-2 text-white">{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Smart Classrooms',
                desc: 'Digitally enabled learning spaces with interactive tools.',
                icon: Lightbulb,
                color: 'from-indigo-500 to-blue-500'
              },
              {
                title: 'Sports & Athletics',
                desc: 'Comprehensive sports program with professional coaching.',
                icon: Trophy,
                color: 'from-orange-500 to-rose-500'
              },
              {
                title: 'Modern Science Labs',
                desc: 'Well-equipped physics, chemistry, and biology labs.',
                icon: BookOpen,
                color: 'from-emerald-500 to-teal-500'
              },
              {
                title: 'Safe Transport',
                desc: 'GPS-enabled bus fleet ensuring safe commute for students.',
                icon: Globe,
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all group border border-white/5"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">{feature.title}</h3>
                <p className="text-[#B3B3B3] leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#121212] overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
          <GraduationCap size={600} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">What Parents Say</h2>
          <p className="text-xl text-[#B3B3B3] font-medium">Voices of our community reflecting our commitment to excellence.</p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative min-h-[400px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="bg-white/5 backdrop-blur-2xl p-12 md:p-16 rounded-[4rem] border border-white/10 text-center flex flex-col items-center shadow-2xl"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-10 border-4 border-[#FF8DA1] shadow-2xl ring-8 ring-white/5">
                  <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} className="w-full h-full object-cover" />
                </div>
                <p className="text-xl md:text-2xl italic mb-10 leading-relaxed font-medium text-white/90">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-[#6B6B6B] font-bold uppercase tracking-[0.2em] text-[10px] mt-2">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            <button onClick={prevTestimonial} className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group">
              <ChevronLeft size={28} className="text-[#7C8CFF] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextTestimonial} className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group">
              <ChevronRight size={28} className="text-[#FF8DA1] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4">Shape Your Future With Us</h2>
            <p className="text-white/80 text-xl font-light">Join the Adarsh Public School family today.</p>
          </div>
          <Link to="/admissions?tab=apply" className="px-12 py-5 bg-white text-[#7C8CFF] font-black rounded-xl hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-sm">
            Apply Now 2026
          </Link>
        </div>
      </section>

      <section id="contact-us" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Get in Touch</h2>
              <p className="text-xl text-[#B3B3B3] mb-16 font-medium">Reach out for admissions or to schedule a campus visit.</p>
              
              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Our Address', detail: 'Bathnaha, Sitamarhi, Bihar - 843302' },
                  { icon: Phone, title: 'Phone Number', detail: '+91 98765 43210' },
                  { icon: Mail, title: 'Email Address', detail: 'info@adarshpublicschool.com' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-[#7C8CFF] shrink-0 border border-white/5 group-hover:border-[#7C8CFF]/50 transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xl mb-1">{item.title}</h4>
                      <p className="text-[#B3B3B3] text-lg">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 p-12 rounded-[4rem] shadow-2xl border border-white/10">
                <h3 className="text-2xl font-extrabold text-white mb-8">Send a Message</h3>
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <CheckCircle2 size={64} className="text-[#7C8CFF] mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-[#B3B3B3]">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:border-[#7C8CFF] transition-all outline-none" 
                      />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:border-[#7C8CFF] transition-all outline-none" 
                      />
                    </div>
                    <textarea 
                      required
                      placeholder="Your Message" 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:border-[#7C8CFF] transition-all resize-none outline-none"
                    ></textarea>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-rose-500 text-sm">
                        <AlertCircle size={16} /> Error sending message. Please try again.
                      </div>
                    )}
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white font-extrabold rounded-2xl shadow-xl shadow-[#7C8CFF]/20 uppercase tracking-widest text-sm disabled:opacity-50"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
