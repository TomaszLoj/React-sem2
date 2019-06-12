import { connect } from "react-redux";

import HomePage from "../../pages/Home/HomePage";


const mapStateToProps = state => ({
  products: state.products,
  isLoading: state.isLoading,
  isError: state.isError
});


const HomePageContainer = connect(
  mapStateToProps,null
)(HomePage);

export default HomePageContainer;
