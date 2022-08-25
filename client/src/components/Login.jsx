import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <Box
      sx={{

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
          backgroundColor:"#fcfcfc",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          m: 10,
          p: 5,
          boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
        }}
      >
        <Typography variant="body1" component="p">
          ya tenes una cuenta? Ingresa
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="ingresa un mail"
          name="email"
          onChange ={handlerInputs}
          sx={{color:"white"}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="ingresa un password"
          name="password"
          onChange ={handlerInputs}
        />
        <Button variant="contained" color="primary">
          Ingresar
        </Button>
        <Button variant="contained" color="secondary">
          <ShoppingCartIcon color="primary">star</ShoppingCartIcon>Ir a mi carrito
        </Button>
        <Typography variant="body1" component="p">
          ¿no tenes cuenta? registrate aqui
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
