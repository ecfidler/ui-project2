import DownloadIcon from "@mui/icons-material/Download";

import { Button } from "@mui/material";

export default function DownloadButton({ path, fileName }) {
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
