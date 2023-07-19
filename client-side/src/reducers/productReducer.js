const initialState = {
  product: [],
  category: [],
  detailProduct: [],
};

const productReducer = (state = initialState, action) => {
  if (action.type === "product/setProduct") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "category/setCategory") {
    return {
      ...state,
      category: action.payload,
    };
  } else if (action.type === "detail/setDetail") {
    return {
      ...state,
      detailProduct: action.payload,
    };
  } else {
    return state;
  }
};

export default productReducer;
