import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Product2 from "./Product2";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { fakeData } from "./fakeData";

const Cart = () => {
  // console.log(fakeData)

  // const firstPrice =  fakeData.reduce((valor.price, ))
  // forEach(prueba => console.log(prueba.price))

  const [totalPrice, setTotalPrice] = useState(fakeData);

  return (
    <Container>
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
                Shopping Cart ()
              </Typography>
            </Box>
          </Paper>
        </Grid>

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
                  $ 65
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

        <Grid item xs={12} sx={{ marginTop: -10 }}>
          {fakeData.map((producto) => {
            return <Product2 producto={producto} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
