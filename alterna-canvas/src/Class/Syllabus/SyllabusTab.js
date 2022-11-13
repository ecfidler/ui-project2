import * as React from "react";

import { Typography, Box } from "@mui/material";

import DownloadButton from "../Item/DownloadButton";

export default function SyllabusTab({ className, path }) {
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
            <DownloadButton
                path={path}
                fileName={`${className}_syllabus.html`}
            />
            <Box sx={{ padding: `1em`, height: `750px` }}>
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
        </>
    );
}
