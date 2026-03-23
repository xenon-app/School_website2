const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

// Configure dotenv with explicit path to the server folder
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from React app (built frontend)
app.use(express.static(path.join(__dirname, '../dist')));

// API root message (Optional, can be kept for testing)
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running', version: '1.0.0' });
});

// Configure Multer for file uploads (memory storage for simplicity, can be changed to disk)
const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed' });
  }
});

// Handle admission with file uploads
app.post('/api/admission', upload.fields([
  { name: 'studentPhoto', maxCount: 1 },
  { name: 'livePhoto', maxCount: 1 }
]), async (req, res) => {
  const formData = req.body;
  const files = req.files;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Admission Inquiry: ${formData.studentName}`,
    text: `
      --- STUDENT DETAILS ---
      Student Name: ${formData.studentName}
      Date of Birth: ${formData.dob}
      Gender: ${formData.gender}
      Class: ${formData.class}
      Nationality: ${formData.nationality}
      
      --- PARENT DETAILS ---
      Father's Name: ${formData.fatherName}
      Mother's Name: ${formData.motherName}
      
      --- CONTACT DETAILS ---
      Phone: ${formData.phone}
      Email: ${formData.email}
      Residential Address: ${formData.residentialAddress}
      Local Address: ${formData.localAddress}
      
      --- OTHER ---
      Previous School: ${formData.previousSchool}
      Remarks: ${formData.remarks}
    `,
    attachments: []
  };

  // Add attachments if files exist
  if (files['studentPhoto']) {
    mailOptions.attachments.push({
      filename: `student_photo_${formData.studentName}.jpg`,
      content: files['studentPhoto'][0].buffer
    });
  }
  
  if (files['livePhoto']) {
    mailOptions.attachments.push({
      filename: `live_identity_${formData.studentName}.jpg`,
      content: files['livePhoto'][0].buffer
    });
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Admission email sent successfully' });
  } catch (error) {
    console.error('Error sending admission email:', error);
    res.status(500).json({ success: false, error: 'Failed' });
  }
});

// Catch-all route to serve React index.html
// This allows React Router to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
