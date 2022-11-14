import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ControlledAccordions from "./accordian";
import { useNavigate } from "react-router-dom";
import { capitalize } from "@mui/material";

export default function ClassInfo({ classLink, className }) {
    // const [classLink, setClassLink] = React.useState();
    const navigate = useNavigate();

    const navigateToClass = () => {
        // 👇️ navigate to /contacts
        navigate(classLink);
    };

    return (
        <Stack direction="column">
            <Button
                variant="contained"
                style={{
                    backgroundColor: "red",
                    color: "black",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                }}
                onClick={navigateToClass}
            >
                {className}
            </Button>
            <ControlledAccordions className={className} />
        </Stack>
    );
}
