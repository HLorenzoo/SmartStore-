import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
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
  left: "250px",
  top: "270px",
  fontSize: "25px",
  transition: "all .25s ease-out",

  "&:hover": {
    color: "grey",
    transform: "rotate(-1deg)",
  },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "220px",
  left: "60px",
}));

const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Rating
          sx={{ position: "relative", left: "400px", top: "200px" }}
          name="read-only"
          value={4}
          readOnly
        />
        <StyledTypography variant="h3"> FreeBuds Studio</StyledTypography>
        <StyledTypography2
          sw={{ position: "relative", left: "250px", top: "250px" }}
          variant="h3"
        >
          HUAWEI
        </StyledTypography2>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8d69d4",
            "&:hover": {
              backgroundColor: "#633fa4",
            },
            position: "relative",
            right: "80px",
            top: "370px",
          }}
        >
          {" "}
          Buy NOW!
        </Button>
      </Box>
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
