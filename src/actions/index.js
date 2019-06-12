export const ACTION_TYPES = {
  PRODUCTS_FETCH: "PRODUCTS_FETCH",
  PRODUCTS_FETCH_SUCCESS: "PRODUCTS_FETCH_SUCCESS",
  PRODUCTS_FETCH_ERROR: "PRODUCTS_FETCH_ERROR",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
};

export const fetchProducts = () => ({
  type: ACTION_TYPES.PRODUCTS_FETCH
});

export const fetchProductsSuccess = products => ({
  type: ACTION_TYPES.PRODUCTS_FETCH_SUCCESS,
  products
});

export const fetchProductsError = () => ({
  type: ACTION_TYPES.PRODUCTS_FETCH_ERROR
});

export const addToCart = product => ({
  type: ACTION_TYPES.ADD_TO_CART,
  product: product
});
export const removeFromCart = product => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  product: product
});

export const fetchRAllProducts = () => {
  return async dispatch => {
    try {
      dispatch(fetchProducts());

      const response = await fetch("http://localhost:5000/product");
      console.log('fetch start');
      const products = await response.json();

      dispatch(fetchProductsSuccess(products));
    } catch (e) {
      //dispatch(fetchProductsError());
    }
  };
};
