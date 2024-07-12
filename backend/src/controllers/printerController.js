const Printer = require('../models/Printer');

const getPrinters = async (req, res) => {
  const printers = await Printer.find({});
  res.json(printers);
};

const addPrinter = async (req, res) => {
  const { brand, model, electricityCost, modifications, nozzles, bedType, bedSize, extruderType, purchasePrice } = req.body;

  const printer = new Printer({
    brand,
    model,
    electricityCost,
    modifications,
    nozzles,
    bedType,
    bedSize,
    extruderType,
    purchasePrice,
  });

  const createdPrinter = await printer.save();
  res.status(201).json(createdPrinter);
};

const updatePrinter = async (req, res) => {
  const { id } = req.params;
  const { brand, model, electricityCost, modifications, nozzles, bedType, bedSize, extruderType, purchasePrice } = req.body;

  const printer = await Printer.findById(id);

  if (printer) {
    printer.brand = brand;
    printer.model = model;
    printer.electricityCost = electricityCost;
    printer.modifications = modifications;
    printer.nozzles = nozzles;
    printer.bedType = bedType;
    printer.bedSize = bedSize;
    printer.extruderType = extruderType;
    printer.purchasePrice = purchasePrice;

    const updatedPrinter = await printer.save();
    res.json(updatedPrinter);
  } else {
    res.status(404);
    throw new Error('Printer not found');
  }
};

const deletePrinter = async (req, res) => {
  const { id } = req.params;

  const printer = await Printer.findById(id);

  if (printer) {
    await printer.remove();
    res.json({ message: 'Printer removed' });
  } else {
    res.status(404);
    throw new Error('Printer not found');
  }
};

module.exports = {
  getPrinters,
  addPrinter,
  updatePrinter,
  deletePrinter,
};
