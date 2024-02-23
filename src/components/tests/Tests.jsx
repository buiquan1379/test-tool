import React from "react";
import Box from "@mui/material/Box";
import MSidebar from "../sidebar/MSidebar";
import TestsContent from "./TestsContent";

export default function TestsPage() {
    return (
        <Box sx={{display: "flex", backgroundColor: "#f9fafb"}}>
            <MSidebar selected={0}/>
            <Box component="main" sx={{flexGrow: 1}}>
                <TestsContent/>
            </Box>
        </Box>
    );
}
