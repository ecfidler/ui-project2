import * as React from "react";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AnnouncementsTab({ data }) {
    const announcements = data.sort((a, b) => {
        return Date.parse(a.post_date) - Date.parse(b.post_date);
    });

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
                            <Typography>{item.post_date}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Posted: {item.post_date}</Typography>
                            <Typography>{item.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}
