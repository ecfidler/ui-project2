import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function AssignmentsTab({ data }) {
    const assignments = data.filter((item) => item.type === "assignment");
    const date = new Date("10/13/22");

    function howSoonDue(dueDateString) {
        const dueDate = new Date(dueDateString);
        console.log(dueDate);
        console.log(date);

        return "text.secondary";
    }

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Typography
                    sx={{ width: "40%", flexShrink: 0, display: "flex" }}
                    variant="h5"
                >
                    Assignment
                </Typography>
                <Typography sx={{ display: "inline" }} variant="h5">
                    Due-Date
                </Typography>
            </Box>
            <hr style={{ color: "#e00122" }} />
            {assignments.map((item, i) => {
                return (
                    <Accordion key={i}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
                            <Typography>Points: {item.points}</Typography>
                            <Typography gutterBottom="true">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            <Button variant="outlined">View Assignment</Button>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}
