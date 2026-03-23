import nodemailer from 'nodemailer';

// WARNING: In a real production environment, you should NEVER expose your email credentials in the frontend code.
// This should be implemented in a backend (Node.js/Express) and called via an API.
// Since you asked for Nodemailer to be applied where needed in this project, I'm providing the logic.

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services or SMTP
  auth: {
    user: 'divyanshucmd@gmail.com', // Replace with your email
    pass: 'xvunqgkkkodurpvs', // Replace with your app password
  },
});

export const sendAdmissionEmail = async (formData: any) => {
  const mailOptions = {
    from: 'divyanshucmd@gmail.com',
    to: 'divyanshucmd@gmail.com', // The school's email
    subject: `New Admission Inquiry: ${formData.studentName}`,
    text: `
      Student Name: ${formData.studentName}
      Date of Birth: ${formData.dob}
      Gender: ${formData.gender}
      Class: ${formData.class}
      
      This is an automated inquiry from the website.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const sendContactEmail = async (formData: any) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'info@adarshpublicschool.com',
    subject: `New Contact Message from ${formData.name}`,
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
