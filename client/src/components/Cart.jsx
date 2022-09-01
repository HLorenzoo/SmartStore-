import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  createTheme,
  Dialog,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product2 from "./Product2";
import { Link } from "react-router-dom";
// import Checkout from "../commons/Checkout";
import { fakeData } from "./fakeData";
import { useSelector } from "react-redux";
import "../spinner.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { ThemeProvider } from "@mui/material/styles";
import Review from "./Review";
// CHECKOUT

const theme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4, marginTop: "10vh" }}
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Review />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

// CARRITO

const Cart = () => {
  const { carrito, direccion } = useSelector((state) => state.user);

  // convertir objeto sin referencia
  // const nuevoCarrito = carrito ? JSON.parse(JSON.stringify(carrito)) : {};

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
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
                {/* BOTON CHECKOUT */}
                <Button variant="contained" onClick={handleClose}>
                  Checkousst
                </Button>

                <Dialog onClose={handleClose} open={open}>
                  {/* <DialogTitle>
                    Checkout
                  </DialogTitle> */}
                  <ThemeProvider theme={theme}>
                    {/* <CssBaseline /> */}
                    <Container
                      component="main"
                      maxWidth="sm"
                      sx={{ mb: 4, marginTop: "10vh" }}
                    >
                      <Paper
                      elevation={1}
                        variant="outlined"
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, boxShadow:"-2px 11px 18px 0px rgba(0,0,0,0.35)"}}
                      >
                        <Typography component="h1" variant="h4" align="center">
                          Checkout
                        </Typography>

                        <>
                          <Typography variant="h6" gutterBottom>
                            Order summary
                          </Typography>
                          <List disablePadding>
                            {/* {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} */}

                            {carrito?.map((product, i) => (
                              <ListItem
                                key={i}
                                sx={{ py: 1, px: 0 }}
                              >
                                <ListItemText
                                  primary={product.name}
                                  secondary={product.description.substring(0, 120) + "..."}
                                />
                                <Typography variant="body2">
                                  {product.price}
                                </Typography>

                                <Typography variant="body2">
                                  {product.price}
                                </Typography>
                              </ListItem>
                            ))}

                            <ListItem sx={{ py: 1, px: 0 }}>
                              <ListItemText primary="Total" />
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 700 }}
                              >
                                $34.06
                              </Typography>
                            </ListItem>
                          </List>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ mt: 2 }}
                              >
                                Shipping
                              </Typography>
                              <Typography gutterBottom>John Smith</Typography>
                              <Typography gutterBottom>
                                {direccion}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              container
                              direction="column"
                              xs={12}
                              sm={6}
                            >
                              <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                                Pagar ahora
                              </Button>
                            </Grid>
                          </Grid>
                        </>

                        {/* <Review /> */}
                      </Paper>
                    </Container>
                  </ThemeProvider>
                </Dialog>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* // tarjetas de aniadido carrito */}
        <Grid item xs={12} sx={{ marginTop: -10 }}>
          {/* {carrito ? carrito.map((producto) => {
            return <Product2 producto={producto} />
          }) : <p>prueba carrito</p>} */}

          {carrito?.map((producto, i) => {
            return <Product2 key={i} producto={producto} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
