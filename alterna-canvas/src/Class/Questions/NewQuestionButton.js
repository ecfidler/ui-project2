import * as React from "react";

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    TextField,
    DialogContentText,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

import { QuestionMark, Send } from "@mui/icons-material/";

// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../theme";

export default function NewQuestionButton({ onAsk }) {
    const [open, setOpen] = React.useState(false);

    const [question, setQuestion] = React.useState("");
    const [anonymous, setAnonymous] = React.useState(false);
    // const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = () => {
        setOpen(true);
        // setScroll("paper");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (question) {
            onAsk(question, anonymous);
            setOpen(false);
        }
    };

    const handleQuestionInput = (event) => {
        setQuestion(event.target.value);
    };

    const handleAnonymousCheck = (event) => {
        setAnonymous(event.target.checked);
    };

    return (
        <>
            <Button
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
                startIcon={<QuestionMark />}
            >
                Ask a Question
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Ask a Question</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Asking a question here will notify the professor and be
                        availible for them and other students to see and respond
                        to.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="question"
                        lable="Question"
                        fullWidth
                        multiline
                        margin="dense"
                        placeholder="Question"
                        value={question}
                        onChange={handleQuestionInput}
                    ></TextField>
                    <FormControlLabel
                        control={<Checkbox onChange={handleAnonymousCheck} />}
                        label="Post Anonymously?"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSubmit}
                        startIcon={<Send />}
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
