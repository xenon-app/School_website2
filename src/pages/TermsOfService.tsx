import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7C8CFF] to-[#FF8DA1]">
            Terms of Service
          </h1>
          <p className="text-[#6B6B6B] font-medium">Agreement for users and visitors</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none space-y-8 text-[#B3B3B3] leading-relaxed"
        >
          <p>
            Welcome to Adarsh Public School. By accessing our website, you agree to the following terms:
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>By using this website, you agree to comply with these Terms of Service. If you do not agree, please do not use the site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Use of Website</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information in forms</li>
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to harm, hack, or misuse the platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Admissions & Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submission of an application does not guarantee admission</li>
              <li>All admissions are subject to school rules and availability</li>
              <li>The school reserves the right to accept or reject applications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
            <p>
              All content on this website (text, images, design) belongs to Adarsh Public School and cannot be copied or reused without permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
            <p>The school is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temporary website downtime</li>
              <li>Errors or outdated information</li>
              <li>Any damages arising from website use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. User Responsibilities</h2>
            <p>Users must ensure:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information provided is correct</li>
              <li>No misuse of communication forms (spam, fake data)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Modifications</h2>
            <p>We may update these terms at any time without prior notice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Contact Information</h2>
            <p>For any queries regarding these terms:</p>
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
