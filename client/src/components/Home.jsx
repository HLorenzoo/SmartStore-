import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductsGrill from "./ProductsGrill";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Header />
      <ProductsGrill />
    </div>
  );
};

export default Home;
