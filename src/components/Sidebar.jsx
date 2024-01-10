import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({set}) => {
    return(
        <Box flex={1} p={2} sx={{
          display: set === true ? {xs:"none", sm:"block"} : "none"
        }}>

        <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <PlaylistAddCheckCircleIcon/>      
            </ListItemIcon>
            <ListItemText primary="Tests" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <PlayCircleIcon/>      
            </ListItemIcon>
            <ListItemText primary="Runs" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <FormatListNumberedIcon/>      
            </ListItemIcon>
            <ListItemText primary="Steps" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <EqualizerIcon/>      
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <ReceiptLongIcon/>      
            </ListItemIcon>
            <ListItemText primary="Plans" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <FolderCopyIcon/>      
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <DarkModeIcon/>      
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <SettingsIcon/>      
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        </List>
        
        </Box>
    )
}
export default Sidebar;