import React, { Component } from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";

import ProductService from "services/ProductService";

import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

class CatalogPage extends Component {

  state = {
    products: [] ,
    init : true
  };

  handleFilterChange = filters => {
    const filteredProducts = ProductService.getProductsByFilter({
      name: filters.text,
      manufacture: filters.manufacture === "All" ? null : filters.manufacture,
      products: this.props.products
    });

    this.setState({ products: filteredProducts });
  };

  render() {

    if (this.props.isLoading) {
      return <h2>Loading...</h2>;
    }
    if (this.state.init){
      
      this.setState({ 
        products: this.props.products,
        init: false
       });
       return <h2>Loading...</h2>;
    }
    const manufacturers = ["All", ...ProductService.getManufactures({products: this.props.products})];
    const initFilters = { text: "", manufacture: "All" };

    return (
      <>
        <HeaderBig>Catalog</HeaderBig>

        <div className={styles.Catalog}>
          <div className={styles.ColumnLeft}>
            <Filters
              initValue={initFilters}
              onChange={this.handleFilterChange}
              manufacturers={manufacturers}
            />
          </div>

          <div className={styles.ColumnRight}>
            <ProductsList products={this.state.products} />
          </div>
        </div>
      </>
    );
  }
}

export default CatalogPage;
