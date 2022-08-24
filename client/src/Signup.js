import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";

const Signup = () => {
  const [user, setUser] = useState({
    usuario:"",
    email: "",
    password: "",
    telefono:"",

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
        backgroundColor="white"
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          m: 10,
          p: 5,
          boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
          
        }}
      >
        <Typography variant="body1" component="p">
        ¿no tenes cuenta? registrate aqui
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          id="usuario"
          label="ingresa un usuario"
          name="usuario"
          onChange ={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="ingresa un email"
          name="email"
          onChange ={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="ingresa un password"
          name="password"
          onChange ={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="direccion"
          label="ingresa una dirección"
          name="password"
          onChange ={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="telefono"
          label="ingresa un numero de telefono"
          name="telefono"
          onChange ={handlerInputs}
        />
        <Button variant="contained" color="primary">
          Ingresar
        </Button>
        <Typography variant="body1" component="p">
          ¿Ya tenes una cuenta? Ingresa aqui
        </Typography>
      </Box>
    </Box>
  );
};


export default Signup


