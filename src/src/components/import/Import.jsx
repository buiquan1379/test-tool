import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import ImportContent from "./ImportContent";

export default function ImportPage() {
    return (
        <Box sx={{display: "flex", backgroundColor: "#f9fafb"}}>
            <Sidebar selected={5}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <ImportContent/>
            </Box>
        </Box>
    );
}
