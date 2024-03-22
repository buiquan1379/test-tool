import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import RunContent from "./RunContent";

export default function RunPage() {
    return (
        <Box sx={{display: "flex"}}>
            <Sidebar selected={1}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <RunContent/>
            </Box>
        </Box>
    );
}
