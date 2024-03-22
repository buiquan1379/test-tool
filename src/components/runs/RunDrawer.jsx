import React from 'react';
import Box from "@mui/material/Box";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import {
    Chip,
    CircularProgress,
    Divider,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableRow
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
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
                <Box sx={{display: "flex", alignItems: "center", p: 0.5, pr: 0,}}>
                    <Box sx={{flexGrow: 1, mr: 2, py: 1, display: "flex"}}>
                        {statusComponent}
                        <Box component={ContentPasteIcon} color="#6b7280"
                             sx={{mr: 1, my: "auto", fontSize: "inherit"}}/>
                        <Typography variant="body1" mr={2} noWrap color="#6b7280"
                                    sx={{width: "15%", overflow: "hidden", textOverflow: "ellipsis"}}>
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

export default function RunDrawer(props) {
    const navigate = useNavigate();
    const handleClose = props.handleClose ? props.handleClose : (event) => {};
    const handleEdit = props.handleEdit ? props.handleEdit : (event) => {};

    function handleContinue(event) {
        navigate("/runs/1");
    }

    return (
        <Box sx={{minWidth: "500px", width: "45vw", display: "flex", flexDirection: "column"}}>
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
                                        startIcon={<PlayArrowIcon/>}
                                        onClick={handleContinue}>Continue</CustomActiveButton>
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
                <Typography variant="h6" sx={{display: "flex", my: "auto", ml: 1, fontWeight: "bold"}} color="inherit">
                    {props.title ? props.title : "Test title"}
                </Typography>
            </Box>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box sx={{width: "100%", alignContent: "center"}} justifyContent="center">
                    <Box display="flex" justifyContent="center" mb={1}>
                        <CircularProgress size="1rem" sx={{mr: 1, my: "auto"}}/>
                        <Typography variant="h6" fontWeight="bold">Running</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
                        <Typography variant="body1">Running by </Typography>
                        <Avatar sx={{width: "1.5rem", height: "1.5rem", mx: 1, bgcolor: deepPurple[500]}}>Q</Avatar>
                        <Typography variant="body1">Bui Quan</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
                        <Typography variant="body1">Do you want to continue executing these tests?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" mb={1}>
                        <CustomActiveButton sx={{color: "white", px: 3}}
                                            onClick={handleContinue}>Continue</CustomActiveButton>
                    </Box>
                </Box>
                <Box sx={{width: "100%", pr: 3}} justifyContent="center" textAlign="center">
                    <TableContainer>
                        <Table size="small" aria-label="customized table">
                            <TableBody>
                                <StyledTableRow key={"status"}>
                                    <StyledTableCell component="th" scope="row">
                                        Status
                                    </StyledTableCell>
                                    <StyledTableCell><Typography fontWeight="bold">•
                                        Running</Typography></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"tests"}>
                                    <StyledTableCell component="th" scope="row">
                                        Tests
                                    </StyledTableCell>
                                    <StyledTableCell>11 (36% completed)</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"started"}>
                                    <StyledTableCell component="th" scope="row">
                                        Started
                                    </StyledTableCell>
                                    <StyledTableCell>Feb 20, 2024 2:11 AM</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"updated"}>
                                    <StyledTableCell component="th" scope="row">
                                        Updated
                                    </StyledTableCell>
                                    <StyledTableCell>Feb 20, 2024 2:11 AM</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"assigned"}>
                                    <StyledTableCell component="th" scope="row">
                                        Assigned to
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
                                        Created by
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
            <Box sx={{p: 3}}>
                <Box sx={{width: "100%"}}>
                    <LinearProgressWithLabel sx={{width: "100%"}} value={36}/>
                </Box>
            </Box>
            <Box display="flex" px={3} mb={2}>
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
                    <StyledTreeItem nodeId="1" title="Manual tests for TodoMVC" content="filter all active tasks"
                                    status="pass" tags={["@filter", "@bulk", "@action", "@list"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="2" title="Manual tests for TodoMVC" content="create new task" status="pass"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="3" title="Manual tests for TodoMVC" content="delete created task"
                                    status="pass" tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="4" title="Manual tests for TodoMVC" content="mark created task as completed"
                                    status="fail" tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="5" title="Manual tests for TodoMVC" content="edit created task"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="6" title="Manual tests for TodoMVC" content="delete two tasks"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="7" title="Manual tests for TodoMVC" content="filter all completed tasks"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="8" title="Manual tests for TodoMVC" content="check active tasks statistics"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="9" title="Manual tests for TodoMVC" content="mark all tasks as completed"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="10" title="Manual tests for TodoMVC" content="test input field for xss"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="11" title="Manual tests for TodoMVC" content="mark all tasks as active"
                                    tags={["@action", "@task"]}>
                    </StyledTreeItem>
                </TreeView>
            </Box>
        </Box>
    );
}
