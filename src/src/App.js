import React from "react";
import {Route, Routes} from "react-router-dom";
import TestsPage from "./components/tests/Tests";
import RunsPage from "./components/runs/Runs";
import PlansPage from "./components/plans/Plans";
import Home from "./components/Home";
import SignIn from "./components/pages/SignIn";
import RunPage from "./components/runs/Run";
import ReportsPage from "./components/reports/Reports";
import APITestsPage from "./components/api-tests/APITests";
import ImportPage from "./components/import/Import";
import ProfilePage from "./components/profile/Profile";
import MembersPage from "./components/members/Members";
import ReportPage from "./components/reports/Report";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#5046ef",
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/tests" element={<TestsPage/>}/>
                <Route path="/runs" element={<RunsPage/>}/>
                <Route path="/runs/:id" element={<RunPage/>}/>
                <Route path="/plans" element={<PlansPage/>}/>
                <Route path="/reports" element={<ReportsPage/>}/>
                <Route path="/reports/:id" element={<ReportPage/>}/>
                <Route path="/api-tests" element={<APITestsPage/>}/>
                <Route path="/import" element={<ImportPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/members" element={<MembersPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
