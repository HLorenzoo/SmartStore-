import { Button } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#ed6c02",
        "&:hover": { backgroundColor: "#924303" },
      }}
    >
      Checkout
    </Button>
  );
};

export default Checkout;
