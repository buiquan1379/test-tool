import styled from "@emotion/styled";
import {AppBar, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Stack} from "@mui/material";
import {useState} from "react";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Notifications from "@mui/icons-material/Notifications";
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")((theme) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center"
}));

const Navbar = ({set, setMenu}) => {
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={3}>
                    <MenuIcon onClick={() => {
                        if (set === true) setMenu(false); else setMenu(true);
                    }}/>
                    <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>
                        Test Management Tool</Typography>
                    <ContentPasteSearchIcon sx={{display: {xs: "block", sm: "none"}}}/>
                </Stack>
                <Search><InputBase placeholder="Search..." fullWidth/></Search>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
                    <Icons>
                        <Badge badgeContent={4} color="error"> <Notifications/> </Badge>
                    </Icons>
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Avatar sx={{height: "30px", width: "30px"}}/>
                        <Typography variant="span">Quan</Typography>
                    </UserBox>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={(e) => setOpen(false)}
                        anchorOrigin={{vertical: "top", horizontal: "right"}}
                        transformOrigin={{vertical: "top", horizontal: "right"}}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Members</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu>
                </Stack>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
