import { Divider, Grid, Typography, Button, Box, Rating } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Info = ({ title, description, price, category }) => {
  const [value, setValue] = React.useState(2);


  const clickHandle = () => {
    // axios.post("rutaCarrito", {id: product.id})
    console.log("hola");
  };

  return (
    <Grid container direction="column" sx={{ height: "100%" }}>
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{title}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="h5">Price: ${price}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick = {clickHandle}
        style={{ marginTop: "auto" }}
        endIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </Grid>
  );
};

export default Info;
