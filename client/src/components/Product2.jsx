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
import { deleteFromCart } from "../state/login";

const Product2 = ({ producto }) => {
  // Estados
  const dispatch = useDispatch();

  const [quantitie, setQuantitie] = useState(1);

  useEffect(() => {
    console.log(producto)
  }, [quantitie])


  const handleChange = (event) => {
    // producto.amount = event.target.value;
    // producto.total = producto.price * producto.amount
    // console.log(event.target.value)
    setQuantitie(event.target.value);
    producto.amount = event.target.value
    // console.log(producto)
  };

  // para definir cantidades
  const arrCantidades = Array.from(
    { length: producto.cantidad },
    (_, i) => i + 1
  );
  // console.log(producto);
  const arrCant = [1, 2, 3, 4, 5];

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
            {producto.description.slice(0, 80)}...
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => dispatch(deleteFromCart(producto))}
              variant="contained"
              color="warning"
              endIcon={<DeleteIcon />}
            >
              Quitar
            </Button>

            <FormControl sx={{ minWidth: 70, marginLeft: 5, size: "small" }}>
              <InputLabel>Cantidad</InputLabel>
              <Select
                label="Cantidad"
                onChange={handleChange}
                value={quantitie}
              >
                {/*  {arrCantidades.map((n) => {
                  return <MenuItem value={n}>{n}</MenuItem>;
                })} */}
                {arrCant.map((n) => (
                  <MenuItem value={n}>{n}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography variant="body2">
              Total: ${producto.price * quantitie}
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
