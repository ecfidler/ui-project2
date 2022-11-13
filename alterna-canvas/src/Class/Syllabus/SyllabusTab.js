import * as React from "react";

import { Typography, Box, Stack } from "@mui/material";

import DownloadButton from "../Item/DownloadButton";
import QuestionButtons from "../Questions/QuestionButtons";

export default function SyllabusTab({ className, path, data }) {
    return (
        <>
            <Typography
                sx={{
                    fontSize: "1.5em",
                }}
            >
                Syllabus
            </Typography>
            <hr style={{ color: "#e00122" }} />

            <Box sx={{ padding: `1em`, height: `600px` }}>
                <iframe
                    title="filePreview"
                    src={path}
                    style={{
                        width: "1px",
                        minWidth: "100%",
                        height: `100%`,
                    }}
                />
            </Box>
            <Stack
                sx={{ marginLeft: "1em" }}
                direction={{ sm: "column", md: "row" }}
                spacing={{ xs: 2, sm: 1 }}
            >
                <DownloadButton
                    path={path}
                    fileName={`${className}_syllabus.html`}
                />
                <QuestionButtons questionData={data.questions} />
            </Stack>
        </>
    );
}
