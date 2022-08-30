import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";
import { fakeData } from "../fakedata/products";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = () => {
  return (
    <Grid container spacing={1} sx={{ marginY: -12 }}>
      <Paper elevation={1}>
        <Grid item xs={12}>
          {/* <Box p={3} sx={{ display: "flex" }}> */}
          <Box sx={{ display: "flex" }}>
            <img src={fakeData[0].image} className="img2"></img>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormControl>
                <InputLabel>Qty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>

              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          <Grid item xs={8}>
            <Box p={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {fakeData[0].name}
                </Typography>
                <Typography variant="body1" sw={{ fontWeight: 500 }}>
                  $us {fakeData[0].price}
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Product;
