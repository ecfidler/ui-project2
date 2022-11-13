import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function AnnouncementsTab({ data }) {
    const navigate = useNavigate();

    const announcements = data
        .filter((item) => item.type === "announcement")
        .sort((a, b) => {
            return (
                Date.parse(a.start_or_posted) - Date.parse(b.start_or_posted)
            );
        });
    announcements.forEach((a) => {
        a.index = data.indexOf(a);
    });

    function viewItem(idx) {
        navigate(`./item/${idx}`);
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
                    Announcement
                </Typography>
                <Typography sx={{ display: "inline", fontSize: "1.5em" }}>
                    Posted
                </Typography>
            </Box>
            <hr style={{ color: "#e00122" }} />
            {announcements.map((item, i) => {
                return (
                    <Accordion key={i}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ width: "41%", flexShrink: 0 }}>
                                {item.title}
                            </Typography>
                            <Typography>{item.start_or_posted}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Posted: {item.start_or_posted}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => viewItem(item.index)}
                            >
                                View Announcement
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}
