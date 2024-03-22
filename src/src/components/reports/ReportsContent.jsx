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
import {Chip, Divider, Tab, Tabs} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {TreeView} from "@mui/x-tree-view/TreeView";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

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
        status,
        title,
        type,
        tags,
        tests,
        numbers,
        time,
        ...other
    } = props;

    const styleProps = {
        "--tree-view-color": "#1a73e8",
        "--tree-view-bg-color": "#e8f0fe"
    };

    let statusComponent = <Box component={CircleIcon} color="#9ca3af" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    if (status === "pass") {
        statusComponent =
            <Box component={CheckCircleIcon} color="#10b981" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    } else if (status === "fail") {
        statusComponent =
            <Box component={DoNotDisturbOnIcon} color="#ef4444" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    }

    let listTags = [];
    if (tags) {
        listTags = tags.map(tag =>
            <Chip label={tag} size="small" sx={{p: 0, mx: 0.5}}/>
        );
    }

    let typeColor = type === "manual" ? "#f59e0b" : "#a78bfa";

    return (
        <StyledTreeItemRoot
            label={
                <Grid container sx={{}} justify="flex-end" alignItems="center">
                    <Grid xs={7} sx={{display: "flex"}}>
                        {statusComponent}
                        <Typography variant="body1" sx={{mr: 2, my: "auto"}}>
                            {title}
                        </Typography>
                        <Chip label={type} color="warning" size="small"
                              sx={{my: "auto", p: 0, mr: 0.5, backgroundColor: typeColor}}/>
                        {listTags}
                        <Typography variant="body2" color="#9e9f9f" sx={{my: "auto", ml: 1}}>
                            {tests}
                        </Typography>
                    </Grid>
                    <Grid xs={5} container display="flex" alignContent="center">
                        <Grid xs={6} container justifyContent="center">
                            <Chip label={numbers[0]} color="warning" size="small" disabled={numbers[0] === 0}
                                  sx={{
                                      fontWeight: "bold",
                                      my: "auto",
                                      px: 2,
                                      mr: 0.5,
                                      backgroundColor: "#81C784",
                                      color: "#1B5E20"
                                  }}/>
                            <Chip label={numbers[1]} color="warning" size="small" disabled={numbers[1] === 0}
                                  sx={{
                                      fontWeight: "bold",
                                      my: "auto",
                                      px: 2,
                                      mr: 0.5,
                                      backgroundColor: "#FF8A80",
                                      color: "#B71C1C"
                                  }}/>
                            <Chip label={numbers[2]} color="warning" size="small" disabled={numbers[2] === 0}
                                  sx={{
                                      fontWeight: "bold",
                                      my: "auto",
                                      px: 2,
                                      mr: 0.5,
                                      backgroundColor: "#FFD600",
                                      color: "#F57F17"
                                  }}/>
                        </Grid>
                        <Grid xs={6} container justifyContent="flex-end">
                            <Typography variant="body2" color="#9e9f9f" sx={{my: "auto", mr: 2}}>
                                {time}
                            </Typography>
                            <CustomButton variant="contained" size="small" sx={{px: 1}} disableElevation
                                          onClick={(event) => event.stopPropagation()}>
                                <MoreHorizIcon size="small" sx={{color: "black"}}/>
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

export default function ReportsContent() {

    const navigate = useNavigate();

    const handleIndexChange = (event, newValue) => {
        setTabIndex(newValue);
    }

    const handleSelect = (event, nodeId) => {
        navigate(`/reports/${nodeId}`);
    }

    const [tabIndex, setTabIndex] = React.useState(0);

    return (
        <div>
            <Box sx={{display: "flex-inline", backgroundColor: "#f9fafb", minHeight: "100vh"}}>
                <Box sx={{display: "flex", width: "100%"}}>
                    <Box sx={{display: "flex", py: 2, flexGrow: 1}}>
                        <Avatar variant="circular" sx={{mx: 3}}
                                src={"https://app.testomat.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cf559b4f9db8e904319d514f993751e23e0e5d0/testcafe_logo.jpg"}/>
                        <Typography variant="h4" sx={{fontWeight: "bold"}}>TestCafe Demo Project / Reports</Typography>
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
                        <CustomButton variant="contained" startIcon={<SyncIcon/>}
                                      sx={{backgroundColor: "#eef2ff", color: "#616161", textTransform: "none", mr: 2}}>
                            Reset
                        </CustomButton>
                    </Box>
                </Box>
                <Divider sx={{mb: 3}}/>
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
                            <StyledTreeItem nodeId="1" status="fail" title="Manual tests at 20 Feb 2024 02:11"
                                            type="manual" tests="5 tests" numbers={[4, 1, 0]} time="20 Feb 2024 03:11">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="2" status="pass" title="Manual tests at 20 Feb 2024 03:11"
                                            type="manual" tests="5 tests" numbers={[5, 0, 0]} time="20 Feb 2024 04:11">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="3" status="pass" title="Manual tests at 20 Feb 2024 04:11"
                                            type="manual" tests="5 tests" numbers={[5, 0, 0]} time="20 Feb 2024 05:11">
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="4" status="fail" title="Manual tests at 20 Feb 2024 05:11"
                                            type="manual" tags={["@Windows"]} tests="5 tests" numbers={[3, 1, 1]}
                                            time="20 Feb 2024 06:11">
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
