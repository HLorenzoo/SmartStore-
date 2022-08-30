import React, { useEffect } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendMe } from "./state/login";
import Perfil from "./components/Perfil";
import Cart from "./components/Cart";
import ProductDetails from "./commons/ProductDetails";
import Product2 from "./components/Product2";
import Checkout from "./components/Checkout"

function App() {
  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(sendMe());
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
          ""
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Perfil />} />
          {/* Mis rutas de testeo */}
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productDetail" element={<ProductDetails/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

        </Routes>
      </Box>
    </>
  );
}

export default App;
