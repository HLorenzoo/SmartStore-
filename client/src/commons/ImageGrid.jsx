import { Grid } from "@mui/material";
import React from "react";

const ImageGrid = ({ images, onSelect, selectedImage }) => {
  return (
    <Grid container direction="column">
      {images.map((image, i) => (
        <img
          src={image}
          height={80}
          onClick={() => onSelect(i)}
          style={{
            border: i === selectedImage ? "solid 1px black" : "solid 1px #eee",
            cursor: "pointer",
          }}
        />
      ))}
    </Grid>
  );
};

export default ImageGrid;
