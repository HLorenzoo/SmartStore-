import React, { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Box>
        <Signup />
        {/* <Stack direction="row" spacing={2} justifyContent="space-evenly"> */}
        {/* Navbar */}
        {/* <Sidebar /> */}
        {/* Content */}
        {/* </Stack> */}
      </Box>
    </>
  );
}

export default App;
