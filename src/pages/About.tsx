import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Heart, 
  Users, 
  Leaf, Sparkles,
  Lightbulb
} from 'lucide-react';

const milestones = [
  { year: '1998', title: 'Foundation', desc: 'School established with 50 students and 5 dedicated teachers.' },
  { year: '2005', title: 'CBSE Affiliation', desc: 'Received CBSE affiliation, marking a milestone in academic excellence.' },
  { year: '2010', title: 'Infrastructure Growth', desc: 'New building inaugurated with modern labs and smart classrooms.' },
  { year: '2015', title: '100% Results', desc: 'First batch with 100% board results in CBSE examinations.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Implemented smart classrooms and digital learning infrastructure.' },
  { year: '2024', title: '25 Years of Excellence', desc: 'Silver Jubilee celebration with 1000+ alumni worldwide.' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    desc: 'Striving for academic and personal excellence in everything we do.',
    color: 'text-[#7C8CFF]'
  },
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'Building character through honesty, responsibility, and ethical conduct.',
    color: 'text-[#FF8DA1]'
  },
  {
    icon: Users,
    title: 'Inclusivity',
    desc: 'Creating a welcoming environment that celebrates diversity.',
    color: 'text-emerald-400'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Fostering creativity and critical thinking in our students.',
    color: 'text-amber-400'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Instilling environmental consciousness and social responsibility.',
    color: 'text-green-400'
  },
  {
    icon: Sparkles,
    title: 'Compassion',
    desc: 'Nurturing empathy and kindness in our school community.',
    color: 'text-rose-400'
  },
];



export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans pt-20">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#FF8DA1]"></div>
              <span className="text-[#FF8DA1] font-bold uppercase tracking-[0.3em] text-sm">Our Legacy</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
              Our Story of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#B3B3B3] font-light leading-relaxed max-w-2xl">
              For over 25 years, Adarsh Public School has been shaping young minds and building tomorrow's leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=900&fit=crop" 
                  alt="School Building" 
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-[#7C8CFF] to-[#FF8DA1] text-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                <p className="text-5xl font-black">25+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years of Pride</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                From Humble Beginnings to <span className="text-[#7C8CFF]">Educational Excellence</span>
              </h2>
              <div className="space-y-6 text-[#B3B3B3] leading-relaxed text-lg font-light">
                <p>
                  Founded in 1998 by visionary educationist Shri R.P. Singh, Adarsh Public School began with a simple dream: to provide quality education to the children of Bihar.
                </p>
                <p>
                  What started with just 50 students has grown into a premier institution serving over 1000 students, guided by a team of 50+ experienced educators.
                </p>
                <p>
                  Our affiliation to CBSE since 2005 has enabled us to maintain high academic standards while preparing students for the 21st century.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Core Values</h2>
            <p className="text-xl text-[#B3B3B3] font-light max-w-2xl mx-auto">The principles that guide our journey every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:border-[#7C8CFF]/50 transition-all group"
              >
                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center ${value.color} mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{value.title}</h3>
                <p className="text-[#B3B3B3] leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Milestones</h2>
            <p className="text-xl text-[#B3B3B3] font-light">Tracking 25 years of educational transformation.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/5"></div>
            <div className="space-y-16">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-[3rem] inline-block border border-white/10 shadow-xl">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] font-black text-3xl">{milestone.year}</span>
                      <h3 className="text-xl font-extrabold text-white mt-2">{milestone.title}</h3>
                      <p className="text-[#6B6B6B] mt-2 font-light">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#7C8CFF] rounded-full shadow-[0_0_15px_rgba(124,140,255,0.8)] z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
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
    </div>
  );
}
