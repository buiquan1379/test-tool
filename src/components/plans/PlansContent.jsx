import React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import {Chip, Divider, ListItem, Pagination, Stack} from "@mui/material";
import List from "@mui/material/List";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#eef2ff",
    "&:hover": {
        backgroundColor: "#c7d2fe",
    },
    "&:active": {
        backgroundColor: "#eef2ff",
    },
});

const CustomActiveButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#6366f1",
    "&:hover": {
        backgroundColor: "#4338ca",
    },
    "&:active": {
        backgroundColor: "#eef2ff",
    },
});

export default function PlansContent() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#f9fafb", minHeight: "100vh"}}>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                    <Typography variant="h4" sx={{fontWeight: "bold", ml: 3}}>TestCafe Demo Project / Plans</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 3, color: "#878494"}}>3 plans</Typography>
                    <CustomButton variant="text" sx={{ml: 3}}><FilterAltIcon sx={{color: "black"}}/></CustomButton>
                    <TextField id="outlined-basic" variant="outlined" size="small" sx={{ml: 2}} placeholder="Search"
                               InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <SearchIcon/>
                                       </InputAdornment>
                                   ),
                               }}/>
                </Box>
                <Box sx={{display: "flex", p: 2}}>
                    <CustomActiveButton variant="contained" sx={{mr: 2}}><AddIcon/></CustomActiveButton>
                </Box>
            </Box>
            <Box sx={{display: "flex", py: 2, textAlign: "center"}}>
                <Button variant="text"><LibraryAddCheckIcon sx={{color: "#616161"}}/></Button>
                <Typography sx={{px: 3, my: "auto", fontWeight: "bold", color: "#455060"}}>Manual 1</Typography>
                <Typography sx={{px: 3, my: "auto", fontWeight: "bold", color: "#455060"}}>Automated 1</Typography>
                <Typography sx={{px: 3, my: "auto", fontWeight: "bold", color: "#455060"}}>Mixed 1</Typography>
                <Typography sx={{px: 3, my: "auto", fontWeight: "bold", color: "#9fa5ac"}}>Generated</Typography>
            </Box>
            <Divider/>
            <Box direction="column" justifyContent="flex-end" sx={{flexGrow: 1, overflowY: "auto", height: 0}}>
                <List sx={{p: 1}}>
                    <ListItem sx={{display: "flex"}}>
                        <Box sx={{flexGrow: 1, mr: 2, display: "flex"}}>
                            <Typography sx={{my: "auto", mr: 2, color: "#455060"}}>Plan 1</Typography>
                            <Typography sx={{my: "auto", mr: 3, color: "#9fa5ac"}}>11 tests</Typography>
                            <Chip label="manual" size="small"
                                  sx={{p: 0, mx: 0.5, backgroundColor: "#f59e0b", color: "white"}}/>
                        </Box>
                        <Typography sx={{my: "auto", color: "#9fa5ac"}}>Dec 21, 2023 3:20 AM</Typography>
                    </ListItem>
                    <Divider sx={{mx: 2}}/>
                    <ListItem sx={{display: "flex"}}>
                        <Box sx={{flexGrow: 1, mr: 2, display: "flex"}}>
                            <Typography sx={{my: "auto", mr: 2, color: "#455060"}}>Plan 2</Typography>
                            <Typography sx={{my: "auto", mr: 3, color: "#9fa5ac"}}>28 tests</Typography>
                            <Chip label="mixed" size="small"
                                  sx={{p: 0, mx: 0.5, backgroundColor: "#60a5fa", color: "white"}}/>
                        </Box>
                        <Typography sx={{my: "auto", color: "#9fa5ac"}}>Dec 21, 2023 3:21 AM</Typography>
                    </ListItem>
                    <Divider sx={{mx: 2}}/>
                    <ListItem sx={{display: "flex"}}>
                        <Box sx={{flexGrow: 1, mr: 2, display: "flex"}}>
                            <Typography sx={{my: "auto", mr: 2, color: "#455060"}}>Plan 3</Typography>
                            <Typography sx={{my: "auto", mr: 3, color: "#9fa5ac"}}>38 tests</Typography>
                            <Chip label="automated" size="small"
                                  sx={{p: 0, mx: 0.5, backgroundColor: "#a78bfa", color: "white"}}/>
                        </Box>
                        <Typography sx={{my: "auto", color: "#9fa5ac"}}>Dec 21, 2023 3:22 AM</Typography>
                    </ListItem>
                </List>
            </Box>
            <Divider/>
            <Stack spacing={2} sx={{p: 3}} alignItems="center">
                <Pagination count={1} variant="outlined" shape="rounded"/>
            </Stack>
        </Box>
    );
}
