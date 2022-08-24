import React from "react";
import { Box, Stack } from "@mui/material";
import axios from "axios";
import ProductDetails from "./commons/ProductDetails";

function App() {
  return (
    <>
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          {/* <Navbar /> */}
          {/* <Sidebar /> */}
          {/* <Content /> */}
          <ProductDetails />
        </Stack>
      </Box>
    </>
  );
}

export default App;
