import {useEffect, useState} from "react";
import Feed from "./Feed";
import Navbar from "./Navbar";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const [set, setMenu] = useState(false)

    useEffect(() => {
        let user = localStorage.getItem("user");
        if (!user) {
            navigate("/signin");
        }
    }, []);

    return (
        <Box>
            <Navbar setMenu={setMenu} set={set}/>
            <Feed/>
        </Box>
    );
}

export default App;