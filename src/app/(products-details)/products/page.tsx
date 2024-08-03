import React from "react";
import Sidebar from "../../../components/sidebar";
import ProductsComponent from "../../../components/products-component";

const Products: React.FC<{}> = () => {
  return (
    <main className="flex md:flex-row flex-col relative">
      <Sidebar />
      <ProductsComponent />
    </main>
  );
};

export default Products;
