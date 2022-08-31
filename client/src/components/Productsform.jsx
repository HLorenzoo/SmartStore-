import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUp } from "../state/login";
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Productsform = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
  
    const [newprod, setNewprod] = useState({
      name: "",
      description: "",
      image: "",
      price: "",
      category: "",
      brand: "",
      cuantity: "",
    });
  
    const handlerInputs = (e) => {
      setNewprod({ ...newprod, [e.target.name]: e.target.value });
      console.log(newprod);
    };
    // const handleRegister = () => {
    //   dispatch(signUp(newprod)).then(() => navigate("/"));
    // };
  return (
    <Box
    sx={{
      backgroundColor: "#212223",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "100vh",
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
      <Box sx={{ display: "flex" }}>
        {" "}
        <Typography component="h1" variant="h5">
          <Avatar sx={{ m: 1, bgcolor: "#212223", color: "#633fA4" }}>
            <LockOutlinedIcon />
          </Avatar>{" "}
          Carga tu producto
        </Typography>
      </Box>

      <TextField
        variant="outlined"
        margin="normal"
        id="username"
        label="ingresa tu producto"
        name="username"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="email"
        label="ingresa una descripción"
        name="email"
        type="email"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="password"
        label="ingresa una imagen"
        name="password"
        type="password"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="direccion"
        label="ingresa el precio"
        name="provincia"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="direccion"
        label="ingresa una categoria"
        name="direccion"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="tel"
        label="ingresa la marca"
        name="tel"
        type="text"
        onChange={handlerInputs}
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="tel"
        label="ingresa la cantidad"
        name="tel"
        type="text"
        onChange={handlerInputs}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#8d69d4",
          "&:hover": {
            backgroundColor: "#633fa4",
          },
        }}
        // onClick={handleRegister}
      >
        Agregar
      </Button>
   
    </Box>
  </Box>
  )
}

export default Productsform