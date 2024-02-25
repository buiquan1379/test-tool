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
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import SyncIcon from "@mui/icons-material/Sync";
import DownloadIcon from "@mui/icons-material/Download";
import {Alert, Chip, Divider, Drawer, Tab, Tabs} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Label from "@mui/icons-material/Label";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestoreIcon from '@mui/icons-material/Restore';
import {TreeView} from "@mui/x-tree-view/TreeView";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import Markdown from "react-markdown";

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
                    <Box component={LabelIcon} color={labelIconColor} sx={{mr: 1, fontSize: "inherit"}}/>
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

export default function TestsContent() {
    const [tabIndex, setTabIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [rightTabIndex, setRightTabIndex] = React.useState(0);

    const markdownContent = `
### Steps
* Open application
* Choose backbone.js framework
* Add regular task name
* Add task name with unicode
* Add task name with special symbols
* Add long name
* Check task name in list

### Expected results
* No error found
* All strings accepted
`

    const handleOpen = (event, value) => {
        setOpen(value);
    }

    const handleIndexChange = (event, newValue) => {
        setTabIndex(newValue);
    }

    const handleRightIndexChange = (event, newValue) => {
        setRightTabIndex(newValue);
    }

    return (
        <div>
            <Drawer anchor={"right"} open={open}>
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
                            <CustomButton variant="contained" startIcon={<EditIcon/>}
                                          sx={{backgroundColor: "#eef2ff", color: "black", textTransform: "none", mr: 2}}>
                                Edit
                            </CustomButton>
                            <CustomButton variant="contained" sx={{}} onClick={event => handleOpen(event, false)}>
                                <CloseIcon sx={{color: "red"}}/>
                            </CustomButton>
                        </Box>
                    </Box>
                    <Divider/>
                    <Box sx={{display: "flex", m: 3}}>
                        <Typography variant="h6" sx={{display: "flex", my: "auto", ml: 1}} color="inherit">
                            <ExpandLessIcon sx={{mr: 0.5, my: "auto", color: "red"}} fontSize="inherit"/>
                            create new task
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", mx: 3}}>
                        <Chip size="small" label="@suite" sx={{mx: 0.5}}/>
                        <Chip size="small" label="@task" sx={{mx: 0.5}}/>
                    </Box>
                    <Tabs value={rightTabIndex} onChange={handleRightIndexChange} sx={{mx: 3, my: 2}} scrollButtons
                          aria-label="scrollable force tabs example">
                        <MTab icon={<InfoOutlinedIcon/>} label="DESCRIPTION" iconPosition="start"/>
                        <MTab icon={<AttachFileOutlinedIcon/>} label="ATTACHMENTS" iconPosition="start"/>
                        <MTab icon={<PlayArrowIcon/>} label="RUNS" iconPosition="start"/>
                        <MTab icon={<RestoreIcon/>} label="HISTORY" iconPosition="start"/>
                    </Tabs>
                    <Box sx={{flexGrow: 1}}>
                        <CustomTabPanel value={rightTabIndex} index={0}>
                            <Box>
                                <Markdown>{markdownContent}</Markdown>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={rightTabIndex} index={1}>
                            <Box sx={{color: "blue"}}>
                                <Typography>
                                    ATTACHMENTS
                                </Typography>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={rightTabIndex} index={2}>
                            <Box sx={{color: "blue"}}>
                                <Typography>
                                    RUNS
                                </Typography>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={rightTabIndex} index={3}>
                            <Box sx={{color: "blue"}}>
                                <Typography>
                                    HISTORY
                                </Typography>
                            </Box>
                        </CustomTabPanel>
                    </Box>
                </Box>
            </Drawer>
            <Box sx={{display: "flex-inline", backgroundColor: "#f9fafb", minHeight: "100vh"}}>
                <Box sx={{display: "flex", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                        <Avatar variant="circular" sx={{mx: 3}}
                                src={"https://app.testomat.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cf559b4f9db8e904319d514f993751e23e0e5d0/testcafe_logo.jpg"}/>
                        <Typography variant="h4" sx={{fontWeight: "bold"}}>TestCafe Demo Project</Typography>
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
                        <CustomButton variant="contained" sx={{mr: 2}}><MoreHorizIcon
                            sx={{color: "black"}}/></CustomButton>
                    </Box>

                </Box>
                <Box sx={{display: "flex", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                        <Button variant="text"><LibraryAddCheckIcon sx={{color: "#616161"}}/></Button>
                        <Tabs value={tabIndex} onChange={handleIndexChange}>
                            <MTab label="Manual"/>
                            <MTab label="Automated"/>
                            <MTab label="Out of sync"/>
                            <MTab label="Detached"/>
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
                <CustomTabPanel value={tabIndex} index={0}>
                    <Box sx={{color: "red"}}>
                        <TreeView
                            aria-label="manual"
                            defaultExpanded={["1"]}
                            defaultCollapseIcon={<ArrowDropDownIcon/>}
                            defaultExpandIcon={<ArrowRightIcon/>}
                            defaultEndIcon={<div style={{width: 24}}/>}
                            sx={{flexGrow: 1, overflowY: "auto"}}
                        >
                            <StyledTreeItem nodeId="1" labelText="Manual tests for TodoMVC" labelIcon={Label}
                                            tags={["@action"]} labelIconColor={"green"}>
                                <StyledTreeItem
                                    nodeId="2"
                                    labelIcon={BookmarkIcon}
                                    labelIconColor="red"
                                    labelText="filter all active tasks"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                                <StyledTreeItem
                                    nodeId="3"
                                    labelIcon={ExpandLessIcon}
                                    labelIconColor="red"
                                    labelText="create new task"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                                <StyledTreeItem
                                    nodeId="4"
                                    labelIcon={ExpandMoreIcon}
                                    labelIconColor="blue"
                                    labelText="delete created task"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#a250f5"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                                <StyledTreeItem
                                    nodeId="5"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="mark created task as completed"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#3c8039"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                                <StyledTreeItem
                                    nodeId="6"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="edit created task"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#3c8039"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                                <StyledTreeItem
                                    nodeId="7"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="delete two tasks"
                                    labelInfo="manual"
                                    labelInfoColor="#f59e0b"
                                    tags={["@action"]}
                                    color="#3c8039"
                                    bgColor="#e8f0fe"
                                    onClick={event => handleOpen(event, true)}
                                />
                            </StyledTreeItem>
                        </TreeView>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={1}>
                    <Box sx={{color: "blue"}}>
                        <TreeView
                            aria-label="automated"
                            defaultExpanded={["1", "4", "7", "10", "13", "16", "19", "22"]}
                            defaultCollapseIcon={<ArrowDropDownIcon/>}
                            defaultExpandIcon={<ArrowRightIcon/>}
                            defaultEndIcon={<div style={{width: 24}}/>}
                            sx={{flexGrow: 1, overflowY: "auto"}}
                        >
                            <StyledTreeItem nodeId="1" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="2"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="3"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="4" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="5"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="6"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="7" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="8"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="9"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="10" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="11"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="12"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="13" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="14"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="15"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="16" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="17"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="18"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="19" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="20"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="21"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="22" labelText="Fixture" labelIcon={DescriptionOutlinedIcon}>
                                <StyledTreeItem
                                    nodeId="23"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Inject a Node.js module into a tested page"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                />
                                <StyledTreeItem
                                    nodeId="24"
                                    labelIcon={PanoramaFishEyeIcon}
                                    labelText="Find element by trimmed text"
                                    labelInfo="automated"
                                    labelInfoColor="#a78bfa"
                                    color="#e3742f"
                                    bgColor="#e8f0fe"
                                />
                            </StyledTreeItem>
                        </TreeView>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={2}>
                    <Box sx={{color: "green"}}>
                        <Alert variant="outlined" severity="info" color="warning">
                            <Typography component="div">
                                Tests are marked as
                                <Box fontWeight="bold" display="inline"> Out of Sync </Box>
                                if their description was
                                changed after the import.
                            </Typography>
                            <Typography>
                                We assume that these tests may need to be updated in the source code.
                            </Typography>
                        </Alert>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={3}>
                    <Box sx={{color: "lightgrey"}}>
                        <Alert variant="outlined" severity="info" color="warning">
                            <Typography>
                                Automated tests are marked as
                                <Box fontWeight="bold" display="inline"> Detached </Box>
                                if they were previously imported but not found in the current import.
                            </Typography>
                            <Typography>
                                We assume these tests were deleted from the repository so we notify that they may not be
                                available.
                            </Typography>
                        </Alert>
                    </Box>
                </CustomTabPanel>
            </Box>
        </div>
    );
}
