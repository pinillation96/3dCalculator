import axios from 'axios';
import { PRINTER_LIST_SUCCESS, PRINTER_LIST_FAIL, ADD_PRINTER_SUCCESS, ADD_PRINTER_FAIL } from '../constants/printerConstants';

export const listPrinters = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/printers');
    dispatch({ type: PRINTER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRINTER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const addPrinter = (printer) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/printers', printer);
    dispatch({ type: ADD_PRINTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRINTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
