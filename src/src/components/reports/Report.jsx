import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import ReportContent from "./ReportContent";

export default function ReportPage() {
    return (
        <Box sx={{display: "flex", backgroundColor: "#f9fafb"}}>
            <Sidebar selected={4}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <ReportContent/>
            </Box>
        </Box>
    );
}
