import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPrinters } from '../redux/actions/printerActions';
import PrinterForm from '../components/PrinterForm';

const Dashboard = () => {
  const dispatch = useDispatch();

  const printerList = useSelector((state) => state.printers);
  const { printers, error } = printerList;

  useEffect(() => {
    dispatch(listPrinters());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <PrinterForm />
      <h2>List of Printers</h2>
      {error ? <p>{error}</p> : (
        <ul>
          {printers.map((printer) => (
            <li key={printer._id}>{printer.brand} {printer.model}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
