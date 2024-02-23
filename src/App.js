import React from "react";
import {Route, Routes} from "react-router-dom";
import TestsPage from "./components/tests/Tests";
import RunsPage from "./components/runs/Runs";
import PlansPage from "./components/plans/Plans";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestsPage/>}/>
      <Route path="/tests" element={<TestsPage/>}/>
      <Route path="/runs" element={<RunsPage/>}/>
      <Route path="/plans" element={<PlansPage/>}/>
    </Routes>
  );
}

export default App;