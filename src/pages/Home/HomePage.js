import React from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";

//import ProductService from "services/ProductService";
import ProductsList from "components/ProductsList/ProductsList";
import ProductService from "../../services/ProductService";



const ProductsSection = ({ title, products }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsList products={products} />
  </>
);

const HomePage = ({ products, isLoading, isError }) => {

  const featuredDesktop =  ProductService.getProductsByFilter({
    category: "desktop",
    featured: true,
    products: products
  });

  
  const featuredTablet = ProductService.getProductsByFilter({
    category: "tablet",
    featured: true,
    products: products
  });

  if (isError) {
    return <h2>Error while loading... </h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  
  return (
  <>
    <HeaderBig>WELCOME TO OUR STORE</HeaderBig>
    <ProductsSection title="Desktops" products={featuredDesktop} />
    <ProductsSection title="Tablets" products={featuredTablet} />
  </>
  )
};

export default HomePage;
