import * as React from "react";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Button,
} from "@mui/material/";

import { ExpandMore } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function AssignmentsTab({ data }) {
    const navigate = useNavigate();

    const assignments = data
        .filter((item) => item.type === "assignment")
        .sort((a, b) => {
            return Date.parse(a.end_or_due) - Date.parse(b.end_or_due);
        });
    assignments.forEach((a) => {
        a.index = data.indexOf(a);
    });
    const date = new Date("9/15/22");

    function howSoonDue(dueDateString) {
        const dueDate = new Date(dueDateString);
        const msTilldue = dueDate - date;
        // all these calculations are in ms, sorry
        if (msTilldue < 86400000) {
            return "red";
        }
        if (msTilldue < 86400000 * 2) {
            return "orange";
        } else {
            return "green";
        }
    }

    function viewItem(idx) {
        navigate(`./item/${idx}`);
        console.log("handled");
    }

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Typography
                    sx={{
                        width: "40%",
                        flexShrink: 0,
                        display: "flex",
                        fontSize: "1.5em",
                    }}
                >
                    Assignment
                </Typography>
                <Typography sx={{ display: "inline", fontSize: "1.5em" }}>
                    Due-Date
                </Typography>
            </Box>
            <hr style={{ color: "#e00122" }} />
            {assignments.map((item, i) => {
                return (
                    <Accordion key={i}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography sx={{ width: "41%", flexShrink: 0 }}>
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{ color: howSoonDue(item.end_or_due) }}
                            >
                                {item.end_or_due}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Assigned: {item.start_or_posted}
                            </Typography>
                            <Typography>
                                Due: {item.end_or_due} 11:59PM
                            </Typography>
                            <Typography>Points: {item.points}</Typography>
                            <Button
                                variant="outlined"
                                onClick={() => viewItem(item.index)}
                            >
                                View Assignment
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}
