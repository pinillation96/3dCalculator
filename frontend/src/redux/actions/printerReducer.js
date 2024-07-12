import { PRINTER_LIST_SUCCESS, PRINTER_LIST_FAIL } from '../constants/printerConstants';

export const printerReducer = (state = { printers: [] }, action) => {
  switch (action.type) {
    case PRINTER_LIST_SUCCESS:
      return { printers: action.payload };
    case PRINTER_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
