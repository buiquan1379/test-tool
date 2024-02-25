import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {styled} from "@mui/material/styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApiIcon from '@mui/icons-material/Api';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const drawerWidth = 260;
const drawerColor = "#3730a3";
const selectedColor = "white";
const normalColor = "#8cb4ed";

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== "open"})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
    }),
);

const ListItem = styled(ListItemButton)(({theme}) => ({
    color: normalColor,
    ".MuiListItemIcon-root": {
        color: normalColor,
    },
    ".MuiListItemText-root": {
        color: normalColor,
    },
    ".MuiListItemText-secondary": {
        color: normalColor,
    },
    "&.Mui-selected": {
        color: selectedColor,
        ".MuiListItemIcon-root": {
            color: selectedColor,
        },
        ".MuiListItemText-root": {
            color: selectedColor,
        },
        ".MuiListItemText-secondary": {
            color: selectedColor,
        }
    },
}));

export default function MSidebar(props) {
    const [open, setOpen] = React.useState(true);
    const selectedIndex = props.selected;

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer variant="permanent" open={open} PaperProps={{sx: {backgroundColor: drawerColor}}}>
            <DrawerHeader>
                <IconButton onClick={handleDrawer} sx={{color: "white"}}>
                    {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>

            <List sx={{flexGrow: 1}}>
                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/tests"} component={Link} to={"/tests"} selected={selectedIndex === 0}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center"}}>
                        <PlaylistAddCheckCircleIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Tests"} secondary={"[SHIFT+1]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/runs"} component={Link} to={"/runs"} selected={selectedIndex === 1}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <PlayCircleOutlineIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Runs"} secondary={"[SHIFT+2]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/plans"} component={Link} to={"/plans"} selected={selectedIndex === 2}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <ReceiptLongIcon sx={{fontSize: 32}}/>
                        
                    </ListItemIcon>
                    <ListItemText primary={"Plans"} secondary={"[SHIFT+3]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/plans"} component={Link} to={"/plans"} selected={selectedIndex === 3}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <ApiIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"API Tests"} secondary={"[SHIFT+4]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/plans"} component={Link} to={"/plans"} selected={selectedIndex === 4}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <AnalyticsIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Reports"} secondary={"[SHIFT+5]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

                <ListItem sx={{minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,}}
                          key={"/plans"} component={Link} to={"/plans"} selected={selectedIndex === 5}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <ImportExportIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Import"} secondary={"[SHIFT+6]"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>
                
                <ListItem sx={{
                    minHeight: 64, justifyContent: open ? "initial" : "center", px: 2.5,
                    position: "absolute", bottom: 0, width: "100%",
                }}
                          key={"/home"} component={Link} to={"/home"} selected={selectedIndex === -1}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center",}}>
                        <HomeIcon sx={{fontSize: 32}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"} sx={{opacity: open ? 1 : 0}}
                                  primaryTypographyProps={{fontWeight: "bold"}}/>
                </ListItem>

            </List>
        </Drawer>
    );
}
