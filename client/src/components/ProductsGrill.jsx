import * as React from "react";
import {
  CardActions,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../state/products";
import { useNavigate } from "react-router";

const ProductsGrill = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (product) => {
    dispatch(getOne(product)).then(() => navigate(`/products/${product._id}`));
  };

  return (
    <>
      <main>
        <Grid
          container
          spacing={4}
          sx={{ p: 8, ml: "250px", maxWidth: "85vw" }}
        >
          {products?.map((card) => (
            <Grid
              item
              key={card.name}
              xs={12}
              sm={6}
              md={4}
              className="animate__animated animate__fadeInUp animate__slow"
              sx={{minHeight:"75vh"}}
            >
              <Card
                sx={{
                  height: "65vh",
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
                  image={card.image[0]}
                  alt="foto de producto"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {card.name.substring(0, 20)}...
                  </Typography>
                  <Typography>
                    {`${card.description.substring(0, 80)}...`}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    onClick={() => {
                      handleClick(card);
                    }}
                    sx={{
                      backgroundColor: "#212223",
                      "&:hover": {
                        backgroundColor: "#212223",
                        opacity: [0.9, 0.8, 0.7],
                        marginBottom: "20px"
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
