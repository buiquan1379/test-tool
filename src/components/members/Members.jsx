import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function MembersPage() {
    return (
        <Box display="flex-inline" justifyContent="center" textAlign="center" p={5}>
            <Button component={Link} to="/" variant="contained" color="primary" sx={{px: 5}}>
                Home
            </Button>
            <Typography variant="h1" m={5}>Members</Typography>
        </Box>
    );
}
