import * as React from "react";

import NewQuestionButton from "./NewQuestionButton";

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from "@mui/material";

import { QuestionAnswer } from "@mui/icons-material/";

// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../theme";

export default function ViewQuestionsButton({ questionsData }) {
    if (!questionsData) {
        questionsData = [];
    }
    const [open, setOpen] = React.useState(false);
    // const [questions, setQuestions] = React.useState(questionData);

    const handleClickOpen = () => {
        setOpen(true);
        // setScroll("paper");
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleNewQuestion(question, anonymous) {
        // add a new question here!
    }

    return (
        <>
            <Button
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
                startIcon={<QuestionAnswer />}
            >
                View Questions
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Questions and Answers</DialogTitle>
                <DialogContent>
                    <List sx={{ width: `100%`, bgColor: "background.paper" }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="test-user" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Josh"
                                secondary="Sample question text here: When is this feature going to be completed?"
                            />

                            <Button
                                variant="contained"
                                size="small"
                                sx={{ alignSelf: "center" }}
                            >
                                Reply
                            </Button>
                        </ListItem>
                        <ListItem
                            sx={{ marginLeft: `1em` }}
                            alignItems="flex-start"
                        >
                            <ListItemAvatar>
                                <Avatar alt="test-user-2" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Reply - Ethan"
                                secondary={`Never.`}
                            />
                        </ListItem>
                        {questionsData.map((q, i) => {
                            return (
                                <>
                                    <Divider variant="inset" component="li" />
                                    <ListItem key={i} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={q.user.name}
                                                src={q.user.avatar}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={q.user.name}
                                            secondary={q.text}
                                        />
                                    </ListItem>

                                    {q.replies.map((r, j) => {
                                        return (
                                            <ListItem
                                                key={i}
                                                sx={{ marginLeft: `1em` }}
                                                alignItems="flex-start"
                                            >
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt={r.user.name}
                                                        src={r.user.avatar}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={`Reply - ${r.user.name}`}
                                                    secondary={r.text}
                                                />
                                            </ListItem>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </List>
                </DialogContent>
                <DialogActions>
                    <NewQuestionButton
                        onAsk={(q, anon) => handleNewQuestion(q, anon)}
                    />
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
