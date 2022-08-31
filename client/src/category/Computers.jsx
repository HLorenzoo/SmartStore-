import {
  Box,
  CardActions,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
  Pagination,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../state/products";
import { useNavigate } from "react-router";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Category = () => {
  const url = useLocation().pathname.split("category/")[1];
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/products/cat/${url}`).then((res) => setProducts(res.data));
  }, [url]);

  const handleClick = (product) => {
    dispatch(getOne(product)).then(() => navigate(`/products/${product._id}`));
  };

  return (
    <Box>
      <Sidebar />
      <Box
        className="animate__animated animate__fadeIn animate__slow"
        sx={{
          p: 3,
          ml: "250px",
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#482E7D",
          boxShadow: "1px 9px 18px 0px rgba(0,0,0,0.75);",
        }}
      >
        <LocalMallIcon fontSize="large" sx={{ color: "#CDD0D4" }} />
        <Typography
          variant="h2"
          color="initial"
          sx={{ textAling: "center", color: "#CDD0D4" ,}}
        >
          {url}
        </Typography>
        <ShoppingCartIcon fontSize="large" sx={{ color: "#CDD0D4" }} />
      </Box>
      <Grid container spacing={4} sx={{ p: 8, ml: "250px", maxWidth: "85vw" }}>
        {products?.map((card) => (
          <Grid
            item
            key={card.name}
            xs={12}
            sm={6}
            md={4}
            className="animate__animated animate__fadeIn animate__slow"
            /*    sx={{ minHeight: "55vh" }} */
          >
            <Card
              sx={{
                height: "50vh",
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
                  {`${card.description.substring(0, 200)}...`}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={() => {
                    handleClick(card);
                  }}
                  sx={{
                    backgroundColor: "#212223",
                    "&:hover": {
                      backgroundColor: "#212223",
                      opacity: [0.9, 0.8, 0.7],
                      /*  marginBottom: "20px", */
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
    </Box>
  );
};

export default Category;
