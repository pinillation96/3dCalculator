const express = require('express');
const router = express.Router();
const { getPrinters, addPrinter, updatePrinter, deletePrinter } = require('../controllers/printerController');

router.route('/')
  .get(getPrinters)
  .post(addPrinter);

router.route('/:id')
  .put(updatePrinter)
  .delete(deletePrinter);

module.exports = router;
