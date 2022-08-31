import { Divider, Grid, Typography, Button, Box, Rating } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../state/login";
import { useLocation } from "react-router";

const Info = ({ producto }) => {
  const [value, setValue] = React.useState(2);
  const { _id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const url = useLocation().pathname.split("/products/")[1];
  return (
    <Grid container direction="column" sx={{ height: "100%" }}>
      <Typography variant="subtitle1">{producto.category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{producto.name}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="subtitle1">{producto.description}</Typography>
        <Typography variant="h5">Price: ${producto.price}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(addToCart(producto))}
        style={{ marginTop: "auto" }}
        endIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </Grid>
  );
};

export default Info;
