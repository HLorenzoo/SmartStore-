import {
  Box,
  Typography,
  Rating,
  CardMedia,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { fakeData } from "../fakedata/products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Reviews from "./Reviews";


const bgStyle = {
  backgroundColor: "primary.dark",
  // display: "flex"
}

const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "50%",
  // background: Colors.light_gray,
  padding: "10px",
  // [theme.breakpoints.down("md")]: {
  //   width: "80%",
  //   padding: '24px',
  // },
}));

const ProductDetails = () => {
  return (
    <Box sx={bgStyle}>
      <Typography variant="h4">{fakeData[0].name}</Typography>
      <ProductImage src={fakeData[0].image} />
      <Typography variant="h5">Precio:</Typography>
      <Typography>{fakeData[0].price}$</Typography>
      <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
        Añadir
      </Button>
      <Typography variant="h5">Valoracion</Typography>
      <Rating name="read-only" value={fakeData[0].rating} readOnly />
      <Typography variant="h5">Description</Typography>
      <Typography>{fakeData[0].description}</Typography>

      <Reviews />
    </Box>
  );
};

export default ProductDetails;
