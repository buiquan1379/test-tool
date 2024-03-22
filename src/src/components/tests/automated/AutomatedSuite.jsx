import React from 'react';
import Box from "@mui/material/Box";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import {Divider, Tab, Tabs} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CodeIcon from '@mui/icons-material/Code';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestoreIcon from "@mui/icons-material/Restore";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ReactGherkinEditor from '@smartbear/react-gherkin-editor'

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

export default function AutomatedSuite(props) {
    const handleClose = props.handleClose ? props.handleClose : (event) => {};
    const handleEdit = props.handleEdit ? props.handleEdit : (event) => {};
    const gherkin = props.gherkin ? props.gherkin : `
Feature: Selection unsuccessful interaction
As a user that selects a beverage that misses ingredients
then the machine should not brew that beverage
because something does not come from nothing

Background:
Given that the machine is plugged in


Scenario Outline: user buys a beverage with missing ingredients
Given that the user has selected <beverage>
And there is not enough <ingredient>
When the user presses the startbutton
Then the machine does not brew
And displays: <errormessage>

Examples:
    |         beverage | ingredient |                                  errormessage |
    | kaffesockermjolk |      kaffe |                   'Not enough coffee, refill' |
    |      kaffesocker |     socker |                    'Not enough sugar, refill' |
    |       kaffemjolk |      mjolk |                     'Not enough milk, refill' |
    |            kaffe |     vatten | 'No water supply connected, call maintenance' |
    |               te |       cups |                        'No more cups, refill' |
    |          choklad |    choklad |                'Not enough chocolate, refill' |
    |            latte |      mjolk |                     'Not enough milk, refill' |
    |            kanna |      kaffe |                   'Not enough coffee, refill' |


Scenario: the user tries to buy a beverage when the catch-spillage compartment is full
Given that the catch-spill compartment is full
And the user has selected a beverage
When the user presses the startbutton
Then no beverage gets brewed
And an error message is displayed: 'Empty the spillage compartment'

    Scenario: User presses the cancelbutton after three seconds from the moment the machine started brewing
        Given that the user has pressed startbutton
        When the user presses the cancelbutton
        And it has been more than three seconds since machine started brewing
        Then the machine continues brewing
        And the user gets the beverage

Scenario: The user unplugs the water during the brewing process
    Given that the user has selected a beverage
    And has pressed the startbutton
    When the user disconnects the water
    Then an error appears

Scenario: User presses two buttons at the same time
Given that the machine is plugged in
When the user presses two buttons at the same time
Then only one of them should light up (Prio list: coffee>latte>chocolate>te>milk>sugar>kanna)
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
                        Automated tests
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
            <Tabs variant="fullWidth" value={rightTabIndex} onChange={handleRightIndexChange} sx={{mx: 3, my: 2}}
                  scrollButtons aria-label="scrollable force tabs example">
                <MTab icon={<CodeIcon/>} label="FEATURE CODE" iconPosition="start"/>
                <MTab icon={<PlayArrowIcon/>} label="RUNS" iconPosition="start"/>
                <MTab icon={<RestoreIcon/>} label="HISTORY" iconPosition="start"/>
            </Tabs>
            <Box sx={{flexGrow: 1}}>
                <CustomTabPanel value={rightTabIndex} index={0}>
                    <Box>
                        <ReactGherkinEditor initialValue={gherkin} theme="cucumber"/>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={rightTabIndex} index={1}>
                    <Box sx={{color: "blue"}}>
                        <Typography>
                            RUNS
                        </Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={rightTabIndex} index={2}>
                    <Box sx={{color: "blue"}}>
                        <Typography>
                            HISTORY
                        </Typography>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
