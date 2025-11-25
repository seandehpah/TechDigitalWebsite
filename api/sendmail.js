import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).send('ok');
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    console.log('Received form data:', { name, email, service });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed: missing required fields');
      return res.status(400).json({
        error: 'Name, email, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Email validation failed:', email);
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Verify environment variables
    const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER) {
      console.error('Missing environment variables:', {
        SMTP_HOST: !!SMTP_HOST,
        SMTP_USER: !!SMTP_USER,
        SMTP_PASS: !!SMTP_PASS,
        CONTACT_RECEIVER: !!CONTACT_RECEIVER
      });
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Missing SMTP configuration'
      });
    }

    console.log('Environment variables verified');

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      }
    });

    console.log('Transporter created, verifying connection...');

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('✓ SMTP connection verified');
    } catch (verifyErr) {
      console.error('✗ SMTP verification failed:', verifyErr.message);
      return res.status(500).json({
        error: 'Email service connection failed',
        details: verifyErr.message
      });
    }

    // Admin notification email
    const adminEmail = {
      from: SMTP_USER,
      to: CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">🎯 New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          </div>

          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #10B981; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This email was sent from the contact form at prodigytechdigital.com.ng
          </p>
        </div>
      `
    };

    // Send admin notification
    await transporter.sendMail(adminEmail);
    console.log('✓ Admin email sent');

    // Auto-reply to user
    const userEmail = {
      from: SMTP_USER,
      to: email,
      subject: 'We received your message - Prodigy Tech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">✓ We've received your message!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to Prodigy Tech. We've received your message and appreciate your interest in our services.</p>
          
          <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24 business hours.</p>

          <div style="background: #f0f4ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>In the meantime:</strong></p>
            <ul>
              <li><a href="https://prodigytechdigital.com.ng/services/" style="color: #3B82F6;">Explore our services</a></li>
              <li><a href="https://prodigytechdigital.com.ng/portfolio/" style="color: #3B82F6;">Check out our portfolio</a></li>
              <li><a href="https://prodigytechdigital.com.ng/about/" style="color: #3B82F6;">Learn about us</a></li>
            </ul>
          </div>

          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            © 2024 Prodigy Tech & Digital Services. All rights reserved.
          </p>
        </div>
      `
    };

    // Send user auto-reply
    await transporter.sendMail(userEmail);
    console.log('✓ User auto-reply sent');

    // Close connection
    transporter.close();

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (err) {
    console.error('✗ MAIL ERROR:', err.message);
    console.error('Stack:', err.stack);

    return res.status(500).json({
      error: 'Failed to send email',
      details: err.message
    });
  }
}