import React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import {Chip, Divider, ListItem, Stack, SvgIcon} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {TreeView} from "@mui/x-tree-view/TreeView";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import List from "@mui/material/List";

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

const StyledTreeItemRoot = styled(TreeItem)(({theme}) => ({
    color: "#333333",
    [`& .${treeItemClasses.content}`]: {
        color: "#333333",
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        "&.Mui-expanded": {
            fontWeight: theme.typography.fontWeightRegular,
        },
        "&:hover": {
            backgroundColor: "#e8f0fe",
        },
        "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
            backgroundColor: `var(--tree-view-bg-color, #e8f0fe)`,
            color: "var(--tree-view-color)",
        },
        [`& .${treeItemClasses.label}`]: {
            color: "inherit",
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelIconColor,
        labelText,
        labelInfo,
        labelInfoColor,
        tags,
        ...other
    } = props;

    const styleProps = {
        "--tree-view-color": "#1a73e8",
        "--tree-view-bg-color": "#e8f0fe"
    };
    let listTags = [];
    if (tags) {
        listTags = tags.map(tag =>
            <Chip label={tag} size="small" sx={{p: 0, mx: 0.5}}/>
        );
    }

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{display: "flex", alignItems: "center", p: 0.5, pr: 0,}}>
                    <Box component={LabelIcon} color={labelIconColor} sx={{mr: 1}}/>
                    <Typography variant="body2" sx={{mr: 2}}>
                        {labelText}
                    </Typography>
                    {
                        labelInfo && <Chip label={labelInfo} color="warning" size="small"
                                           sx={{p: 0, mr: 2, backgroundColor: labelInfoColor}}/>
                    }
                    {listTags}
                </Box>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 14,
    borderRadius: 7,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#6b7280",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#10b981",
    },
}));

