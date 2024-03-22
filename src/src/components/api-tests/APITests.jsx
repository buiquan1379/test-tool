import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/Sidebar";
import APITestsContent from "./APITestsContent";

export default function APITestsPage() {
    return (
        <Box sx={{display: "flex", backgroundColor: "#f9fafb"}}>
            <Sidebar selected={3}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <APITestsContent/>
            </Box>
        </Box>
    );
}
