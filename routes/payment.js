const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/order');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Razorpay Order & save to DB
router.post('/orders', async (req, res) => {
  const { customer, cartItems, total } = req.body;

  const amount = Math.round(total * 100); // INR to paise
  const options = {
    amount,
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const razorpayOrder = await razorpay.orders.create(options);

    const newOrder = new Order({
      customer,
      items: cartItems,
      amount: total,
      status: 'pending',
      razorpayOrderId: razorpayOrder.id,
    });

    await newOrder.save();

    res.json({ razorpayOrder, orderId: newOrder._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Verify Razorpay Signature
router.post('/verify', async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderId } = req.body;

  const body = razorpayOrderId + "|" + razorpayPaymentId;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpaySignature) {
    await Order.findByIdAndUpdate(orderId, {
      status: 'paid',
      razorpayPaymentId,
      razorpaySignature
    });
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid signature" });
  }
});

module.exports = router;
