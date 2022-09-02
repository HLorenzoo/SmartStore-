import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import Review from "./Review";
import PaymentForm from "./PaymentForm";
import Sidebar from "./Sidebar";
import { Divider } from "@mui/material";

const theme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Sidebar />
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          mb: 4,
          marginTop: "10vh",
          boxShadow: "10px 10px 24px -7px rgba(0,0,0,0.75)",
        }} 
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Divider />
          <Review />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Checkout;
