const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  let arr = [...state.cartItems];
  arr.push({
    name: action.name,
    price: action.price,
    src: action.src,
    productId: action.productId,
    quantiny: action.quantiny,
    size: action.size,
  });
  switch (action.type) {
    case "increment":
      return {
        ...state,
        name: action.name,
        price: action.price,
        src: action.src,
        productId: action.productId,
      };
    case "addtoCart":
      return {
        ...state,
        cartItems: arr,
      };
    default:
      return state;
  }
};
export default reducer;
