import * as React from "react";

import { Badge } from "@mui/material";

import NewQuestionButton from "./NewQuestionButton";
import ViewQuestionsButton from "./ViewQuestionsButton";

export default function QuestionButtons({ questionsData = undefined }) {
    const [questions, setQuestions] = React.useState(
        questionsData ? questionsData : []
    );

    function handleNewQuestion(question, anonymous) {
        // add a new question to viewQuestionsButton!
        const newQ = {
            // user: anonymous ? { name: `Anonymous`, avatar: "" } : question.user,
            user: { name: `Anonymous`, avatar: "" },
            text: question,
            replies: [],
        };
        setQuestions([...questions, newQ]);
    }

    return (
        <>
            <NewQuestionButton
                onAsk={(q, anon) => handleNewQuestion(q, anon)}
            />
            <Badge badgeContent={1} color={"secondary"}>
                <ViewQuestionsButton questionsData={questions} />
            </Badge>
        </>
    );
}
