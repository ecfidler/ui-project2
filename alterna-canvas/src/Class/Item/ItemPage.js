import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";

import {
    Typography,
    Box,
    Button,
    Stack,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";

import { Preview, UploadFile, Check, DoNotDisturb } from "@mui/icons-material/";

import data from "../../metadata/unified.json";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

import DownloadButton from "./DownloadButton";

function ViewButton({ path, itemName }) {
    const [open, setOpen] = React.useState(false);
    // const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = () => {
        setOpen(true);
        // setScroll("paper");
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                size="large"
                onClick={handleClickOpen}
                startIcon={<Preview />}
            >
                Preview Item
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                open={open}
                onClose={handleClose}
                scroll={"paper"}
            >
                <DialogTitle>Previewing "{itemName}"</DialogTitle>
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
            </Dialog>
        </>
    );
}

function SubmitAssignmentButton({ onSubmission }) {
    const [open, setOpen] = React.useState(false);
    const [attached, setAttached] = React.useState(false);
    // const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = () => {
        setOpen(true);
        // setScroll("paper");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (attached) {
            onSubmission();
            setOpen(false);
        }
    };

    const handleAttach = () => {
        setAttached(true);
    };

    return (
        <>
            <Button
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
                startIcon={<UploadFile />}
            >
                Submit
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                scroll={"paper"}
            >
                <DialogTitle>Submit Assignment</DialogTitle>
                <DialogContent>
                    <input type="file" onChange={handleAttach}></input>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSubmit}
                        startIcon={<UploadFile />}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

function SubmittedStatus({ status, late = false }) {
    if (status) {
        return (
            <Typography
                sx={{
                    verticalAlign: "baseline",
                    display: "inline-flex",
                    color: "green",
                }}
            >
                Submitted <Check fontSize="small" />
            </Typography>
        );
    } else if (status && late) {
        return (
            <Typography
                sx={{
                    verticalAlign: "baseline",
                    display: "inline-flex",
                    color: "orange",
                }}
            >
                Submitted <Check fontSize="small" color="orange" /> (Late)
            </Typography>
        );
    } else {
        return (
            <Typography
                sx={{
                    verticalAlign: "baseline",
                    display: "inline-flex",
                    color: "red",
                }}
            >
                Submitted <DoNotDisturb fontSize="small" />
            </Typography>
        );
    }
}

export default function ItemPage() {
    const { name, index } = useParams();
    const navigate = useNavigate();

    const itemData = data[name].data[index];
    const url = `${process.env.PUBLIC_URL}/course-data/${name}/${itemData.folder}/${itemData.name}`;

    const [submitted, setSubmitted] = React.useState(
        itemData?.submitted ? true : false
    );

    function backButton() {
        navigate(-1);
    }

    function handleSubmission() {
        setSubmitted(true);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: `60%`, margin: `2em auto` }}>
                    <Button
                        sx={{ margin: `0 auto 1em auto` }}
                        variant="contained"
                        onClick={backButton}
                    >
                        Back to Class
                    </Button>
                    <Box
                        sx={{
                            padding: `1em`,
                            boxShadow: `0px 0px 10px`,
                        }}
                    >
                        {itemData.type === "assignment" && (
                            <>
                                <Typography variant="h4">
                                    {itemData.title}
                                </Typography>
                                <hr style={{ color: "#e00122" }} />
                                <Typography>
                                    Assigned: {itemData.start_or_posted}
                                </Typography>
                                <Typography>
                                    Due: {itemData.end_or_due} 11:59PM
                                </Typography>
                                <SubmittedStatus status={submitted} />
                                <Typography>
                                    Points: {itemData.points}
                                </Typography>
                                <Stack
                                    direction={{ sm: "column", md: "row" }}
                                    spacing={{ xs: 2, sm: 1 }}
                                >
                                    <ViewButton
                                        path={url}
                                        itemName={itemData.title}
                                    />
                                    <DownloadButton
                                        path={url}
                                        fileName={itemData.name}
                                    />
                                    <SubmitAssignmentButton
                                        onSubmission={handleSubmission}
                                    />
                                </Stack>
                            </>
                        )}
                        {(itemData.type === "tutorial" ||
                            itemData.type === "inclass") && (
                            <>
                                <Typography variant="h4">
                                    {itemData.title}
                                </Typography>
                                <hr style={{ color: "#e00122" }} />
                                <Typography>
                                    Assigned: {itemData.start_or_posted}
                                </Typography>
                                <Typography>
                                    Due: {itemData.end_or_due} 11:59PM
                                </Typography>
                                <Typography>
                                    Points: {itemData.points} (Participation)
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <ViewButton
                                        path={url}
                                        itemName={itemData.title}
                                    />
                                    <DownloadButton
                                        path={url}
                                        fileName={itemData.name}
                                    />
                                </Stack>
                            </>
                        )}
                        {itemData.type === "lecture" && (
                            <>
                                <Typography variant="h4">
                                    Lecture - {itemData.title}
                                </Typography>
                                <hr style={{ color: "#e00122" }} />
                                <Typography>
                                    Date: {itemData.start_or_posted}
                                </Typography>
                                <Typography>
                                    Points: {itemData.points} (Participation)
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <DownloadButton
                                        path={url}
                                        fileName={itemData.name}
                                    />
                                </Stack>
                            </>
                        )}
                        {itemData.type === "na" && (
                            <>
                                <Typography variant="h4">
                                    {itemData.title}
                                </Typography>
                                <hr style={{ color: "#e00122" }} />
                                <Typography>
                                    Assigned: {itemData.start_or_posted}
                                </Typography>
                                <Typography>
                                    Due: {itemData.end_or_due} 11:59PM
                                </Typography>
                                <Stack
                                    direction={{ sm: "column", md: "row" }}
                                    spacing={{ xs: 2, sm: 1 }}
                                >
                                    <ViewButton
                                        path={url}
                                        itemName={itemData.title}
                                    />
                                    <DownloadButton
                                        path={url}
                                        fileName={itemData.name}
                                    />
                                    <SubmitAssignmentButton
                                        onSubmission={handleSubmission}
                                    />
                                </Stack>
                            </>
                        )}
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}
