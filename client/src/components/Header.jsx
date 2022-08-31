import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { fakeData } from "./fakeData";
import "animate.css";
const StyledCard = styled(CardMedia)(({ theme }) => ({
  maxWidth: "610px",
  boxShadow: "none",
  /*   position: "relative", */
  /* left: "570px", */
  display: "flex",
  /*   marginButton: "300px", */
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  /*  position: "relative", */
  /*   left: "250px",
  top: "270px", */
  fontSize: "25px",
  transition: "all .25s ease-out",

  "&:hover": {
    color: "grey",
    transform: "rotate(-1deg)",
  },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  /* position: "relative", */
  /*  top: "220px",
  left: "60px", */
}));

const image = fakeData[Math.floor(Math.random() * 5 + 1)];
const Header = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={8} sx={{ marginLeft: "300px" }}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className="animate__animated animate__fadeInDown "
              >
                <Stack spacing={1} sx={{ m: 2 }}>
                  <Rating
                    sx={{
                      position: "relative" /*  left: "400px", top: "200px" */,
                    }}
                    name="read-only"
                    value={4}
                    readOnly
                  />
                  <StyledTypography2
                    sw={{
                      position: "relative" /* left: "250px", top: "250px" */,
                    }}
                    variant="h3"
                  >
                    {image.marca}
                  </StyledTypography2>
                  <StyledTypography variant="h3">{image.name}</StyledTypography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8d69d4",
                    "&:hover": {
                      backgroundColor: "#633fa4",
                    },
                    /*  position: "relative", */
                    width: "60%",
                    minWidth: "50%",
                    /*  right: "80px",
            top: "370px", */
                  }}
                >
                  Buy NOW!
                </Button>
              </Box>

              <Box width="40%" >
                <StyledCard
                  className="animate__animated animate__fadeInDown "
                  component="img"
                  // height="40%"
                  /* image="https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/headphones/02-list-freebuds-studio-v1.jpg"
                   */
                  image={image.image}
                  alt="green iguana"
                  sx={{
                    /*   border: "1px solid red", */
                    borderRadius: "15px",
                    // height: "40%"
                  }}
                />
              </Box>
            </Box>
            <Divider
              sx={{
                mx: "auto",
                width: "40vw",
                marginTop: "35px"
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
