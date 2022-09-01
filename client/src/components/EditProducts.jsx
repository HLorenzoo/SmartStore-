import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import fakeData from './fakeDataNew'
import { Link } from "react-router-dom";

const EditProducts = () => {




  return (
    <CssBaseline>
      <Box
        sx={{
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundColor: "#212223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            m: 10,
            p: 5,
            boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {fakeData.map((value, i) => (
              <ListItem
                key={i}
                disableGutters
                secondaryAction={
                  <IconButton >
                    <Link to="/editproduct" style={{ textDecoration: "none" }}>
                      <EditIcon />
                    </Link>
                    <DeleteIcon />
                  </IconButton>


                }
              >
                <ListItemText primary={value.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </CssBaseline>
  );
}


export default EditProducts;
