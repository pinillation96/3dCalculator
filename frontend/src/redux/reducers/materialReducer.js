const initialState = {
  materials: []
};

const materialReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MATERIAL_LIST_SUCCESS':
      return { materials: action.payload };
    case 'MATERIAL_LIST_FAIL':
      return { error: action.payload };
    default:
      return state;
  }
};

export default materialReducer;
