import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPrinter } from '../redux/actions/printerActions';

const PrinterForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [electricityCost, setElectricityCost] = useState('');
  const [modifications, setModifications] = useState('');
  const [nozzles, setNozzles] = useState('');
  const [bedType, setBedType] = useState('');
  const [bedSize, setBedSize] = useState('');
  const [extruderType, setExtruderType] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPrinter({
      brand,
      model,
      electricityCost,
      modifications,
      nozzles,
      bedType,
      bedSize,
      extruderType,
      purchasePrice,
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required />
      <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
      <input type="number" placeholder="Electricity Cost" value={electricityCost} onChange={(e) => setElectricityCost(e.target.value)} required />
      <input type="text" placeholder="Modifications" value={modifications} onChange={(e) => setModifications(e.target.value)} />
      <input type="text" placeholder="Nozzles" value={nozzles} onChange={(e) => setNozzles(e.target.value)} />
      <input type="text" placeholder="Bed Type" value={bedType} onChange={(e) => setBedType(e.target.value)} />
      <input type="text" placeholder="Bed Size" value={bedSize} onChange={(e) => setBedSize(e.target.value)} required />
      <input type="text" placeholder="Extruder Type" value={extruderType} onChange={(e) => setExtruderType(e.target.value)} />
      <input type="number" placeholder="Purchase Price" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} required />
      <button type="submit">Add Printer</button>
    </form>
  );
};

export default PrinterForm;

