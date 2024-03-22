import React from 'react';
import Box from "@mui/material/Box";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import {Chip, Divider, Tab, Tabs} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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

const MTab = styled(Tab)(({theme}) => ({
    textTransform: "none",
}));

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{px: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function ManualSuiteView(props) {
    const handleClose = props.handleClose ? props.handleClose : (event) => {};
    const handleEdit = props.handleEdit ? props.handleEdit : (event) => {};
    const markdown = props.markdown ? props.markdown : `## Introduction
1. Developers these days are spoiled with choice when it comes to 
**selecting** an **MV framework** for structuring and organizing their JavaScript web apps.
Backbone, Ember, AngularJS… the list of new and stable solutions continues to grow, 
but just how do you decide on which to use in a sea of so many options?

2. To help solve this problem, we created **TodoMVC** - a project which offers 
the same _Todo application_ implemented using MV concepts in most of 
the popular JavaScript MV* frameworks of today.

### Pre-Requirements
- We will test TodoMVC application.
- Here we will describe application requirements.
- You can also edit this description with markdown text to try it out.
`;

    const [rightTabIndex, setRightTabIndex] = React.useState(0);

    const handleRightIndexChange = (event, newValue) => {
        setRightTabIndex(newValue);
    }

    return (
        <Box sx={{minWidth: "500px", width: "40vw", display: "flex", flexDirection: "column"}}>
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
                    <CustomButton variant="contained" startIcon={<EditIcon/>} onClick={event => handleEdit(event)}
                                  sx={{backgroundColor: "#eef2ff", color: "black", textTransform: "none", mr: 2}}>
                        Edit
                    </CustomButton>
                    <CustomButton variant="contained" sx={{}} onClick={event => handleClose(event)}>
                        <CloseIcon sx={{color: "red"}}/>
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
            <Box sx={{display: "flex", mx: 3}}>
                <Chip size="small" label="@suite" sx={{mx: 0.5}}/>
                <Chip size="small" label="@task" sx={{mx: 0.5}}/>
            </Box>
            <Tabs variant="fullWidth" value={rightTabIndex} onChange={handleRightIndexChange} sx={{mx: 3, my: 2}} scrollButtons
                  aria-label="scrollable force tabs example">
                <MTab icon={<InfoOutlinedIcon/>} label="TESTS AND DESCRIPTION" iconPosition="start"/>
            </Tabs>
            <Box sx={{flexGrow: 1}}>
                <CustomTabPanel value={rightTabIndex} index={0}>
                    <Box>
                        <MDEditor.Markdown source={markdown}/>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
