import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../spinner.css";

import { Divider, Grid } from "@mui/material";
import Comment from "./Comment";
import ImageGrid from "./ImageGrid";
import Info from "./Info";
import MainImage from "./MainImage";

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
          <Info producto={product} />
        </Grid>
      </Grid>
      <Divider sx={{ paddingBottom: "30px " }} />
      <Comment />
    </div>
  );
};

export default ProductDetails;
