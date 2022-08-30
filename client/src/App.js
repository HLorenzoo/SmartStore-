import React, { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";

import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendMe } from "./state/login";
import Perfil from "./components/Perfil";
import ProductDetails from "./commons/ProductDetails";
import axios from "axios";
import { getAll } from "./state/products";
function App() {

  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.user);

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
          ""
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/products/:id" element={<ProductDetails />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
