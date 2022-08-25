import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const StyledCard = styled(CardMedia)(({ theme }) => ({
  maxWidth: "610px",
  position: "relative",
  left: "570px",
  display: "flex",
  marginButton: "300px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  left: "320px",
  top: "200px",
  fontSize: "25px",
  transition: "all .25s ease-out",

  "&:hover": {
    color: "grey",
    transform: "rotate(-1deg)",
  },
}));

const Header = () => {
  return (
    <>
      <Rating
        sx={{ position: "relative", left: "365px", top: "200px" }}
        name="read-only"
        value={4}
        readOnly
      />
      <StyledTypography variant="h3">Nuevos Auriculares</StyledTypography>

      <Card>
        <StyledCard
          component="img"
          height="500"
          image="https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/headphones/02-list-freebuds-studio-v1.jpg"
          alt="green iguana"
        />
      </Card>
    </>
  );
};

export default Header;
