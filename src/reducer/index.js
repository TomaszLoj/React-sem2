import { ACTION_TYPES } from "../actions";

const initState = {
  products: null,
  isLoading: true,
  isError: false,
  cart: [],
  productsCount: 0,
  totalAmount: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PRODUCTS_FETCH:
      return { ...initState };
    case ACTION_TYPES.PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.products,
        isLoading: false,
        isError: false
      };
    case ACTION_TYPES.PRODUCTS_FETCH_ERROR:
      return { ...state, products: null, isLoading: false, isError: true };
    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
        productsCount: state.cart.length + 1,
        totalAmount: (state.totalAmount += action.product.amount)
      };
    case ACTION_TYPES.REMOVE_FROM_CART:
     
      return {
        ...state,
        cart: state.cart.filter(e => e._id !== action.product._id),
        productsCount: state.cart.length + 1,
        totalAmount: (state.totalAmount -= action.product.amount)
      };
    default:
      return state;
  }
};
export default reducer;
