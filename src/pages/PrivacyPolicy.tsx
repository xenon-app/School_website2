import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">
            Privacy Policy
          </h1>
          <p className="text-[#6B6B6B] font-medium">Last updated: March 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none space-y-8 text-[#B3B3B3] leading-relaxed"
        >
          <p>
            Adarsh Public School respects the privacy of students, parents, and visitors. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Student and parent details (name, contact number, address, email)</li>
              <li>Academic records and admission-related data</li>
              <li>Information submitted through forms (Contact, Apply Now, etc.)</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process admissions and inquiries</li>
              <li>Communicate important updates</li>
              <li>Improve school services and website experience</li>
              <li>Maintain academic and administrative records</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Data Protection</h2>
            <p>
              We take appropriate security measures to protect your data from unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Sharing of Information</h2>
            <p>
              We do not sell or rent personal information. Data may only be shared:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With authorized school staff</li>
              <li>When required by law or government authorities</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Cookies & Tracking</h2>
            <p>
              Our website may use cookies to improve user experience and analyze traffic. You can disable cookies in your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Your Consent</h2>
            <p>
              By using our website, you consent to this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Updates to Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Contact Us</h2>
            <p>For any privacy-related concerns, contact us at:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p>Email: <span className="text-[#7C8CFF]">info@adarshpublicschool.com</span></p>
              <p>Phone: <span className="text-[#FF8DA1]">+91-XXXXXXXXXX</span></p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
