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
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

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
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("click");
  };

  return (
    <AppBar /* position="fixed" */>
      <StyledToolBar>
        <StyledTypography
          variant="h5"
          sw={{ color: "white", marginLeft: "40px" }}
        >
          SmartStore
          <StyledIcon sw={{ color: "#633fA4" }} />
        </StyledTypography>
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
          <IconButton
            sx={{
              borderRadius: 10,
              backgroundColor: "#27333D",
              "&:hover": {
                backgroundColor: "#3F4B55",
              },
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ color: "white", fontSize: 25 }}
            ></ShoppingCartOutlinedIcon>{" "}
          </IconButton>
          <IconButton
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
              onClick={(e) => setOpen(true)}
            ></AccountCircleOutlinedIcon>{" "}
          </IconButton>
        </Icons>
      </StyledToolBar>
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
            {" "}
            <AccountCircleOutlinedIcon />{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to="/signup">
              {" "}
              <Button>Sign Up</Button>{" "}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">
              {" "}
              <Button>Login</Button>{" "}
            </Link>
          </MenuItem>
        </Box>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
