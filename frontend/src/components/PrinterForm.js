import React from 'react';

const PrinterForm = () => {
  return (
    <form>
      <input type="text" placeholder="Marca" />
      <input type="text" placeholder="Modelo" />
      <input type="number" placeholder="Gasto de electricidad" />
      <input type="text" placeholder="Modificaciones" />
      <input type="text" placeholder="Boquillas" />
      <input type="text" placeholder="Tipo de cama" />
      <input type="text" placeholder="Tamaño de la cama" />
      <input type="text" placeholder="Tipo de extrusora" />
      <input type="number" placeholder="Precio de compra" />
      <button type="submit">Agregar Impresora</button>
    </form>
  );
};

export default PrinterForm;
