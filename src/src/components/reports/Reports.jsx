import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import ReportsContent from "./ReportsContent";

export default function ReportsPage() {
    return (
        <Box sx={{display: "flex", backgroundColor: "#f9fafb"}}>
            <Sidebar selected={4}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <ReportsContent/>
            </Box>
        </Box>
    );
}
