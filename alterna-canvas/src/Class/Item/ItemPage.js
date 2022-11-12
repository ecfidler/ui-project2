import * as React from "react";

import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContentText from "@mui/material/DialogContentText";

import DownloadIcon from "@mui/icons-material/Download";
import PreviewIcon from "@mui/icons-material/Preview";

import data from "../../metadata/unified.json";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

import { useNavigate } from "react-router-dom";

function DownloadButton({ path, fileName }) {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = fileName;
        link.href = path;
        link.click();
        console.log(link.href);
    };
    // console.log(path);
    return (
        <Button
            variant="contained"
            size="large"
            onClick={onDownload}
            startIcon={<DownloadIcon />}
        >
            Download {fileName}
        </Button>
    );
}

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
                startIcon={<PreviewIcon />}
            >
                Preview Item
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                open={open}
                onClose={handleClose}
                scroll={"paper"}
            >
                <DialogTitle>Previewing "{itemName}"</DialogTitle>
                <DialogContent> {path} asdf</DialogContent>
                <Box sx={{ padding: `1em`, height: `500px` }}>
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

export default function ItemPage() {
    const { name, index } = useParams();
    const navigate = useNavigate();

    const itemData = data[name].data[index];
    const url = `${process.env.PUBLIC_URL}/course-data/${name}/${itemData.folder}/${itemData.name}`;

    function backButton() {
        navigate(-1);
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
                        {(itemData.type === "assignment" ||
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
                                    Points: {itemData.points}
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
                        {(itemData.type === "lecture" ||
                            itemData.type === "tutorial") && (
                            <>
                                <Typography>File</Typography>
                            </>
                        )}
                        {itemData.type === "na" && (
                            <>
                                <Typography>Tutorial</Typography>
                            </>
                        )}
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}
