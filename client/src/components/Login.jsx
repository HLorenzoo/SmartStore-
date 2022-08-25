import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, CssBaseline, Avatar, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "15px",
    marginLeft: "70px",

    backgroundColor: "#8d69d4",
    "&:hover": {
      backgroundColor: "#633fa4",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    marginTop: "15px",
  }));
  return (
    <CssBaseline>
      <Box
        sx={{
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundColor: "#212223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            // background:"linear-gradient(220.55deg, #565656 0%, #181818 100%)",
            backgroundColor: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            m: 10,
            p: 5,
            boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {" "}
            <Typography component="h1" variant="h5">
              <Avatar
                sx={{ m: 1, bgcolor: "#212223", color: "#633fA4" }}
              ></Avatar>{" "}
              Ingresa
            </Typography>
          </Box>

          <TextField
            variant="outlined"
            margin="normal"
            id="email"
            label="Ingresa un mail"
            name="email"
            onChange={handlerInputs}
            sx={{ color: "white" }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="password"
            label="Ingresa un password"
            name="password"
            onChange={handlerInputs}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledButton
              variant="contained"
              color="primary"
              xs={{
                marginTop: "100px",
              }}
            >
              Ingresar
            </StyledButton>
          </Link>
          <StyledTypography variant="body1" component="p">
            ¿No tenes cuenta? Registrate{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              aquí
            </Link>
          </StyledTypography>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Login;
