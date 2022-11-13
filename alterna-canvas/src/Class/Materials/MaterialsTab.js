import * as React from "react";

import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MaterialsTab({ data }) {
    const navigate = useNavigate();
    const types = [
        "assignment",
        "tutorial",
        "inclass",
        "lecture",
        "na",
        "module",
    ];

    const materials = data
        .filter((item) => types.includes(item.type))
        .sort((a, b) => {
            return (
                Date.parse(a.start_or_posted) - Date.parse(b.start_or_posted)
            );
        });
    materials.forEach((a) => {
        a.index = data.indexOf(a);
    });

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
                        <TableCell align="right">Start/Posted</TableCell>
                        <TableCell align="right">End/Due</TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Module</TableCell>
                        <TableCell align="right">Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {materials.map((item, i) => {
                        if (item.type === "module") {
                            return (
                                <TableRow
                                    key={i}
                                    sx={{
                                        backgroundColor: "lightgray",
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
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">
                                        {item.module}
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            );
                        }
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
                                    {item.start_or_posted}
                                </TableCell>
                                <TableCell align="right">
                                    {item.end_or_due}
                                </TableCell>
                                <TableCell align="right">
                                    {item.points}
                                </TableCell>
                                <TableCell align="right">
                                    {item.module}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        // variant="outlined"
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
    );
}
