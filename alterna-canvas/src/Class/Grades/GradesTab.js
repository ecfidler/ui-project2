import * as React from "react";

import { useNavigate } from "react-router-dom";

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";

export default function GradesTab({ data, gradeScheme }) {
    const types = ["assignment", "tutorial", "inclass", "lecture", "exam"];

    console.log(gradeScheme);

    const materials = data.filter((item) => types.includes(item.type));
    materials.forEach((a) => {
        if (!a?.score) {
            a.score = "--";
        }
        a.index = data.indexOf(a);
    });

    const navigate = useNavigate();

    function viewItem(idx) {
        navigate(`./item/${idx}`);
    }

    return (
        <>
            <Typography
                sx={{
                    fontSize: "1.5em",
                }}
            >
                Grades
            </Typography>
            <hr style={{ color: "#e00122" }} />
            <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
                <Table stickyHeader sx={{ minWidth: "650px" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">End/Due</TableCell>
                            <TableCell align="right">Grade Type</TableCell>
                            <TableCell align="right">Points</TableCell>
                            <TableCell align="right">Percentage</TableCell>
                            <TableCell align="right">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {materials.map((item, i) => {
                            return (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.type}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.end_or_due}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.grading}
                                    </TableCell>
                                    <TableCell align="right">
                                        {`${item.score}/${item.points}`}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.score === "--"
                                            ? "--"
                                            : item.score / item.points}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => viewItem(item.index)}
                                        >
                                            View Page
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <TableContainer component={Paper} sx={{ maxHeight: "250px" }}>
                <Table stickyHeader sx={{ minWidth: "650px" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Points</TableCell>
                            <TableCell align="right">Percentage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gradeScheme.map((g, i) => {
                            const gradedItems = materials.filter(
                                (item) =>
                                    item.type === g.type && item.score !== "--"
                            );
                            const total = gradedItems.reduce(
                                (p, c) => p + c.score,
                                0
                            );
                            const max = gradedItems.reduce(
                                (p, c) => p + c.points,
                                0
                            );
                            return (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {g.type}
                                    </TableCell>
                                    <TableCell align="right">
                                        {g.weight}
                                    </TableCell>
                                    <TableCell align="right">
                                        {`${total ? total : "--"}/${
                                            max ? max : "--"
                                        }`}
                                    </TableCell>
                                    <TableCell align="right">
                                        {max ? total / max : `n/a`}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
