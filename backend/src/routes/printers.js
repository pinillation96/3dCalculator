const express = require('express');
const router = express.Router();
const Printer = require('../models/Printer');

// GET /api/printers
router.get('/', async (req, res) => {
  try {
    const printers = await Printer.find({});
    res.json(printers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/printers
router.post('/', async (req, res) => {
  try {
    const newPrinter = new Printer(req.body);
    const savedPrinter = await newPrinter.save();
    res.json(savedPrinter);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
