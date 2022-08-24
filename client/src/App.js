import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Sidebar />
    </Box>
  );
}

export default App;
