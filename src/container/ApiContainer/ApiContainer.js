import { connect } from "react-redux";

import Api from "../../components/Api/Api";

import { fetchRAllProducts } from "../../actions";

const mapStateToProps = state => ({
  products: state.products,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
  fetchRAllProducts
};

const ApiContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);

export default ApiContainer;
