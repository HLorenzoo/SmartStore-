import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Product2 from "./Product2";
import { Link } from "react-router-dom";
import Checkout from "../commons/Checkout";
import { fakeData } from "./fakeData";
import { useSelector } from "react-redux";
import "../spinner.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Cart = () => {
  const { carrito } = useSelector((state) => state.user);
  const subtotal = (car) => {
    const total = car?.reduce((acc, producto) => {
      return (acc += Math.ceil(producto.price) * Math.ceil(producto.amount));
    }, 0);
    return total;
  };
  return (
    <Container>
      {/* // Titulo del carrito */}
      <Grid container spacing={3} my={0.3} paddingTop="100px">
        <Grid item xs={8} sx={{ marginBottom: -50 }}>
          <Paper elevation={1}>
            <Box
              sx={{
                display: "flex",
                height: "6em",
              }}
              paddingX={2}
              paddingY={4}
            >
              <ShoppingCartIcon />
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Carrito de compras
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={1}>
            <Box p={3}>
              {" "}
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                <ShoppingBagIcon /> Resumen de Compra
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  ${subtotal(carrito)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                  <Checkout />
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* // tarjetas de aniadido carrito */}
        <Grid item xs={12} sx={{ marginTop: -10 }}>
          {/* {carrito ? carrito.map((producto) => {
            return <Product2 producto={producto} />
          }) : <p>prueba carrito</p>} */}

          {carrito?.map((producto) => {
            return <Product2 producto={producto} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
