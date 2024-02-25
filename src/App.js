import React from "react";
import {Route, Routes} from "react-router-dom";
import TestsPage from "./components/tests/Tests";
import RunsPage from "./components/runs/Runs";
import PlansPage from "./components/plans/Plans";
import Home from "./components/Home";
import SignIn from "./components/Pages/SignIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/tests" element={<TestsPage/>}/>
            <Route path="/runs" element={<RunsPage/>}/>
            <Route path="/plans" element={<PlansPage/>}/>
        </Routes>
    );
}

export default App;
