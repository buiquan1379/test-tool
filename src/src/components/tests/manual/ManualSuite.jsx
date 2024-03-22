import React from "react";
import Box from "@mui/material/Box";
import ManualSuiteView from "./ManualSuiteView";
import MarkdownEdit from "../MarkdownEdit";

export default function ManualSuite(props) {

    const handleClose = props.handleClose ? props.handleClose : (event) => {};
    let markdownContent = `## Introduction
1. Developers these days are spoiled with choice when it comes to 
**selecting** an **MV framework** for structuring and organizing their JavaScript web apps.
Backbone, Ember, AngularJS… the list of new and stable solutions continues to grow, 
but just how do you decide on which to use in a sea of so many options?

2. To help solve this problem, we created **TodoMVC** - a project which offers 
the same _Todo application_ implemented using MV concepts in most of 
the popular JavaScript MV* frameworks of today.

### Pre-Requirements
- We will test TodoMVC application.
- Here we will describe application requirements.
- You can also edit this description with markdown text to try it out.
`;

    const handleEdit = (event) => {
        console.log("Edit clicked");
        setComponent(
            <MarkdownEdit title={"Edit Suite"} markdown={markdownContent} handleCancel={handleCancel}
                            handleSave={handleSave}/>);
    }

    const handleCancel = (event) => {
        console.log("Cancel clicked");
        setComponent(<ManualSuiteView title={props.title} markdown={markdownContent}
                                     handleClose={handleClose} handleEdit={handleEdit}/>);
    }

    const handleSave = (event, value) => {
        console.log("Save clicked");
        markdownContent = value;
        setComponent(<ManualSuiteView title={props.title} markdown={markdownContent}
                                     handleClose={handleClose} handleEdit={handleEdit}/>);
    }

    const defaultComponent = <ManualSuiteView title={props.title} markdown={markdownContent}
                                             handleClose={handleClose} handleEdit={handleEdit}/>;
    const [component, setComponent] = React.useState(defaultComponent);

    return (
        <Box sx={{height: "100%"}}>
            {component}
        </Box>
    );
}
