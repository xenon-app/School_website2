import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Users, Award, 
  Phone, Mail, MapPin, ChevronRight, 
  ChevronLeft, Lightbulb, Star
} from 'lucide-react';

const testimonials = [
  {
    quote: "Adarsh Public School provides the best environment for our daughters. The teachers are supportive, and the focus on both academics and character building is truly impressive.",
    author: "Mrs. Anjali Sharma",
    role: "Parent",
    image: "https://picsum.photos/seed/parent1/100/100"
  },
  {
    quote: "I love my school! The teachers explain everything clearly and encourage us to participate in activities. I feel confident and happy here.",
    author: "Riya Kumari",
    role: "Student",
    image: "https://picsum.photos/seed/student1/100/100"
  },
  {
    quote: "As a teacher at Adarsh Public School, I am proud to be part of an institution that values education, discipline, and innovation. Every child is encouraged to shine.",
    author: "Mr. Rajesh Kumar",
    role: "Faculty Member",
    image: "https://picsum.photos/seed/faculty1/100/100"
  }
];

const campusImages = [
  "https://picsum.photos/seed/campus1/800/600",
  "https://picsum.photos/seed/campus2/800/600",
  "https://picsum.photos/seed/campus3/800/600",
  "https://picsum.photos/seed/campus4/800/600",
  "https://picsum.photos/seed/campus5/800/600",
  "https://picsum.photos/seed/campus6/800/600"
];

interface LandingPageProps {
  onOpenAdmission?: () => void;
}

const heroImages = [
  "https://picsum.photos/seed/school-campus-main/1920/1080",
  "https://picsum.photos/seed/school-campus-2/1920/1080",
  "https://picsum.photos/seed/school-campus-3/1920/1080"
];

