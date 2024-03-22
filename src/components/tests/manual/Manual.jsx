import React from "react";
import ManualView from "./ManualView";
import MarkdownEdit from "../MarkdownEdit";
import Box from "@mui/material/Box";

export default function Manual(props) {

    const handleClose = props.handleClose ? props.handleClose : (event) => {};
    let markdownContent = `### Steps
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
`;

    const handleEdit = (event) => {
        console.log("Edit clicked");
        setComponent(
            <MarkdownEdit title={"Edit Test"} markdown={markdownContent} handleCancel={handleCancel}
                          handleSave={handleSave}/>);
    }

    const handleCancel = (event) => {
        console.log("Cancel clicked");
        setComponent(<ManualView title={props.title} markdown={markdownContent}
                                 handleClose={handleClose} handleEdit={handleEdit}/>);
    }

    const handleSave = (event, value) => {
        console.log("Save clicked");
        markdownContent = value;
        setComponent(<ManualView title={props.title} markdown={markdownContent}
                                 handleClose={handleClose} handleEdit={handleEdit}/>);
    }

    const defaultComponent = <ManualView title={props.title} markdown={markdownContent}
                                         handleClose={handleClose} handleEdit={handleEdit}/>;
    const [component, setComponent] = React.useState(defaultComponent);

    return (
        <Box sx={{height: "100%"}}>
            {component}
        </Box>
    );
}
