const mongoose = require('mongoose');

const printerSchema = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  electricityCost: { type: Number, required: true },
  modifications: { type: String },
  nozzles: { type: String },
  bedType: { type: String },
  bedSize: { type: String, required: true },
  extruderType: { type: String },
  purchasePrice: { type: Number, required: true },
}, {
  timestamps: true,
});

const Printer = mongoose.model('Printer', printerSchema);

module.exports = Printer;
