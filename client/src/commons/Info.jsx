import { Divider, Grid, Typography, Button, Box, Rating } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";



const Info = ({ producto }) => {

  const [value, setValue] = React.useState(2);
  const {_id} = useSelector((state) => state.user)
console.log(producto)

  const url = useLocation().pathname.split("/products/")[1];
  const clickHandle = () => {
    axios.post(`/api/user/carrito/${_id}`,  {carrito:producto})
    .catch(err => console.log("este es el error", err.message))
  };

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
        onClick={() => clickHandle()}
        style={{ marginTop: "auto" }}
        endIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </Grid>
  );
};

export default Info;
