import { connect } from "react-redux";

import CartPage from "../../pages/Cart/CartPage";

import { removeFromCart } from "../../actions";

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart
};

const CartPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);

export default CartPageContainer;
