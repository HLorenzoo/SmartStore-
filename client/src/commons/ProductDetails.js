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

import React, { useState } from "react";

import { fakeData } from "../fakedata/products";

import Reviews from "./Reviews";
import ImageGrid from "./ImageGrid";
import Info from "./Info";
import MainImage from "./MainImage";
import axios from "axios";

const images = fakeData[0].image;

const product = {
  title: fakeData[0].name,
  description: fakeData[0].description,
  price: fakeData[0].price,
  category: fakeData[0].category,
};

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  //* Obtener producto actual para renderizar
  //  React.useEffect(() => {
  //     axios.get(`rutadeback/:id`).then((product) => {
  //       setProduct(response.data);
  //     });
  //   }, []);



  return (
    <div>
      <Grid
        container
        spacing={1}
        paddingTop="100px"
        sx={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <Grid item sm={1}>
          <ImageGrid
            images={images}
            onSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </Grid>

        <Grid item sm={5}>
          <MainImage src={images[selectedImage]} />
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
