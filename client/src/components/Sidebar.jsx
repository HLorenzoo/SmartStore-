import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GamesIcon from "@mui/icons-material/Games";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import "animate.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  position: "relative",
  top: "15px",
  left: "70px",
  gap: "15px",
}));

const StyledInputText = styled(ListItemText)(({ theme }) => ({
  fontSize: "1%",
}));

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const user = useSelector((state) => state.user);
  return (
    <Stack
      sx={{
        paddingTop: "65px",
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        spacing: 1,
        display: "block",
      }}
    >
      <List
        className="animate__animated animate__fadeInLeft animate__fast"
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "background.paper",
          position: "fixed",
          /* backgroundColor: "red", */
          minHeight: "100vh",
          boxShadow: "0px 10px 29px 5px rgba(0,0,0,0.58)",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                {user.username ? (
                  <VerifiedUserIcon />
                ) : (
                  <AccountCircleOutlinedIcon />
                )}
              </ListItemIcon>
              <StyledInputText
                primary={user.username ? user.username : "Profile"}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ordenes" />
          </ListItemButton>
        </ListItem>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="CATEGORY" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              to="/category/Mouse"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MouseOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "1px" }}
                  primary="Computer Mouse"
                />
              </ListItemButton>
            </Link>
            <Link
              to="/category/Auriculares"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <HeadphonesOutlinedIcon />
                </ListItemIcon>
                <StyledInputText primary="Game Headphones" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/category/Pad"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SportsEsportsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Gamepads" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/category/Teclado"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <KeyboardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Keyboards" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/category/Notebook"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LaptopMacOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notebooks" />
              </ListItemButton>
            </Link>{" "}
            <Link
              to="/category/Accesorios"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GamesIcon />
                </ListItemIcon>
                <ListItemText primary="Accesorios" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <ListItem>
          <StyledIcon>
            <TwitterIcon /> <FacebookOutlinedIcon /> <AndroidOutlinedIcon />
          </StyledIcon>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Sidebar;
