import { connect } from "react-redux";

import Product from "../../components/Product/Product";

import { addToCart } from "../../actions";

const mapStateToProps = (state, ownProps) => ({
    name : ownProps.name,
    image : ownProps.image,
    amount : ownProps.amount,
});


const mapDispatchToProps = {
  addToCart
};

const ProductContainer = connect(
    mapStateToProps,
  mapDispatchToProps,
  
)(Product);

export default ProductContainer;
