import { connect } from "react-redux";

import Cart from "../../components/Cart/Cart";

const mapStateToProps = state => ({
  productsCount: state.productsCount,
  totalAmount: state.totalAmount
});

const CartContainer = connect(
  mapStateToProps,
  null
)(Cart);

export default CartContainer;
