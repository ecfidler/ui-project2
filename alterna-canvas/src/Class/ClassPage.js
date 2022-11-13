import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { Box, Tabs, Tab, Button } from "@mui/material";

import data from "../metadata/unified.json";

import { TabPanel, a11yProps } from "./TabPanel";
import AssignmentsTab from "./Assignments/AssignmentsTab";
import AnnouncementsTab from "./Announcements/AnnouncementsTab";
import MaterialsTab from "./Materials/MaterialsTab";
import SyllabusTab from "./Syllabus/SyllabusTab";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

function ClassPage() {
    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);
    const { name } = useParams();
    const classData = data[name];
    const syllabusPath = `${process.env.PUBLIC_URL}/course-data/${name}/course_info/syllabus.html`;

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    function backButton() {
        navigate(-1);
    }

    return (
        <div className="class-page" style={{ margin: "0 5% 0 5%" }}>
            <ThemeProvider theme={theme}>
                <Button
                    sx={{ marginTop: `1em` }}
                    variant="contained"
                    onClick={backButton}
                >
                    Back to Dashboard
                </Button>
                <h1>{classData.className}</h1>

                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Tabs
                        orientation="vertical"
                        variant="standard"
                        value={value}
                        onChange={handleTabChange}
                        aria-label="Class Sections Tabs"
                        sx={{
                            borderRight: 1,
                            borderColor: "divider",
                            width: `16%`,
                        }}
                    >
                        <Tab label="Assignments" {...a11yProps(0)} />
                        <Tab label="Announcements" {...a11yProps(1)} />
                        <Tab label="Grades" {...a11yProps(2)} />
                        <Tab label="Course Materials" {...a11yProps(3)} />
                        <Tab label="Syllabus" {...a11yProps(4)} />
                        <Tab label="Zoom" {...a11yProps(5)} />
                    </Tabs>
                    <Box sx={{ width: `80%` }}>
                        <TabPanel value={value} index={0}>
                            <AssignmentsTab data={classData.data} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <AnnouncementsTab data={classData.data} />
                        </TabPanel>
                        <TabPanel value={value} index={2}></TabPanel>
                        <TabPanel value={value} index={3}>
                            <MaterialsTab data={classData.data} />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <SyllabusTab
                                className={classData.name}
                                path={syllabusPath}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={5}></TabPanel>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default ClassPage;
