import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import PlansContent from "./PlansContent";

export default function PlansPage() {
    return (
        <Box sx={{display: "flex"}}>
            <Sidebar selected={2}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <PlansContent/>
            </Box>
        </Box>
    );
}