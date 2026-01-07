import express from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Missing EMAIL_USER or EMAIL_PASS in server .env file");
        }

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 1. Send email to Admin
        const adminMailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject || 'New Message'}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // 2. Send Auto-Reply to User
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank You for Contacting Me!`,
            text: `Hi ${name},\n\nThank you for reaching out! I resolve to reply within 24 hours.\n\nBest regards,\nPrince`,
            html: `
                <h3>Hi ${name},</h3>
                <p>Thank you for reaching out! I resolve to reply within 24 hours.</p>
                <p><strong>Your Message:</strong></p>
                <blockquote style="font-style: italic; color: #555;">${message}</blockquote>
                <br/>
                <p>Best regards,</p>
                <p><strong>Prince</strong></p>
            `
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(autoReplyOptions);

        console.log("Email sent successfully from:", email);

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Unable to send message', error: error.message });
    }
});

export default router;
