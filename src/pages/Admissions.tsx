import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, 
  ClipboardList, 
  CreditCard, 
  CheckCircle2, 
  Mail,
  BookOpen,
  FileText, 
  Camera,
  AlertCircle
} from 'lucide-react';
import { CustomSelect } from '../components/ui/CustomSelect';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('process');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    fatherName: '',
    motherName: '',
    gender: '',
    class: '',
    phone: '',
    email: '',
    residentialAddress: '',
    localAddress: '',
    previousSchool: '',
    nationality: 'Indian',
    remarks: ''
  });

  const [studentPhoto, setStudentPhoto] = useState<File | null>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [previews, setPreviews] = useState({ photo: '' });
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isPermissionDenied, setIsPermissionDenied] = useState(false);
  const [isCamLoading, setIsCamLoading] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, isWebcamOpen]);

  const startWebcam = async () => {
    setIsCamLoading(true);
    setIsPermissionDenied(false);
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      setStream(s);
      setIsWebcamOpen(true);
    } catch (err: any) {
      console.error("Error accessing webcam:", err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setIsPermissionDenied(true);
      } else {
          alert("Could not access camera. Please check your connection.");
      }
      setIsWebcamOpen(false);
    } finally {
        setIsCamLoading(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (video.videoWidth === 0 || video.videoHeight === 0) {
          console.warn("Video dimensions not ready");
          return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        // Apply mirroring to canvas to match the preview
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedPhoto(dataUrl);
        stopWebcam();
      }
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsWebcamOpen(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');

    if (tab && ['process', 'fees', 'apply'].includes(tab)) {
      setActiveTab(tab);

      if (tab === 'apply') {
        setTimeout(() => {
          const el = document.getElementById("apply-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location.search]);

  const tabs = [
    { id: 'process', label: 'Process', icon: ClipboardList },
    { id: 'fees', label: 'Fees', icon: CreditCard },
    { id: 'apply', label: 'Apply Now', icon: UserPlus },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setStudentPhoto(file);
        setPreviews(p => ({ ...p, photo: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (studentPhoto) data.append('studentPhoto', studentPhoto);
    if (capturedPhoto) {
      try {
        const res = await fetch(capturedPhoto);
        const blob = await res.blob();
        data.append('livePhoto', blob, 'live_identity_photo.jpg');
      } catch (err) {
        console.error("Error processing captured photo:", err);
      }
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admission`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Admission submission error:', error);
      setFormStatus('error');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'process':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-white">Eligibility</h2>
                <div className="space-y-4">
                  {[{ age: "3+", cls: "Nursery" }, { age: "6+", cls: "Class I" }].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="font-bold text-[#7C8CFF]">{item.cls}</span>
                      <span className="text-[#6B6B6B] text-sm">Age {item.age} as on 31st March</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                <h3 className="text-xl font-bold text-[#FF8DA1] mb-6 flex items-center gap-2">
                  <FileText size={20} /> Required Documents
                </h3>
                <ul className="space-y-4">
                  {["Birth Certificate", "Transfer Certificate", "Previous Marksheet", "Aadhar Card", "4 Photos"].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#B3B3B3] text-sm font-light leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#7C8CFF] mt-0.5 shrink-0" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'fees':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5">
                        <tr>
                            <th className="px-6 py-4 font-bold text-[#7C8CFF]">Class</th>
                            <th className="px-6 py-4 font-bold text-[#FF8DA1]">Admissions</th>
                            <th className="px-6 py-4 font-bold text-[#7C8CFF]">Monthly</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[
                            { g: 'Nursery - UKG', adm: '₹2,000', m: '₹1,200' },
                            { g: 'Class I - V', adm: '₹3,500', m: '₹1,500' },
                        ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-white font-medium">{row.g}</td>
                                <td className="px-6 py-4 text-[#B3B3B3] font-light">{row.adm}</td>
                                <td className="px-6 py-4 text-[#B3B3B3] font-light">{row.m}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </motion.div>
        );
      case 'apply':
        return (
          <motion.div id="apply-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto pb-20">
            {formStatus === 'success' ? (
              <div className="text-center py-20 bg-white/5 rounded-[4rem] border border-[#7C8CFF]/20 shadow-2xl">
                <div className="w-24 h-24 bg-[#7C8CFF]/10 rounded-full flex items-center justify-center text-[#7C8CFF] mx-auto mb-8 shadow-[0_0_30px_rgba(124,140,255,0.3)]">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="text-4xl font-black text-white mb-4">Application Submitted!</h2>
                <p className="text-[#B3B3B3] text-xl font-light mb-10 max-w-lg mx-auto">Thank you for choosing Adarsh Public School. Our admissions team will review your application soon.</p>
                <button onClick={() => setFormStatus('idle')} className="px-10 py-4 border border-[#7C8CFF] text-[#7C8CFF] rounded-xl font-bold hover:bg-[#7C8CFF]/10 transition-all uppercase tracking-widest text-xs">
                  Submit Another Form
                </button>
              </div>
            ) : (
                <div className="bg-white/5 p-8 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl backdrop-blur-3xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-white/5 pb-10">
                        <div>
                            <h2 className="text-4xl font-black text-white tracking-tighter mb-2 uppercase">School Admission <span className="text-[#7C8CFF]">Form</span></h2>
                            <p className="text-[#6B6B6B] font-medium">Session 2026-27 | Please fill all details accurately.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <label className="text-xs font-black text-[#6B6B6B] uppercase tracking-widest">Student Photo</label>
                            <label className="relative group cursor-pointer">
                                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} className="hidden" />
                                <div className="w-28 h-28 rounded-3xl bg-white/5 border-2 border-dashed border-white/10 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-[#7C8CFF]/50">
                                    {previews.photo ? (
                                        <img src={previews.photo} className="w-full h-full object-cover" alt="Preview" />
                                    ) : (
                                        <div className="text-center">
                                            <Camera size={24} className="text-[#6B6B6B] mx-auto mb-1 group-hover:text-[#7C8CFF]" />
                                            <span className="text-[10px] text-[#6B6B6B] font-bold">Upload</span>
                                        </div>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-8">
                            <h3 className="text-[#7C8CFF] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-3">
                                <UserPlus size={16} /> Personal Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Student Name</label>
                                    <input required type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="As per documents" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Date of Birth</label>
                                    <input required type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all [color-scheme:dark]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Father's Name</label>
                                    <input required type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Mother's Name</label>
                                    <input required type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <CustomSelect
                                    label="Gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={(val) => setFormData(prev => ({ ...prev, gender: val }))}
                                    placeholder="-- Select --"
                                    options={[
                                        { value: 'male', label: 'Male' },
                                        { value: 'female', label: 'Female' },
                                        { value: 'other', label: 'Other' },
                                    ]}
                                />
                                <CustomSelect
                                    label="Class Applying For"
                                    name="class"
                                    value={formData.class}
                                    onChange={(val) => setFormData(prev => ({ ...prev, class: val }))}
                                    placeholder="-- Select Class --"
                                    options={[
                                        { value: 'nursery', label: 'Nursery' },
                                        { value: 'lkg', label: 'L.K.G.' },
                                        { value: 'ukg', label: 'U.K.G.' },
                                        { value: '1', label: 'Class I' },
                                        { value: '2', label: 'Class II' },
                                        { value: '3', label: 'Class III' },
                                        { value: '4', label: 'Class IV' },
                                        { value: '5', label: 'Class V' },
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-[#FF8DA1] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-3">
                                <Mail size={16} /> Contact Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Phone Number</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="10 Digit Number" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Email ID</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Optional" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Residential Address</label>
                                    <textarea required name="residentialAddress" value={formData.residentialAddress} onChange={handleInputChange} rows={3} placeholder="Full detail including PIN code" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all resize-none"></textarea>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Local Address</label>
                                    <textarea name="localAddress" value={formData.localAddress} onChange={handleInputChange} rows={3} placeholder="If different from residential" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-[#6B6B6B] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-3">
                                <BookOpen size={16} /> Other Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Previous School</label>
                                    <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleInputChange} placeholder="Name & Location" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Nationality</label>
                                    <input required type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-[#6B6B6B] ml-1 uppercase tracking-tight">Message / Remarks</label>
                                    <textarea name="remarks" value={formData.remarks} onChange={handleInputChange} rows={2} placeholder="Any special needs or information" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#7C8CFF] transition-all resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-[#7C8CFF]/5 border border-[#7C8CFF]/20 rounded-[3rem] space-y-8 overflow-hidden">
                            <h3 className="text-[#7C8CFF] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-3">
                                <Camera size={16} /> Live Identity Verification
                            </h3>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <p className="text-sm text-[#B3B3B3] leading-relaxed">
                                        For security and verification, please capture a live photo. Ensure your face is clearly visible in well-lit conditions.
                                    </p>
                                    
                                    {!capturedPhoto && !isWebcamOpen && (
                                        <button 
                                            type="button"
                                            onClick={startWebcam}
                                            className="px-8 py-4 bg-[#7C8CFF] text-white rounded-xl font-bold hover:scale-105 transition-all text-sm flex items-center gap-3"
                                        >
                                            <Camera size={20} /> Start Camera
                                        </button>
                                    )}

                                    {isWebcamOpen && (
                                        <div className="flex gap-4">
                                            <button 
                                                type="button"
                                                onClick={capturePhoto}
                                                className="px-8 py-4 bg-[#FF8DA1] text-white rounded-xl font-bold hover:scale-105 transition-all text-sm"
                                            >
                                                Take Photo
                                            </button>
                                            <button 
                                                type="button"
                                                onClick={stopWebcam}
                                                className="px-8 py-4 border border-white/10 text-[#6B6B6B] rounded-xl font-bold hover:bg-white/5 transition-all text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    )}

                                    {isPermissionDenied && (
                                        <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-start gap-4">
                                            <AlertCircle className="text-rose-500 shrink-0 mt-1" size={20} />
                                            <div>
                                                <p className="text-sm font-bold text-rose-500 mb-1">Camera Permission Denied</p>
                                                <p className="text-xs text-[#B3B3B3] leading-relaxed">
                                                    You need to allow camera access to take a live photo. 
                                                    Please click the <strong>lock icon</strong> in your browser address bar and enable the camera for this site.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {capturedPhoto && (
                                        <button 
                                            type="button"
                                            onClick={() => { setCapturedPhoto(null); startWebcam(); }}
                                            className="px-8 py-4 border border-[#7C8CFF] text-[#7C8CFF] rounded-xl font-black hover:bg-[#7C8CFF]/5 transition-all text-xs flex items-center gap-3"
                                        >
                                            <Camera size={16} /> Retake Photo
                                        </button>
                                    )}
                                </div>

                                <div className="relative aspect-video bg-[#050505] rounded-[2rem] border-2 border-dashed border-white/10 overflow-hidden flex items-center justify-center group ring-[12px] ring-white/[0.02] mb-4">
                                    {isCamLoading && (
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-4 border-[#7C8CFF]/20 border-t-[#7C8CFF] rounded-full animate-spin"></div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#6B6B6B]">Requesting Camera...</p>
                                        </div>
                                    )}
                                    {isWebcamOpen && (
                                        <video 
                                            ref={videoRef} 
                                            autoPlay 
                                            playsInline 
                                            muted
                                            className="w-full h-full object-cover transform -scale-x-100"
                                        />
                                    )}
                                    {capturedPhoto && (
                                        <img src={capturedPhoto} className="w-full h-full object-cover transform -scale-x-100" alt="Captured" />
                                    )}
                                    {!isWebcamOpen && !capturedPhoto && !isCamLoading && (
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-[#6B6B6B] mx-auto mb-6 border border-white/5 group-hover:border-[#7C8CFF]/30 group-hover:text-[#7C8CFF] transition-all">
                                                <Camera size={38} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-xs font-black text-[#6B6B6B] uppercase tracking-[0.2em]">Ready for Verification</p>
                                        </div>
                                    )}
                                    {isWebcamOpen && (
                                         <div className="absolute top-4 left-4 flex items-center gap-2 bg-rose-500 px-3 py-1.5 rounded-full scale-90 origin-top-left border border-white/10 shadow-2xl">
                                             <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
                                             <span className="text-[10px] font-bold text-white uppercase tracking-widest mt-0.5">Live View</span>
                                         </div>
                                    )}
                                    <canvas ref={canvasRef} className="hidden" />
                                </div>
                            </div>
                        </div>

                        {formStatus === 'error' && (
                          <div className="flex items-center gap-2 text-rose-500 text-sm font-bold">
                            <AlertCircle size={16} /> Error submitting. Please try again.
                          </div>
                        )}

                        <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className="w-full py-6 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] text-white font-black rounded-2xl shadow-2xl uppercase tracking-widest text-sm"
                        >
                            {formStatus === 'submitting' ? 'Processing...' : 'Submit Application 2026'}
                        </button>
                    </form>
                </div>
            )}
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop" alt="Admissions" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              Future <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">Admissions</span>
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
                    className={`flex items-center gap-3 transition-all font-black text-xs uppercase tracking-[0.2em] relative ${
                        activeTab === tab.id ? 'text-[#7C8CFF]' : 'text-[#6B6B6B] hover:text-white'
                    }`}
                >
                    <tab.icon size={16} />
                    {tab.label}
                    {activeTab === tab.id && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1] rounded-full" />}
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
