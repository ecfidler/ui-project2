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
} from "@mui/material";

export default function GradesTab({data, gradeScheme}) {
    const types = [
        "assignment",
        "tutorial",
        "inclass",
        "lecture",
        "exam",
    ];

    const materials = data
        .filter((item) =>  types.includes(item.type) )
    materials.forEach((a) => {
        if (!a?.score) {
            a.score = '--';
        }
        a.index = data.indexOf(a);
    });

    const navigate = useNavigate();

    function viewItem(idx) {
        navigate(`./item/${idx}`);
    }

    return (
        <TableContainer component={Paper} sx={{ maxHeight: "700px" }}>
        <Table stickyHeader sx={{ minWidth: "650px" }}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">End/Due</TableCell>
                    <TableCell align="right">Grade Type</TableCell>
                    <TableCell align="right">Max Points</TableCell>
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
                            <TableCell align="right">{item.type}</TableCell>
                            <TableCell align="right">
                                {item.end_or_due}
                            </TableCell>
                            <TableCell align="right">
                                {item.grading}
                            </TableCell>
                            <TableCell align="right">
                                {item.points}
                            </TableCell>
                            <TableCell align="right">
                                {item.score}
                            </TableCell>
                            <TableCell align="right">
                                {item.score === '--' ? '--' : (item.score/item.points)}
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
    )
}
