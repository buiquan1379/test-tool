import React from "react";
import Box from "@mui/material/Box";
import MSidebar from "../sidebar/MSidebar";
import RunsContent from "./RunsContent";

export default function RunsPage() {
    return (
        <Box sx={{display: "flex"}}>
            <MSidebar selected={1}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <RunsContent/>
            </Box>
        </Box>
    );
}