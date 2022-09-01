import * as React from "react";
import {
  CardActions,
  Container,
  Typography,
  Box,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { fakeData } from "./fakelist";
import "animate.css";

const ProductsGrill = () => {
  return (
    <>
      <main>
        {/* <Box
          sx={{
            bgcolor: "#F4F5F7",
            pb: 6,
          }}
        ></Box> */}

        <Grid
          container
          spacing={4}
          sx={{ p: 8, ml: "250px", maxWidth: "85vw" }}
        >
          {fakeData.map((card) => (
            <Grid
              item
              key={card.name}
              xs={12}
              sm={6}
              md={4}
              className="animate__animated animate__fadeInUp animate__slow"
            >
              <Card
                sx={{
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                  transition: "all .2s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "50%",
                    // width: "320px",
                    /* aspectRatio: "1/1", */
                    objectFit: "contain",
                    /* pt: "25px" */
                  }}
                  image={card.image}
                  alt="foto de producto"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>
                    {`${card.description.substring(0, 130)}...`}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <FavoriteIcon
                    sx={{
                      backgroundColor: "#212223",
                      "&:hover": {
                        backgroundColor: "#212223",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                    variant="contained"
                    size="large"
                  >
                  </FavoriteIcon>
                  <Button
                    sx={{
                      backgroundColor: "#212223",
                      "&:hover": {
                        backgroundColor: "#212223",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                    variant="contained"
                    size="large"
                  >
                    Ver
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* </Container> */}
      </main>
    </>
  );
};

export default ProductsGrill;
