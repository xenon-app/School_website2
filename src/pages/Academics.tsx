import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Users, 
  ChevronRight
} from 'lucide-react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('curriculum');

  const tabs = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'rules', label: 'Rules', icon: ShieldCheck },
    { id: 'exams', label: 'Exams', icon: FileText },
    { id: 'clubs', label: 'Clubs', icon: Users },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <h2 className="text-4xl font-extrabold text-white">CBSE Curriculum Structure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  level: "Pre-Primary",
                  focus: "Play-way method, sensory development.",
                  subjects: ["English", "Hindi", "Math", "Art & Craft"]
                },
                {
                  level: "Primary",
                  focus: "Foundation building, conceptual clarity.",
                  subjects: ["Science", "Social Studies", "Computer", "Sanskrit"]
                },
                {
                  level: "Secondary",
                  focus: "Analytical thinking, skill development.",
                  subjects: ["English", "Math", "Physics", "Chemistry"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#7C8CFF]/50 transition-all">
                  <h3 className="text-xl font-bold text-[#7C8CFF] mb-3">{item.level}</h3>
                  <p className="text-[#B3B3B3] text-sm mb-6 font-light">{item.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((sub, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-[#7C8CFF]/10 text-[#7C8CFF] text-xs font-medium rounded-full border border-[#7C8CFF]/20">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'calendar':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Holiday <span className="text-[#7C8CFF]">Calendar</span> 2026</h2>
              <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-[0.2em] px-4 py-2 bg-white/5 rounded-full border border-white/5">Session 2026-27</span>
            </div>
             <div className="bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="px-8 py-6 font-black text-xs uppercase tracking-[0.2em] text-[#7C8CFF]">Month</th>
                            <th className="px-8 py-6 font-black text-xs uppercase tracking-[0.2em] text-[#7C8CFF]">Occasion / Holiday</th>
                            <th className="px-8 py-6 font-black text-xs uppercase tracking-[0.2em] text-[#FF8DA1]">Date & Day</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[
                            { m: 'January', e: 'Makar Sankranti', d: 'Jan 14, Wed' },
                            { m: 'January', e: 'Basant Panchami', d: 'Jan 23, Fri' },
                            { m: 'January', e: 'Republic Day', d: 'Jan 26, Mon' },
                            { m: 'February', e: 'Sant Ravidas Jayanti', d: 'Feb 01, Sun' },
                            { m: 'February', e: 'Shab-e-Barat', d: 'Feb 04, Wed' },
                            { m: 'February', e: 'Maha Shivratri', d: 'Feb 15, Sun' },
                            { m: 'March', e: 'Holi Celebrations', d: 'Mar 03-04, Tue-Wed' },
                            { m: 'March', e: 'Ramzan Last Friday', d: 'Mar 13, Fri' },
                            { m: 'March', e: 'Eid-ul-Fitr (Eid)', d: 'Mar 21, Sat' },
                            { m: 'March', e: 'Bihar Day', d: 'Mar 22, Sun' },
                            { m: 'March', e: 'Ram Navami', d: 'Mar 27, Fri' },
                            { m: 'March', e: 'Mahavir Jayanti', d: 'Mar 31, Tue' },
                            { m: 'April', e: 'Good Friday', d: 'Apr 03, Fri' },
                            { m: 'April', e: 'Dr. Ambedkar Jayanti', d: 'Apr 14, Tue' },
                            { m: 'April', e: 'Veer Kunwar Singh Jayanti', d: 'Apr 23, Thu' },
                            { m: 'April', e: 'Janaki Navami', d: 'Apr 25, Sat' },
                            { m: 'May', e: 'May Day / Buddha Purnima', d: 'May 01, Fri' },
                            { m: 'May', e: 'Eid-ul-Zuha (Bakrid)', d: 'May 28, Thu' },
                            { m: 'June', e: 'Summer Vacation', d: 'Jun 01-20, Mon-Sat' },
                            { m: 'August', e: 'Independence Day', d: 'Aug 15, Sat' },
                            { m: 'October', e: 'Mahatma Gandhi Jayanti', d: 'Oct 02, Fri' },
                            { m: 'October', e: 'Durga Puja Holidays', d: 'Oct 17-21, Sat-Wed' },
                            { m: 'November', e: 'Diwali & Chhath Puja Break', d: 'Nov 07-17, Sat-Tue' },
                            { m: 'December', e: 'Winter Vacation', d: 'Dec 25-31, Fri-Thu' },
                        ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-5 text-white font-black text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity underline decoration-[#7C8CFF]/30 underline-offset-8">{row.m}</td>
                                <td className="px-8 py-5 text-white font-bold group-hover:text-[#7C8CFF] transition-colors">{row.e}</td>
                                <td className="px-8 py-5 text-[#B3B3B3] font-medium text-sm tabular-nums">{row.d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
          </motion.div>
        );
      case 'rules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "General Conduct", rules: ["Arrive 10 minutes early", "Clean uniform mandatory", "Respect all staff"] },
                { title: "Attendance", rules: ["Minimum 75% required", "Leave must be applied early", "Sick leave needs certificate"] }
              ].map((section, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h3 className="text-xl font-bold text-[#7C8CFF] mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-[#B3B3B3] font-light">
                        <ChevronRight size={16} className="text-[#FF8DA1] mt-1 shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'clubs':
        return (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6">
                {[
                    { name: "Science Club", desc: "Innovation through robotics & coding.", color: "from-[#7C8CFF] to-blue-600" },
                    { name: "Cultural Club", desc: "Music, dance and fine arts.", color: "from-[#FF8DA1] to-rose-600" },
                    { name: "Eco Club", desc: "Environmental awareness & gardening.", color: "from-emerald-400 to-green-600" }
                ].map((club, idx) => (
                    <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#7C8CFF]/50 transition-all group">
                        <div className={`w-12 h-1 mb-6 rounded-full bg-gradient-to-r ${club.color}`} />
                        <h3 className="text-xl font-bold text-white mb-3">{club.name}</h3>
                        <p className="text-[#B3B3B3] text-sm font-light leading-relaxed">{club.desc}</p>
                    </div>
                ))}
            </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop" alt="Academics" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              Academic <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">Excellence</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto no-scrollbar gap-10 py-6">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 whitespace-nowrap transition-all font-black text-xs uppercase tracking-[0.2em] relative group ${
                        activeTab === tab.id ? 'text-[#7C8CFF]' : 'text-[#6B6B6B] hover:text-white'
                    }`}
                >
                    <tab.icon size={16} />
                    {tab.label}
                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] rounded-full transition-all ${activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
                </button>
            ))}
        </div>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <div key={activeTab}>{renderContent()}</div>
        </AnimatePresence>
      </section>
    </div>
  );
}
