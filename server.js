// PORTFOLIO_1/server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname and __filename in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON data from form submissions

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Nodemailer transporter setup (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test transporter connection (optional)
transporter.verify((error, success) => {
  if (error) {
    console.error('Transporter connection error:', error);
  } else {
    console.log('Transporter is ready');
  }
});

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Received form data:', { name, email, subject, message });

  // Validate form data
  if (!name || !email || !subject || !message) {
    console.log('Validation failed:', { name, email, subject, message });
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log('Environment variables:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? '****' : 'undefined',
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    console.log('Sending email with options:', mailOptions);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Handle React routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});