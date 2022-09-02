import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUp } from "../state/login";
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    dispatch(signUp(register)).then(() => navigate("/"));
  };

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
            Registrarse
          </Typography>
        </Box>

        <TextField
          variant="outlined"
          margin="normal"
          id="username"
          label="Ingresa un usuario"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username?.type === "required" && "El usuario es requerido."}
        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="Ingresa un email"
          name="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
        />
        {errors.email?.type === "pattern" && "Ingresa un formato válido."}
        {errors.email?.type === "required" && "El email es requerido."}
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="ingresa un password"
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 10 })}
        />
        {errors.password?.type === "required" && "La contraseña es requerida."}
        <TextField
          variant="outlined"
          margin="normal"
          id="direccion"
          label="ingresa una Provincia"
          name="provincia"
          {...register("provincia", { required: true })}
        />
        {errors.provincia?.type === "required" && "La provincia es requerida."}
        <TextField
          variant="outlined"
          margin="normal"
          id="direccion"
          label="ingresa una dirección"
          name="direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion?.type === "required" && "La provincia es requerida."}
        <TextField
          variant="outlined"
          margin="normal"
          id="tel"
          label="ingresa un numero de telefono"
          name="tel"
          type="text"
          {...register("tel", { required: true })}
        />
        {errors.tel?.type === "required" && "El teléfono es requerido."}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8d69d4",
            "&:hover": {
              backgroundColor: "#633fa4",
            },
          }}
          onClick={handleSubmit(handleRegister)}
        >
          Ingresar
        </Button>
        <Typography variant="body1" component="p">
          ¿Ya tenes una cuenta? Ingresa{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            aqui{" "}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
