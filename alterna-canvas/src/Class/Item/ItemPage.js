import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DownloadIcon from "@mui/icons-material/Download";

import data from "../../metadata/unified.json";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

// import "../../course-data/computer_graphics/assignments/";

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
                            border: `4px solid gray`,
                            borderRadius: `6px`,
                            padding: `1em`,
                            boxShadow: `2px 2px 8px`,
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
                                <DownloadButton
                                    path={url}
                                    fileName={itemData.name}
                                />
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
