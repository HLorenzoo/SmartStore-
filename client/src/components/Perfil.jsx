import React from "react";

import Sidebar from "./Sidebar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  Paper,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  styled,
  Button,
  Stack,
  Typography,
  Rating,
  CardMedia,
  Avatar,
  Icon,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector } from "react-redux";
// import { useState } from "react";
const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  position: "relative",
  top: "15px",
  left: "70px",
  gap: "15px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "160px",
  left: "390px",
}));

const Perfil = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box
      height="100vh"
      display="flex"

      // flexDirection="column"
    >
      <Sidebar />
      {/* <Typography variant="h1" color="initial">
        column
      </Typography> */}
      <Box width="100%" pl="250px" pt="30px">
        <CardMedia
          className="animate__animated animate__fadeInDown "
          component="img"
          height="250"
          boxShadow="-2px 10px 28px 0px rgba(0,0,0,0.75)"
          image="https://i.ibb.co/s2HFhgD/Captura-desde-2022-08-31-11-53-30.png"
          alt="green iguana"
        />{" "}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            alignItems="center"
            padding="2px"
            borderRadius="15px"
          >
            <AccountCircleIcon sx={{ fontSize: 80, color: "grey" }} />

            <Typography sx={{ letterSpacing: "5px" }} variant="h4">
              Welcome, {user.username}!
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Paper
            sx={{
              width: "40vw",
              boxShadow: "-2px 10px 28px 0px rgba(0,0,0,0.75)",
            }}
          >
            <List>
              <ListItem>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary="Email:"
                  secondary={user.email}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary="Dirección:"
                  secondary={"Bermudez 2808"}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary="Teléfono:"
                  secondary={"1532860515"}
                ></ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

/*   <Box display="flex" flexDirection="column">
        {/* <Box sx={{ display: "flex" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className="animate__animated animate__fadeInDown "
          > }
          <Icon
          sx={{
            position: "relative",
            top: "240px",
            left: "300px",
            width: 80,
            height: 80,
            gap: "15px",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 80, color: "grey" }} />
        </Icon>
        <StyledTypography variant="h4">
          Welcome, {user.username}!
        </StyledTypography>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ position: "relative", top: "170px", left: "320px" }}
        >
          <Paper>
            <List sx={{ height: "250px" }}>
              <ListItem>
                <ListItemText
                  primary="Email:"
                  secondary={user.email}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Dirección:"
                  secondary={"Bermudez 2808"}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Teléfono:"
                  secondary={"1532860515"}
                ></ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Box>

      <CardMedia
        className="animate__animated animate__fadeInDown "
        component="img"
        height="250"
        width="120vw"
        image="https://i.ibb.co/5TYCrCr/Captura-desde-2022-08-29-10-47-51.png"
        alt="green iguana"
      /> 
      */

/*      <Sidebar />

      <StyledCardMedia
        component="img"
        height="250"
        wid
        image="https://i.ibb.co/5TYCrCr/Captura-desde-2022-08-29-10-47-51.png"
        alt="green iguana"
      ></StyledCardMedia>
      <Avatar sx={{}}>H</Avatar>*/
/*  <Box
        component="img"
        sx={{
          width: "1150px",
          marginLeft: "220px",
          height: 250,
          paddingTop: "-5px",
          backgroundColor: "primary.dark",
        }}
        src="https://i.ibb.co/YcDHmT4/Captura-desde-2022-08-29-12-46-55.png"
        alt="The house from the offer."
      ></Box>
      <StyledTypography variant="h3" color="initial">
        Welcome Florencia!
      </StyledTypography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ marginLeft: "150px" }}
      >
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton onClick={secondHandleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {anotherOper ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={anotherOper} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>
      </Stack>*/

export default Perfil;
