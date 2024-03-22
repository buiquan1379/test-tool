import React from 'react';
import Box from "@mui/material/Box";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BarChartIcon from '@mui/icons-material/BarChart';
import {
    Chip,
    Divider, Tab,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableRow, Tabs
} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {deepPurple} from '@mui/material/colors';
import {TreeView} from "@mui/x-tree-view/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Avatar from "@mui/material/Avatar";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {pieArcLabelClasses, PieChart} from '@mui/x-charts/PieChart';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

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

const Custom1Button = styled(Button)({
    textTransform: "none",
    color: "#6b768c",
    backgroundColor: "#e0e0e0",
    "&:hover": {
        backgroundColor: "#d1d5db",
    },
    "&:active": {
        backgroundColor: "#e0e0e0",
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

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        // fontSize: 13,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    border: 0,
    '&:nth-of-type(odd)': {
        backgroundColor: "#f4f7ff",
    },
}));

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 18,
    borderRadius: 9,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#6b7280",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#10b981",
    },
}));

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', position: "relative"}}>
            <Box sx={{width: '100%'}}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <Typography variant="caption" color="white">{`${Math.round(
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
    [`& .${treeItemClasses.iconContainer}`]: {
        display: "none",
    },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const {
        status,
        title,
        content,
        type,
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

    let statusComponent = <Box component={CircleIcon} color="#9ca3af" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    if (status === "pass") {
        statusComponent =
            <Box component={CheckCircleIcon} color="#10b981" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    } else if (status === "fail") {
        statusComponent =
            <Box component={DoNotDisturbOnIcon} color="#ef4444" sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
    }

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{display: "flex", alignItems: "center", py: 0.5,}}>
                    <Box sx={{flexGrow: 1, mr: 2, py: 1, display: "flex"}}>
                        {statusComponent}
                        <Box component={ContentPasteIcon} color="#6b7280"
                             sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
                        <Typography variant="body1" mr={2} noWrap color="#6b7280"
                                    sx={{maxWidth: "15%", overflow: "hidden", textOverflow: "ellipsis"}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" color="black" sx={{mr: 2, my: "auto"}}>
                            {content}
                        </Typography>
                        <Chip label="m" color="warning" size="small"
                              sx={{my: "auto", p: 0, mr: 0.5, backgroundColor: "#f59e0b"}}/>
                        {listTags}
                    </Box>
                </Box>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

const getArcLabel = (params) => {
    if (params.value === 0) return '';
    const percent = params.value / 11;
    return `${(percent * 100).toFixed(1)}%`;
};

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

export default function ReportsContent(props) {
    const navigate = useNavigate();

    const [index, setIndex] = React.useState(0);

    const handleIndexChange = (event, newValue) => {
        setIndex(newValue);
    }

    const handleClose = () => {
        navigate("/reports")
    }

    return (
        <Box sx={{minWidth: "500px", display: "flex", flexDirection: "column", minHeight: "100vh"}}>
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
                    <CustomActiveButton variant="contained" sx={{mr: 2, px: 2, color: "white"}}
                                        startIcon={<BarChartIcon/>}>
                        Report
                    </CustomActiveButton>
                    <CustomButton variant="contained" sx={{mr: 2}}>
                        <MoreHorizIcon sx={{color: "#6b7280"}}/>
                    </CustomButton>
                    <CustomButton variant="contained" sx={{}} onClick={handleClose}>
                        <CloseIcon sx={{color: "red"}}/>
                    </CustomButton>
                </Box>
            </Box>
            <Divider/>
            <Box sx={{display: "flex", m: 3}}>
                <Typography variant="h6" sx={{display: "flex", my: "auto", ml: 1, fontWeight: "bold"}} color="inherit">
                    Manual tests at 20 Feb 2024 02:11
                </Typography>
            </Box>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box sx={{display: "flex", width: "100%", alignContent: "center", pl: 3}} justifyContent="center">
                    <PieChart
                        series={[
                            {
                                innerRadius: 40,
                                outerRadius: 100,
                                data: [
                                    {id: 0, value: 10, label: 'Passed', color: "#48bb78"},
                                    {id: 1, value: 1, label: 'Failed', color: "#e86264"},
                                    {id: 2, value: 0, label: 'Skipped', color: "#ecc94b"},
                                ],
                                arcLabel: getArcLabel,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontSize: 14,
                            },
                        }}
                        width={400}
                        height={220}
                    />
                </Box>
                <Box sx={{width: "100%", pr: 3}} justifyContent="center" textAlign="center">
                    <TableContainer>
                        <Table size="small" aria-label="customized table">
                            <TableBody>
                                <StyledTableRow key={"status"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Status
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell><Typography fontWeight="bold" color="#e86264">
                                        • Failed</Typography></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"duration"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Duration
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>220h 6m 32s</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"tests"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Tests
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>11</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"started"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Finished
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>Feb 29, 2024 6:17 AM</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"assigned"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Executed by
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell sx={{display: "flex"}}><Avatar sx={{
                                        width: "1.2rem",
                                        height: "1.2rem",
                                        mx: 1,
                                        bgcolor: deepPurple[500]
                                    }}>Q</Avatar>Bui Quan</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"created"}>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold" color="#6b768c">
                                            Created by
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell sx={{display: "flex"}}><Avatar sx={{
                                        width: "1.2rem",
                                        height: "1.2rem",
                                        mx: 1,
                                        bgcolor: deepPurple[500]
                                    }}>Q</Avatar>Bui Quan</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box>
                <Tabs variant="fullWidth" value={index} onChange={handleIndexChange} sx={{my: 1, mx: 3}} scrollButtons
                      aria-label="scrollable force tabs example">
                    <MTab label="TEST" iconPosition="start"/>
                    <MTab label="SUITES" iconPosition="start"/>
                    <MTab label="DEFECTS" iconPosition="start"/>
                </Tabs>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <CustomTabPanel value={index} index={0}>
                    <Box sx={{}}>
                        <Box display="flex" mb={1}>
                            <Custom1Button variant="contained" disableElevation sx={{mr: 2, px: 2}}>
                                <Typography color="#37474F">
                                    Passed
                                </Typography>
                                <Typography color="#48bb78" ml={0.5}>
                                    10
                                </Typography>
                            </Custom1Button>
                            <Custom1Button variant="contained" disableElevation sx={{mr: 2, px: 2}}>
                                <Typography color="#37474F">
                                    Failed
                                </Typography>
                                <Typography color="#e86264" ml={0.5}>
                                    1
                                </Typography>
                            </Custom1Button>
                            <Custom1Button variant="contained" disableElevation sx={{mr: 2, px: 2}}>
                                <Typography color="#37474F">
                                    Skipped
                                </Typography>
                                <Typography color="#F9A825" ml={0.5}>
                                    0
                                </Typography>
                            </Custom1Button>
                            <TextField id="outlined-basic" variant="outlined" size="small" sx={{ml: 1}}
                                       placeholder="Search"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <SearchIcon/>
                                               </InputAdornment>
                                           ),
                                       }}/>
                        </Box>
                        <Box display="flex" mb={1}>
                            <Typography variant="body1" mr={1}>
                                sort by:
                            </Typography>
                            <Link variant="body1" component="button" color="inherit">
                                suite
                            </Link>
                            <Typography variant="body1" mx={1}>
                                /
                            </Typography>
                            <Link variant="body1" component="button" color="inherit">
                                testcase
                            </Link>
                            <Typography variant="body1" mx={1}>
                                /
                            </Typography>
                            <Link variant="body1" component="button" color="inherit">
                                failure
                            </Link>
                        </Box>
                        <Box flexGrow={1} sx={{pb: 3}}>
                            <TreeView
                                aria-label="manual"
                                defaultCollapseIcon={<ArrowDropDownIcon/>}
                                defaultExpandIcon={<ArrowRightIcon/>}
                                defaultEndIcon={<div style={{width: 24}}/>}
                                sx={{flexGrow: 1, overflowY: "auto"}}>
                                <StyledTreeItem nodeId="1" title="Manual tests for TodoMVC"
                                                content="filter all active tasks"
                                                status="pass" tags={["@filter", "@bulk", "@action", "@list"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="2" title="Manual tests for TodoMVC" content="create new task"
                                                status="pass"
                                                tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="3" title="Manual tests for TodoMVC"
                                                content="delete created task"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="4" title="Manual tests for TodoMVC"
                                                content="mark created task as completed"
                                                status="fail" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="5" title="Manual tests for TodoMVC" content="edit created task"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="6" title="Manual tests for TodoMVC" content="delete two tasks"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="7" title="Manual tests for TodoMVC"
                                                content="filter all completed tasks"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="8" title="Manual tests for TodoMVC"
                                                content="check active tasks statistics"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="9" title="Manual tests for TodoMVC"
                                                content="mark all tasks as completed"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="10" title="Manual tests for TodoMVC"
                                                content="test input field for xss"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                                <StyledTreeItem nodeId="11" title="Manual tests for TodoMVC"
                                                content="mark all tasks as active"
                                                status="pass" tags={["@action", "@task"]}>
                                </StyledTreeItem>
                            </TreeView>
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={index} index={1}>
                    <Box sx={{color: "blue", height: "100%"}}>
                        <Typography>
                            SUITES
                        </Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={index} index={2}>
                    <Box sx={{color: "blue"}}>
                        <Typography>
                            DEFECTS
                        </Typography>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
