const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    const order = new Order({
      user: req.userId,
      items,
      shippingAddress,
      paymentMethod,
      totalAmount
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user orders
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
