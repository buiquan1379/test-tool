import React from 'react';
import Box from "@mui/material/Box";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Divider} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SaveIcon from '@mui/icons-material/Save';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import MDEditor from '@uiw/react-md-editor';

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

export default function MarkdownEdit(props) {
    const handleCancel = props.handleCancel ? props.handleCancel : (event) => {};
    const handleSave = props.handleSave ? props.handleSave : (event) => {};
    const markdown = props.markdown ? props.markdown : ``;

    const [value, setValue] = React.useState(markdown);

    return (
        <Box sx={{minWidth: "500px", width: "40vw", height: "100%", display: "flex", flexDirection: "column"}}>
            <Box sx={{display: "flex", p: 1, mx: 2, mt: 2}}>
                <Box sx={{flexGrow: 1, display: "flex"}}>
                    <LibraryAddCheckIcon sx={{my: "auto", mx: 1}}/>
                    <Typography sx={{display: "flex", my: "auto", ml: 1}} color="inherit">
                        <BookmarkIcon sx={{mr: 0.5, my: "auto", color: "green"}} fontSize="inherit"/>
                        Manual tests
                    </Typography>
                    <KeyboardArrowRightIcon sx={{my: "auto", mx: 0.5}}/>
                    <Typography sx={{display: 'flex', my: "auto"}} color="inherit">
                        Test @Abc13579
                    </Typography>
                </Box>
                <Box>
                    <CustomActiveButton variant="contained" startIcon={<SaveIcon/>} onClick={event => handleSave(event, value)}
                                  sx={{textTransform: "none", mr: 2}}>
                        Save
                    </CustomActiveButton>
                    <CustomButton variant="contained" sx={{color: "black"}} onClick={event => handleCancel(event)}>
                        Cancel
                    </CustomButton>
                </Box>
            </Box>
            <Divider/>
            <Box sx={{display: "flex", m: 3}}>
                <Typography variant="h6" sx={{display: "flex", my: "auto", ml: 1}} color="inherit">
                    <ExpandLessIcon sx={{mr: 0.5, my: "auto", color: "red"}} fontSize="inherit"/>
                    {props.title ? props.title : "Test title"}
                </Typography>
            </Box>
            <Box flex={1} overflow="auto" display="flex" flexDirection="column" sx={{px: 3, pb: 3, pt: 1}}>
                <MDEditor height="100%" value={value} onChange={setValue} preview="edit" sx={{}}/>
                {/*<MDEditor height="100%" value={value} onChange={setValue} preview="edit" highlightEnable={false} sx={{}}/>*/}
            </Box>
        </Box>
    );
}
