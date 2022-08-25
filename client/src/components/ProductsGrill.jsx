import * as React from 'react';
import { CardActions, Container, Typography, Box, Grid, CardMedia, CardContent, Card, Button} from '@mui/material';
import { fakeData } from './fakelist'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductsGrill = () => {
  return (
    <>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {fakeData.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                    alt="foto de producto"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button sx={{backgroundColor: "#212223",'&:hover':{backgroundColor: '#212223',opacity: [0.9, 0.8, 0.7],}}} variant="contained" size="small">Ver</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </>
  );
}

export default ProductsGrill;