export default function RunsContent() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#f9fafb", minHeight: "100vh"}}>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                    <CustomButton variant="text" sx={{mx: 3, px: 2, color: "black"}}
                                  startIcon={<KeyboardDoubleArrowLeftIcon/>}>Runs</CustomButton>
                    <Typography variant="h4" sx={{fontWeight: "bold", mr: 2}}>Manual Run</Typography>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>3/11</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5}}>tests</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 1}}>(</Typography>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>27%</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5}}>completed)</Typography>
                </Box>
                <Box sx={{display: "flex", p: 2}}>
                    <Avatar variant="circular" sx={{mx: 3}}
                            src={"https://app.testomat.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cf559b4f9db8e904319d514f993751e23e0e5d0/testcafe_logo.jpg"}/>
                    <CustomActiveButton variant="contained" sx={{mr: 2}} startIcon={<CheckIcon/>}>Finish
                        Run</CustomActiveButton>
                </Box>
            </Box>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box sx={{display: "flex", p: 3, width: "100%"}}>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="green">
                            <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
                        </svg>
                    </SvgIcon>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>3</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5, mr: 1}}>Passed</Typography>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="red">
                            <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
                        </svg>
                    </SvgIcon>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>0</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5, mr: 1}}>Failed</Typography>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="orange">
                            <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
                        </svg>
                    </SvgIcon>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>0</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5, mr: 1}}>Skipped</Typography>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="grey">
                            <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
                        </svg>
                    </SvgIcon>
                    <Typography variant="span" sx={{fontWeight: "bold", my: "auto"}}>8</Typography>
                    <Typography variant="span" sx={{my: "auto", ml: 0.5, mr: 1}}>Not Run</Typography>
                    <BorderLinearProgress variant="determinate" value={27}
                                          sx={{flexGrow: 1, my: "auto", ml: 5, mr: 1}}/>
                </Box>
            </Box>
            <Box sx={{display: "flex", width: "100%", flexGrow: 1}}>
                <Box sx={{display: "flex-inline", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, textAlign: "center"}}>
                        <Button variant="text"><LibraryAddCheckIcon sx={{color: "#616161"}}/></Button>
                        <Typography sx={{my: "auto"}}>Manual tests at 20 Feb 2024 02:11</Typography>
                    </Box>
                    <TreeView aria-label="manual" defaultSelected={["1"]} defaultCollapseIcon={<ArrowDropDownIcon/>}
                              defaultExpandIcon={<ArrowRightIcon/>} defaultEndIcon={<div style={{width: 24}}/>}
                              sx={{flexGrow: 1, overflowY: "auto", px: 0}}>
                        <StyledTreeItem nodeId="1" labelIcon={BookmarkIcon} labelIconColor="red"
                                        labelText="filter all active tasks"
                                        tags={["@filter", "@bulk", "@action", "@list"]}
                                        color="#1a73e8" bgColor="#e8f0fe"/>
                        <StyledTreeItem nodeId="2" labelIcon={ExpandLessIcon} labelIconColor="red"
                                        labelText="create new task" tags={["@filter", "@bulk", "@action", "@list"]}
                                        color="#e3742f" bgColor="#e8f0fe"/>
                        <StyledTreeItem nodeId="3" labelIcon={ExpandMoreIcon} labelIconColor="blue"
                                        labelText="delete created task" tags={["@filter", "@bulk", "@action", "@list"]}
                                        color="#a250f5" bgColor="#e8f0fe"/>
                        <StyledTreeItem nodeId="4" labelIcon={AddIcon} labelText="mark created task as completed"
                                        tags={["@filter", "@bulk", "@action", "@list"]} color="#3c8039"
                                        bgColor="#e8f0fe"/>
                        <StyledTreeItem
                            nodeId="5" labelIcon={AddIcon} labelText="edit created task"
                            tags={["@filter", "@bulk", "@action", "@list"]} color="#3c8039" bgColor="#e8f0fe"/>
                        <StyledTreeItem nodeId="6" labelIcon={AddIcon} labelText="delete two tasks"
                                        tags={["@filter", "@bulk", "@action", "@list"]} color="#3c8039"
                                        bgColor="#e8f0fe"/>
                    </TreeView>
                </Box>
                <Divider orientation="vertical" flexItem sx={{borderRightWidth: 5, borderLeftWidth: 5}}></Divider>
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", p: 3}}>
                    <Typography variant="h5" sx={{fontWeight: "bold"}}>create new task</Typography>
                    <Divider sx={{mb: 2, borderStyle: "dashed"}}/>
                    <Box direction="column" justifyContent="flex-end" borderRadius={3} p={3}
                         sx={{flexGrow: 1, overflowY: "auto", height: 0, backgroundColor: "white"}}>
                        <Typography variant="h5" sx={{fontWeight: "bold", my: 1, color: "#3363eb"}}>
                            Introduction
                        </Typography>
                        <Divider color="#bfdbfe" sx={{mb: 1}}/>
                        <List sx={{listStyle: "decimal", pl: 4}}>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>Developers these days are spoiled with choice when it comes to
                                    <Box fontWeight="bold" display="inline"> selecting </Box>
                                    an
                                    <Box fontWeight="bold" display="inline"> MV framework </Box>
                                    for structuring and organizing their JavaScript web apps.
                                    Backbone, Ember, AngularJS… the list of new and stable solutions continues to grow,
                                    but just how do you decide on which to use in a sea of so many options?
                                </Typography>
                            </ListItem>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    To help solve this problem, we created
                                    <Box fontWeight="bold" display="inline"> TodoMVC </Box>
                                    - a project which offers
                                    the same Todo application implemented using MV concepts in most of
                                    the popular JavaScript MV* frameworks of today.
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography variant="h5" sx={{fontWeight: "bold", my: 1, color: "#3363eb"}}>
                            Requirements
                        </Typography>
                        <Divider color="#bfdbfe" sx={{mb: 1}}/>
                        <List sx={{listStyle: "number", pl: 4}}>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    any free form text should be accepted
                                </Typography>
                            </ListItem>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    special symbols should be accepted for task name
                                </Typography>
                            </ListItem>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    tasks should be added without page reload
                                </Typography>
                            </ListItem>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    unicode should be accepted
                                </Typography>
                            </ListItem>
                            <ListItem sx={{display: "list-item"}}>
                                <Typography>
                                    there is no length limitation for input field
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{width: "100%"}}>
                        <Typography variant="h5" sx={{fontWeight: "bold", my: 1}}>Result</Typography>
                        <Stack direction="row" spacing={2} sx={{width: "100%", mb: 2}}>
                            <Button variant="contained" color="success" sx={{width: "100%"}}>Passed</Button>
                            <Button variant="outlined" color="error" sx={{width: "100%"}}>Failed</Button>
                            <Button variant="outlined" color="warning" sx={{width: "100%"}}>Skipped</Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
