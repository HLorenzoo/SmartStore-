import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import "../spinner.css";
import { fakeData } from "../components/fakeData";

import Reviews from "./Reviews";
import ImageGrid from "./ImageGrid";
import Info from "./Info";
import MainImage from "./MainImage";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router";

// const product = {
//   title: fakeData[0].name,
//   description: fakeData[0].description,
//   price: fakeData[0].price,
//   category: fakeData[0].category,
// };

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const url = useLocation().pathname.split("/products/")[1];
  const [product, setProduct] = useState({});

  //* Obtener producto actual para renderizar
  useEffect(() => {
    axios.get(`/api/products/${url}`).then((result) => setProduct(result.data));
  }, []);

  if (!product.name) {
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );
  }

  return (
    <div>
      <Grid
        container
        spacing={1}
        paddingTop="100px"
        sx={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <Grid item sm={1} className="animate__fadeInTopLeft">
          <ImageGrid
            images={product.image}
            onSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </Grid>

        <Grid item sm={5}>
          <MainImage src={product.image[selectedImage]} />
        </Grid>

        <Grid item sm={6}>
          <Info {...product} />
        </Grid>
      </Grid>
      <Divider sx={{ paddingBottom: "30px " }} />
      <Reviews />
    </div>
  );
};

export default ProductDetails;