export default function LandingPage({ onOpenAdmission }: LandingPageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white font-sans selection:bg-school-blue selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentHeroImage}
              src={heroImages[currentHeroImage]} 
              alt="Adarsh Public School Campus" 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* 35% Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-black/35 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-school-blue/40 via-transparent to-school-blue/60 z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[1] text-white drop-shadow-2xl">
              Welcome to <br />
              <span className="text-school-gold drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">Adarsh Public School</span>
            </h1>
            <p className="text-2xl md:text-5xl font-black mb-6 text-white tracking-tight">
              Quality Education for a Brighter Tomorrow
            </p>
            <p className="text-lg md:text-2xl font-medium mb-12 text-white/90 max-w-3xl mx-auto italic">
              Empowering young minds with knowledge, discipline and values for a brighter future
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenAdmission}
                className="px-12 py-5 bg-orange-500 text-white font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-orange-500/40 uppercase tracking-widest text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">APPLY FOR 2025-26</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </button>
              <a 
                href="https://www.british-school.org/virtualtour/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-12 py-5 bg-transparent border-2 border-white text-white font-black rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all uppercase tracking-widest text-sm"
              >
                VIRTUAL TOUR
              </a>
            </div>
          </motion.div>
        </div>

        {/* CBSE Affiliation Badge */}
        <div className="absolute bottom-10 right-10 z-30 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-school-blue rounded-lg flex items-center justify-center text-white">
              <Award size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-school-blue uppercase tracking-widest">Affiliated to</p>
              <p className="text-sm font-black text-slate-900">CBSE, New Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/classroom-learning/800/900" 
                alt="Students in Classroom" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-school-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-school-blue/5 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-school-blue mb-8 leading-tight">
              Nurturing Excellence in the <span className="text-school-gold">Heart of Bihar</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p className="font-medium text-slate-800">
                At Adarsh Public School, we believe that education is the most powerful weapon which you can use to change the world.
              </p>
              <p>
                Established in 1998, our school has been a beacon of knowledge in Sitamarhi, providing a world-class CBSE curriculum tailored to the needs of the modern learner. We implement a <span className="text-school-blue font-bold">student-centric pedagogy</span> that focuses on individual strengths and fosters a love for lifelong learning.
              </p>
              <p>
                Our mission is to ensure <span className="text-school-blue font-bold">holistic development</span>—balancing academic rigor with physical education, arts, and moral values. We prepare our students not just for exams, but for life.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-school-blue/10 rounded-xl flex items-center justify-center text-school-blue shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Modern Labs</h4>
                    <p className="text-sm">State-of-the-art facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-school-gold/10 rounded-xl flex items-center justify-center text-school-gold shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expert Faculty</h4>
                    <p className="text-sm">Dedicated educators</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Beautiful Campus Gallery */}
      <section id="gallery" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-school-blue mb-6">Our Beautiful Campus</h2>
              <p className="text-xl text-slate-500 font-medium">A world-class infrastructure designed to inspire learning and creativity.</p>
            </div>
            <a 
              href="https://www.british-school.org/virtualtour/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-school-gold text-white font-extrabold rounded-2xl hover:bg-amber-500 transition-all shadow-xl shadow-amber-500/30 uppercase tracking-widest text-sm"
            >
              Start 360° Virtual Tour
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl cursor-pointer"
              >
                <img src={img} alt={`Campus ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-school-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Star size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Adarsh Public School? (Stats & Features) */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border-4 border-school-blue rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-school-gold rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-school-blue mb-4">Why Adarsh Public School?</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Providing a nurturing environment where every child can reach their full potential.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { label: 'Students Enrolled', val: '1000+', icon: Users, color: 'text-school-blue' },
              { label: 'Expert Faculty', val: '50+', icon: GraduationCap, color: 'text-school-gold' },
              { label: 'Board Results', val: '100%', icon: Award, color: 'text-school-green' },
              { label: 'Years of Excellence', val: '25+', icon: Star, color: 'text-school-sky' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] text-center shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className={`w-14 h-14 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <p className={`text-4xl font-extrabold mb-2 text-slate-900`}>{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Smart Classrooms',
                desc: 'Digitally enabled learning spaces with interactive boards and multimedia tools.',
                icon: Lightbulb,
                color: 'bg-indigo-500'
              },
              {
                title: 'Sports & Athletics',
                desc: 'Comprehensive sports program with professional coaching for various disciplines.',
                icon: Star,
                color: 'bg-orange-500'
              },
              {
                title: 'Modern Science Labs',
                desc: 'Well-equipped physics, chemistry, and biology labs for hands-on practical learning.',
                icon: BookOpen,
                color: 'bg-emerald-500'
              },
              {
                title: 'Safe Transport',
                desc: 'GPS-enabled bus fleet ensuring safe and timely commute for all students.',
                icon: MapPin,
                color: 'bg-blue-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all group border border-slate-50"
              >
                <div className={`w-16 h-16 ${feature.color} text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Faculty */}
      <section id="faculty" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-school-blue mb-4">Our Visionary Leadership</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">Guided by wisdom and driven by a passion for educational excellence.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              role: 'Chairman', 
              name: 'Shri R.P. Singh', 
              quote: 'Our goal is to create a nurturing space where every child can discover their unique potential.',
              image: 'https://picsum.photos/seed/chairman/600/800'
            },
            { 
              role: 'Principal', 
              name: 'Dr. S. Kumari', 
              quote: 'We focus on holistic development, ensuring our students are prepared for the challenges of the 21st century.',
              image: 'https://picsum.photos/seed/principal/600/800'
            },
            { 
              role: 'Our Faculty', 
              name: 'Dedicated Educators', 
              quote: 'A team of 50+ experienced professionals committed to student-centric pedagogy and care.',
              image: 'https://picsum.photos/seed/faculty-group/600/800'
            }
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col h-full"
            >
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={leader.image} 
                  alt={leader.role} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 bg-school-gold text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  {leader.role}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-extrabold text-school-blue mb-4">{leader.name}</h3>
                <p className="text-slate-600 italic mb-8 leading-relaxed flex-grow">"{leader.quote}"</p>
                <button className="flex items-center gap-2 text-school-blue font-extrabold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                  Read Full Message <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-school-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <GraduationCap size={600} />
        </div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-school-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">What Parents Say</h2>
          <p className="text-xl text-white/70 font-medium">Voices of our community reflecting our commitment to excellence.</p>
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
                className="bg-white/10 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] border border-white/20 text-center flex flex-col items-center shadow-2xl"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-10 border-4 border-school-gold shadow-2xl ring-8 ring-white/5">
                  <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} className="w-full h-full object-cover" />
                </div>
                <p className="text-xl md:text-3xl italic mb-10 leading-relaxed font-medium">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="text-2xl font-extrabold text-school-gold">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            <button 
              onClick={prevTestimonial} 
              className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-school-blue hover:border-white transition-all duration-300 group"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-school-blue hover:border-white transition-all duration-300 group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-school-blue mb-6 leading-tight">Get in Touch</h2>
              <p className="text-xl text-slate-500 mb-16 font-medium">Reach out to us for admissions, queries, or to schedule a campus visit.</p>
              
              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Our Address', detail: 'Bathnaha, Sitamarhi, Bihar - 843302' },
                  { icon: Phone, title: 'Phone Number', detail: '+91 XXXXX XXXXX' },
                  { icon: Mail, title: 'Email Address', detail: 'info@adarshpublicschool.com' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-school-blue shrink-0 group-hover:bg-school-blue group-hover:text-white transition-all duration-500 shadow-inner">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-lg">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <h4 className="text-xl font-extrabold text-school-blue mb-6">Office Hours</h4>
                <div className="space-y-3 text-slate-600 font-medium">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-school-blue">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Saturday</span>
                    <span className="text-school-blue">8:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-100 rounded-[4rem] overflow-hidden min-h-[450px] shadow-inner relative group border-8 border-white">
                {/* Map Placeholder with iframe-like feel */}
                <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
                  <MapPin size={80} className="mb-6 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                  <p className="font-bold uppercase tracking-[0.3em] text-[10px]">Google Map View</p>
                  <p className="text-xs mt-2 opacity-50">Sitamarhi, Bihar</p>
                </div>
                {/* Overlay for "Open in Maps" */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <button className="px-8 py-3 bg-white text-school-blue font-extrabold rounded-full shadow-2xl text-xs uppercase tracking-widest hover:bg-school-blue hover:text-white transition-all">
                    Open in Google Maps
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-extrabold text-school-blue mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="w-full px-8 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-school-blue transition-all font-medium" />
                    <input type="email" placeholder="Email Address" className="w-full px-8 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-school-blue transition-all font-medium" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full px-8 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-school-blue transition-all font-medium" />
                  <textarea placeholder="Your Message" rows={4} className="w-full px-8 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-school-blue transition-all font-medium resize-none"></textarea>
                  <button className="w-full py-5 bg-school-blue text-white font-extrabold rounded-2xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 uppercase tracking-widest text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
