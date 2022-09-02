import React, { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";

import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { sendMe } from "./state/login";
import Perfil from "./components/Perfil";
import ProductDetails from "./commons/ProductDetails";
import { getAll } from "./state/products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Category from "./category/Category";
import Search from "./category/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendMe());
    dispatch(getAll());
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
