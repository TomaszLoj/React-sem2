import { connect } from "react-redux";

import CatalogPage from "../../pages/Catalog/CatalogPage";


const mapStateToProps = state => ({
  products: state.products,
  isLoading: state.isLoading,
  isError: state.isError
});

const CatalogPageContainer = connect(
  mapStateToProps,null
)(CatalogPage);

export default CatalogPageContainer;
