import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";

function App() {
  const [set, setMenu] = useState(false)
  return (
    <Box>
    <Navbar setMenu = {setMenu} set = {set} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar set = {set} />
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;