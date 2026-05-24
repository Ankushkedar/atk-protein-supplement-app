const express = require('express');
const router = express.Router();

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to customer

    console.log('Contact Form Submission:', { name, email, phone, message });

    res.json({ message: 'Message received! We will contact you soon.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
