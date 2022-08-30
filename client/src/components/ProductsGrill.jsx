import React, { useEffect, useState } from "react";
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
  IconButton,
} from "@mui/material";
import { fakeData } from "./fakelist";
import "animate.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFav } from "../state/login";
import { Link } from "react-router-dom";
const ProductsGrill = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [favorito, setFavorito] = useState(false);
  const handleFav = (producto) => {
    dispatch(addFav(producto)).then(() => console.log("favs "));
  };

  useEffect(() => {}, []);

  return (
    <>
      <Box>
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
          {fakeData.map((card) => {
            const fav = user.favoritos?.filter(
              (producto) => producto.name === card.name
            ).length;
            return (
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
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton onClick={() => handleFav(card)}>
                      <FavoriteRoundedIcon
                        sx={{
                          color: fav ? "red" : "",
                          transition: "all 0.3s ease-in-out",
                          transform: fav ? "scale(1.1)" : "scale(0.9)",
                        }}
                      />
                    </IconButton>
                    <Link
                      to={`product/${card.name}`}
                      style={{ textDecoration: "none" }}
                    >
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
                      </Button>{" "}
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {/* </Container> */}
      </Box>
    </>
  );
};

export default ProductsGrill;
