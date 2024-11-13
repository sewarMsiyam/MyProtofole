// D:\MyProtofole\server\index.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// تكوين Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sewarsiyam1@gmail.com',
    pass: 'sewar@12345'
  }
});

// API endpoint لإرسال الرسائل
app.post('/api/send-message', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // إعداد خيارات الرسالة
    const mailOptions = {
      from: email,
      to: 'sewarsiyam1@gmail.com', // البريد الإلكتروني الذي ستستقبل عليه الرسائل
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // إرسال الرسالة
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});