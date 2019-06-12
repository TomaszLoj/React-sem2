import React, { useEffect } from "react";

const Api = ({ products, isLoading, isError, fetchRAllProducts }) => {
  useEffect(() => {
    fetchRAllProducts();
  }, []);

  if (isError) {
    return <h2>Error while loading... </h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return null;
};

export default Api;
