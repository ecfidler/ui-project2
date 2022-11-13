import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function MaterialsTab({ data }) {
    const navigate = useNavigate();
    const types = [
        "assignments",
        "tutorial",
        "inclass",
        "lecture",
        "na",
        "module",
    ];

    const materials = data
        .filter((item) => types.includes(item.type))
        .sort((a, b) => {
            return (
                Date.parse(a.start_or_posted) - Date.parse(b.start_or_posted)
            );
        });
    materials.forEach((a) => {
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
                    Material
                </Typography>
                <Typography sx={{ display: "inline", fontSize: "1.5em" }}>
                    Type
                </Typography>
            </Box>
            <hr style={{ color: "#e00122" }} />
            <Box sx={{ maxHeight: "600px", overflowY: "auto" }}>
                {materials.map((item, i) => {
                    if (item.type === "module") {
                        return (
                            <Accordion key={i} disabled={true}>
                                <AccordionSummary>
                                    <Typography
                                        sx={{ width: "40%", flexShrink: 0 }}
                                    >
                                        {item.name} - {item.title}
                                    </Typography>
                                    <Typography>Module</Typography>
                                </AccordionSummary>
                            </Accordion>
                        );
                    }
                    return (
                        <Accordion key={i}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography
                                    sx={{ width: "41%", flexShrink: 0 }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography>{item.type}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Posted: {item.start_or_posted}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    onClick={() => viewItem(item.index)}
                                >
                                    View Item Page
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>
        </>
    );
}
