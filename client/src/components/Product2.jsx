import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { fakeData } from "./fakeData";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, realDeleteFromCart } from "../state/login";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Product2 = ({ producto }) => {
  // Estados
  const dispatch = useDispatch();

  const [quantitie, setQuantitie] = useState(1);

  const handleAdd = (event) => {
    dispatch(addToCart({ ...producto, amount: producto.amount + 1 }));
  };
  const handleDelete = (event) => {
    dispatch(deleteFromCart({ ...producto, amount: producto.amount - 1 }));
  };

  return (
    <Grid item xs={12} md={8} sx={{ marginBottom: 5 }}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {producto.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            $ {producto.price}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {producto.description?.slice(0, 80)}...
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => dispatch(realDeleteFromCart(producto))}
              variant="contained"
              color="warning"
              endIcon={<DeleteIcon />}
            >
              Quitar
            </Button>
            {/* 
            <FormControl sx={{ minWidth: 70, marginLeft: 5, size: "small" }}>
              <InputLabel>Cantidad</InputLabel>
              <Select label="Cantidad">
                {arrCant.map((n) => (
                  <MenuItem onClick={handleChange} value={n}>
                    {n}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <Box
              display="flex"
              p={2}
              alignItems="center"
              justifyContent="center"
            >
              <RemoveIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handleDelete()}
              />
              <Box sx={{ fontSize: "24px", margin: "5px" }}>
                {producto.amount > 0 ? producto.amount : "1"}
              </Box>
              <AddIcon sx={{ cursor: "pointer" }} onClick={() => handleAdd()} />
            </Box>
            <Typography
              variant="body1"
              borderRadius={1}
              p={2}
              backgroundColor="#ed6c02"
              height={"90%"}
              color="white"
            >
              Total: ${Math.ceil(producto.price * producto.amount)}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          sx={{
            width: 160,
            display: { xs: "none", sm: "block", margin: "10px" },
          }}
          image={producto.image}
          alt={producto.name}
        />
      </Card>
    </Grid>
  );
};

export default Product2;
