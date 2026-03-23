import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Image as ImageIcon, 
  CheckCircle2, 
  Wifi, 
  TreePine, 
  X
} from 'lucide-react';

export default function Campus() {
  const [activeTab, setActiveTab] = useState('infrastructure');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = [
    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
    { id: 'gallery', label: 'Campus Gallery', icon: ImageIcon },
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop', title: 'Main School Building' },
    { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=800&fit=crop', title: 'Modern Computer Lab' },
    { url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=800&fit=crop', title: 'Spacious Playground' },
    { url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop', title: 'Science Laboratory' },
    { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop', title: 'Well-stocked Library' },
    { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=800&fit=crop', title: 'Smart Classroom' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop', title: 'Activity Area' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop', title: 'Assembly Ground' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'infrastructure':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-white">Modern Ecosystem</h2>
                <p className="text-[#B3B3B3] leading-relaxed font-light">
                    Our campus is a masterpiece of modern architecture and natural beauty, designed to foster creativity and scientific curiosity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TreePine, label: 'Lush Campus' },
                    { icon: Wifi, label: 'Gigabit Fiber' },
                    { icon: Building2, label: '24/7 Security' },
                    { icon: CheckCircle2, label: 'Smart Amenities' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="w-10 h-10 bg-[#7C8CFF]/10 rounded-xl flex items-center justify-center text-[#7C8CFF] border border-[#7C8CFF]/20">
                        <item.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop" alt="Campus" className="opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-bold text-[#7C8CFF]">Asset</th>
                      <th className="px-6 py-4 font-bold text-[#FF8DA1]">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { info: 'Total Area', detail: '8,500 Sq. Mtr.' },
                      { info: 'Classrooms', detail: '35 Digitally Enabled' },
                      { info: 'Labs', detail: '5 Specialized Centres' },
                      { info: 'Library', detail: '1,500+ Curated Books' },
                      { info: 'Playground', detail: 'International Standard 4,000 Sq. Mtr.' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">{row.info}</td>
                        <td className="px-6 py-4 text-[#B3B3B3] font-light">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );
      case 'gallery':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img.url)}
                  className="relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer group border border-white/10"
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {selectedImage && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
                  <button className="absolute top-10 right-10 text-white"><X size={48} /></button>
                  <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} src={selectedImage} className="max-w-full max-h-full rounded-[4rem] shadow-2xl border border-white/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop" alt="Campus" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              The <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">Campus</span>
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
