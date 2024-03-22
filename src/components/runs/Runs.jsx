import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import RunsContent from "./RunsContent";

export default function RunsPage() {
    return (
        <Box sx={{display: "flex"}}>
            <Sidebar selected={1}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <RunsContent/>
            </Box>
        </Box>
    );
}