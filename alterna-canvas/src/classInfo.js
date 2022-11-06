import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ControlledAccordions from "./accordian";
import { useNavigate } from "react-router-dom";

export default function ClassInfo({ classLink }) {
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
                }}
                onClick={navigateToClass}
            >
                Success
            </Button>
            <ControlledAccordions />
        </Stack>
    );
}
