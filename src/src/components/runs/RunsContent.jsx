import React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import SyncIcon from "@mui/icons-material/Sync";
import DownloadIcon from "@mui/icons-material/Download";
import {Chip, Divider, Drawer, Tab, Tabs} from "@mui/material";
import Label from "@mui/icons-material/Label";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {TreeView} from "@mui/x-tree-view/TreeView";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import RunDrawer from "./RunDrawer";

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

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 12,
    borderRadius: 7,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#c0c1c3",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#93c5fd",
    },
}));

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', position: "relative", mr: 3}}>
            <Box sx={{width: '100%'}}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <Typography variant="caption" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

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
        note,
        percent,
        ...other
    } = props;

    const styleProps = {
        "--tree-view-color": "#1a73e8",
        "--tree-view-bg-color": "#e8f0fe"
    };

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{display: "flex", alignItems: "center", p: 0.5, pr: 0,}}>
                    <Box sx={{flexGrow: 1, mr: 2, display: "flex"}}>
                        <Box component={LabelIcon} color={labelIconColor} sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
                        <Typography variant="body2" sx={{mr: 2, my: "auto"}}>
                            {labelText}
                        </Typography>
                        {
                            labelInfo && <Chip label={labelInfo} color="warning" size="small"
                                               sx={{p: 0, mr: 2, backgroundColor: labelInfoColor}}/>
                        }
                        <Typography variant="caption" color="#9e9f9f" sx={{my: "auto"}}>
                            {note}
                        </Typography>
                    </Box>
                    <Box display="flex" alignContent="center">
                        <LinearProgressWithLabel sx={{width: "200px"}} value={percent ? percent : 50}/>
                        <CustomButton variant="contained" size="small" sx={{px: 1}}
                                      onClick={(event) => event.stopPropagation()}>
                            <MoreHorizIcon size="small" sx={{color: "black"}}/>
                        </CustomButton>
                    </Box>
                </Box>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

export default function RunsContent() {

    const handleOpen = (event, value, component) => {
        setDrawerComponent(component);
        setOpen(value);
    }

    const handleIndexChange = (event, newValue) => {
        setTabIndex(newValue);
    }

    const handleSelect = (event, nodeId) => {
        handleOpen(event, true,  <RunDrawer handleClose={handleClose} title={"Manual tests for TodoMVC"}/>);
    }

    const handleClose = (event) => {
        handleOpen(event, false, <div/>);
    }

    const [tabIndex, setTabIndex] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [drawerComponent, setDrawerComponent] = React.useState(<RunDrawer handleClose={handleClose}/>);

    return (
        <div>
            <Drawer anchor={"right"} open={open}>
                {drawerComponent}
            </Drawer>
            <Box sx={{display: "flex-inline", backgroundColor: "#f9fafb", minHeight: "100vh"}}>
                <Box sx={{display: "flex", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                        <Avatar variant="circular" sx={{mx: 3}}
                                src={"https://app.testomat.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cf559b4f9db8e904319d514f993751e23e0e5d0/testcafe_logo.jpg"}/>
                        <Typography variant="h4" sx={{fontWeight: "bold"}}>TestCafe Demo Project / Runs</Typography>
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
                        <CustomActiveButton variant="contained" sx={{mr: 2}}><AddIcon
                            sx={{color: "white"}}/></CustomActiveButton>
                        <CustomButton variant="contained" sx={{mr: 2}}>
                            <MoreHorizIcon sx={{color: "black"}}/>
                        </CustomButton>
                    </Box>

                </Box>
                <Box sx={{display: "flex", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                        <Button variant="text"><LibraryAddCheckIcon sx={{color: "#616161"}}/></Button>
                        <Tabs value={tabIndex} onChange={handleIndexChange}>
                            <MTab label="Manual"/>
                            <MTab label="Automated"/>
                            <MTab label="Mixed"/>
                            <MTab label="Unfinished"/>
                            <MTab label="Groups"/>
                        </Tabs>
                    </Box>
                    <Box sx={{display: "flex", p: 2}}>
                        <CustomButton variant="contained" sx={{mr: 2}}>
                            <DownloadIcon sx={{color: "#616161"}}/>
                        </CustomButton>
                        <CustomButton variant="contained" startIcon={<SyncIcon/>}
                                      sx={{backgroundColor: "#eef2ff", color: "#616161", textTransform: "none", mr: 2}}>
                            Reset
                        </CustomButton>
                    </Box>
                </Box>
                <Divider sx={{mb: 3}}/>
                <CustomTabPanel value={tabIndex} index={5}>
                    <Box>
                        <TreeView
                            onNodeSelect={handleSelect}
                            aria-label="manual"
                            defaultCollapseIcon={<ArrowDropDownIcon/>}
                            defaultExpandIcon={<ArrowRightIcon/>}
                            defaultEndIcon={<div style={{width: 24}}/>}
                            sx={{flexGrow: 1, overflowY: "auto"}}
                        >
                            <StyledTreeItem nodeId="1" labelText="Manual tests for TodoMVC" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11/11 tests">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="2" labelText="Manual tests for TodoMVC 1" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11 tests">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="3" labelText="Manual tests for TodoMVC 2" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11 tests">
                            </StyledTreeItem>
                        </TreeView>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={0}>
                    <Box>
                        <TreeView
                            onNodeSelect={handleSelect}
                            aria-label="manual"
                            defaultCollapseIcon={<ArrowDropDownIcon/>}
                            defaultExpandIcon={<ArrowRightIcon/>}
                            defaultEndIcon={<div style={{width: 24}}/>}
                            sx={{flexGrow: 1, overflowY: "auto"}}
                        >
                            <StyledTreeItem nodeId="1" labelText="Manual tests for TodoMVC" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11/11 tests">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="2" labelText="Manual tests for TodoMVC 1" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11 tests">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="3" labelText="Manual tests for TodoMVC 2" labelIcon={Label}
                                            labelInfo="manual" labelInfoColor="#f59e0b" note="11 tests">
                            </StyledTreeItem>
                        </TreeView>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={1}>
                    <Box>
                        <Typography variant="h6">Automated</Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={2}>
                    <Box>
                        <Typography variant="h6">Mixed</Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={3}>
                    <Box>
                        <Typography variant="h6">Unfinished</Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={4}>
                    <Box>
                        <Typography variant="h6">Groups</Typography>
                    </Box>
                </CustomTabPanel>
            </Box>
        </div>
    );
}
