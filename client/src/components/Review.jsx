import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box, Button, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

export default function Review() {
  const { carrito, username, direccion } = useSelector((state) => state.user);
  const subtotal = (car) => {
    const total = car?.reduce((acc, producto) => {
      return (acc += Math.ceil(producto.price) * Math.ceil(producto.amount));
    }, 0);
    return total;
  };
  console.log(direccion);
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Orden final
      </Typography>
      <Divider sx={{ width: "26%" }} />
      <List disablePadding>
        {carrito?.map((product, i) => (
          <ListItem key={i} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.description?.substring(0, 120) + "..."}
              sx={{ borderRadius: 1, backgroundColor: "#bababa" }}
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1">
                $ {Math.ceil(product.price * product.amount)}
              </Typography>
              <Typography variant="body2">Cantidad:{product.amount}</Typography>
            </Box>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {subtotal(carrito)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Datos del envio
          </Typography>
          <Typography gutterBottom>Para :{username}</Typography>
          <Typography gutterBottom>En la direccion :{direccion}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Button
            variant="contained"
            color="warning"
            sx={{ mt: 3, ml: 1, "&:hover": { backgroundColor: "#B55200" } }}
          >
            Pagar ahora
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
