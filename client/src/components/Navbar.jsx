import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import {
  alpha,
  Box,
  IconButton,
  Menu,
  styled,
  FormControl,
  Button,
  MenuItem,
  Dialog,
  Typography,

  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../state/login";
import "animate.css";
import { searchProduct } from "../state/products";


const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#212223",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
}));

const Search = styled("div")(({ theme }) => ({
  marginRight: "550px",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  gap: "20px",
  padding: "2px 10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  gap: "20px",
  variant: "outlined",
  alignItems: "center",
}));

const StyledIcon = styled(SmartToyIcon)(({ theme }) => ({
  color: "#633fA4",
  fontSize: "32px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  paddingTop: "3px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingLeft: "30px",
}));

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(searchProduct(input)).then(() => navigate("/search"));
  };

  const handleLogOut = () => {
    dispatch(logOut()).then(() => setOpen(!open), navigate("/"));
  };
  const user = useSelector((state) => state.user);

  return (
    <AppBar
      position="fixed"
      /*  className="animate__animated animate__fadeInDown animate__delay-1s animated__faster	" */
    >
      <StyledToolBar>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <StyledTypography
            variant="h5"
            sw={{ color: "white", marginLeft: "40px" }}
          >
            SmartStore
            <StyledIcon
              className="animate__animated animate__bounceInDown animate__fast"
              sw={{ color: "#633fA4" }}
            />
          </StyledTypography>
        </Link>
        <Search>
          <FormControl>
            <StyledInputBase
              onChange={handleChange}
              placeholder="Search..."
            ></StyledInputBase>
          </FormControl>
          <Icons>
            <IconButton onClick={handleSubmit}>
              <SearchIcon
                sx={{ color: "white", "&:hover": { color: "gray" } }}
              />
            </IconButton>
          </Icons>
        </Search>
        <Icons>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <IconButton
              sx={{
                borderRadius: 10,
                backgroundColor: "#27333D",
                "&:hover": {
                  backgroundColor: "#3F4B55",
                },
              }}
            >
              <Badge badgeContent={user.carrito?.length} color="warning">
                <ShoppingCartOutlinedIcon
                  sx={{ color: "white", fontSize: 25 }}
                />
              </Badge>
            </IconButton>
          </Link>
          <IconButton
            onClick={(e) => setOpen(!open)}

            sx={{
              borderRadius: 10,
              backgroundColor: "#27333D",
              "&:hover": {
                backgroundColor: "#3F4B55",
              },
            }}
          >
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: 25,
                color: "white",
              }}

            ></AccountCircleOutlinedIcon>
          </IconButton>
        </Icons>
      </StyledToolBar>
      {user.username ? (
        <Dialog
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MenuItem>
              <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
              <Link to="/profile" style={{ textDecoration: "none", color: "" }}>
                <Typography
                  variant="h5"
                  color="black"
                  onClick={() => setOpen(!open)}
                >
                  {user.username}
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button onClick={handleLogOut}>LogOut</Button>
              </Link>
            </MenuItem>
          </Box>
        </Dialog>
      ) : (
        <Dialog
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MenuItem>
              <AccountCircleOutlinedIcon />
            </MenuItem>
            <MenuItem>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button onClick={() => setOpen(!open)}>Sign Up</Button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button onClick={() => setOpen(!open)}>Login</Button>
              </Link>
            </MenuItem>
          </Box>
        </Dialog>
      )}
    </AppBar>
  );
};

export default Navbar;
