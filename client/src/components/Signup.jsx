import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUp } from "../state/login";
const Signup = () => {
  const dispatch = useDispatch();
  const [register, setregister] = useState({
    username: "",
    email: "",
    password: "",
    tel: "",
    direccion: "",
    provincia: "",
  });

  const handlerInputs = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
    console.log(register);
  };
  const handleRegister = (e) => {
    dispatch(signUp(register)).then(() => console.log("registrado"));
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
      {" "}
      <Typography variant="h2" color="white">
        {register.username}
      </Typography>
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
          id="username"
          label="ingresa un usuario"
          name="username"
          onChange={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="ingresa un email"
          name="email"
          onChange={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="ingresa un password"
          name="password"
          onChange={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="direccion"
          label="ingresa una dirección"
          name="password"
          onChange={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="telefono"
          label="ingresa un numero de telefono"
          name="tel"
          onChange={handlerInputs}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="telefono"
          label="ingresa tu provincia"
          name="provincia"
          onChange={handlerInputs}
        />
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Ingresar
        </Button>
        <Typography variant="body1" component="p">
          ¿Ya tenes una cuenta? Ingresa aqui
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
