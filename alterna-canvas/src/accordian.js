import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import pagesData from "./metadata/unified.json";
import chat from "./metadata/chat_data.json";

import announcementsData from "./metadata/unifiedAnnouncements.json";
import ChatModule from "./Chat/chatModule";

export default function ControlledAccordions({ className }) {

    const [expanded, setExpanded] = React.useState(false);
    const classData = pagesData[className]['data'];
    const announcements = announcementsData[className]['data'];

    let chatdata = chat[className];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function dateSort(a, b) {
        return new Date(b.post_date) - new Date(a.post_date); // descending
    };

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0}}>
                        Assignments
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {classData.map((item, i) => {
                        return (
                            item.type === "assignment" && (
                                <ul key={i}>
                                    <Typography>{item.title}</Typography>
                                    <Typography sx={{color: 'text.secondary' }}>Due: {item.end_or_due}</Typography>
                                </ul>
                            )
                        );
                    })}
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0}}>
                        Announcements
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {announcements.map((item, i) => {
                        announcements.sort(dateSort)
                        return (
                            <ul key={i}>
                                <Typography>{item.title}</Typography>
                                <Typography>{item.content}</Typography>
                                <Typography sx={{color: 'text.secondary' }}>Posted: {item.post_date}</Typography>
                            </ul>
                        )
                    })}
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: "33%", flexShrink: 0}}>
                        Chat
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ChatModule data={chatdata} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
