import * as React from "react";

import { useParams } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab";

import data from "../metadata/unified.json";

function ClassPage() {
    const [tabValue, setValue] = React.useState(0);
    const { name } = useParams();
    const classData = data[name];

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="class-page">
            <h1>Class page: {name}</h1>
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={tabValue}
                onChange={handleTabChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab label="Assignments" value="assignments" />
                <Tab label="Announcements" value="annoucements" />
                <Tab label="Grades" value="grades" />
                <Tab label="Course Materials" value="course-materials" />
                <Tab label="Syllabus" value="syllabus" />
                <Tab label="Zoom" value="zoom" />
            </Tabs>
        </div>
    );
}

export default ClassPage;

/* List all assignments code example
{classData.map((item, i) => {
    return (
        item.type === "assignment" && (
            <tr key={i}>
                <td>{item.title}</td>
                <td>Due: {item.end_or_due}</td>
            </tr>
        )
    );
})}

*/
