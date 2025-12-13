import express from 'express';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Here you would typically save to MongoDB or send an email
        // const newContact = await Contact.create({ name, email, message });

        console.log("Received contact form:", { name, email, message });

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Unable to send message' });
    }
});

export default router;
