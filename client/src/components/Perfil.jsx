import React from "react";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import { Avatar, Box, Card, CardMedia, styled, Item } from "@mui/material";
import { Stack } from "@mui/material";
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  maxWidth: "800px",
}));

const Perfil = () => {
  return (
    <>
      <Sidebar />
      <Stack
        sx={{
          display: "flex",
          alignContent: "stretch",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Card>
          <StyledCardMedia
            component="img"
            height="200"
            image="https://i.ibb.co/5TYCrCr/Captura-desde-2022-08-29-10-47-51.png"
            alt="green iguana"
          ></StyledCardMedia>
        </Card>

        <Avatar sx={{}}>H</Avatar>
      </Stack>
    </>
  );
};

export default Perfil;
