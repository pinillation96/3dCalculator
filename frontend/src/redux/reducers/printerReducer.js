import { PRINTER_LIST_SUCCESS, PRINTER_LIST_FAIL, ADD_PRINTER_SUCCESS, ADD_PRINTER_FAIL } from '../constants/printerConstants';

const initialState = {
  printers: [],
  error: null,
};

const printerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRINTER_LIST_SUCCESS:
      return { ...state, printers: action.payload };
    case PRINTER_LIST_FAIL:
      return { ...state, error: action.payload };
    case ADD_PRINTER_SUCCESS:
      return { ...state, printers: [...state.printers, action.payload] };
    case ADD_PRINTER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default printerReducer;
