import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product2 from "./Product2";
import { Link } from "react-router-dom";
import Checkout from "../commons/Checkout";
import { fakeData } from "./fakeData";
import { useSelector } from "react-redux";
import "../spinner.css";

const Cart = () => {
  const { carrito } = useSelector((state) => state.user);

  const nuevoCarrito = carrito ? JSON.parse(JSON.stringify(carrito)) : {};

  nuevoCarrito?.forEach((producto) => {
    producto["cantidad"] = 1;
    producto["total"] = 1
  });

  const orders = {};

  carrito?.forEach((order) => {
    orders[order.name] = order.price;
  });

  console.log(nuevoCarrito);
  // de cada uno multiplico price * cantidad, luego lo sumo

  const precios = [];

  useEffect(() => {
    nuevoCarrito?.forEach((producto) => {
      let mult = producto.price * producto.cantidad;
      precios.push(mult);
    })
  });

  // useEffect(() => {
  //   console.log(nuevoCarrito)
  // })

  const precioFinal = 0;

  console.log(precios);

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
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Shopping Cart ({})
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* // proceso del checkout */}
        <Grid item xs={4}>
          <Paper elevation={1}>
            <Box p={3}>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Summary
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
                  {"debe cambiar"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/checkout">
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

          {nuevoCarrito?.map((producto) => {
            return <Product2 producto={producto} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
