import {Link, Typography, Box} from "@mui/material";
import React from "react";
import {applicationTitle} from "../index";

export default function MainPage() {
    return (
        <Box textAlign="center">
            <Typography variant="h1">{applicationTitle}</Typography>
            <Typography variant="h5">Developed by <Link href="https://github.com/syorito-hatsuki">Syorito Hatsuki</Link></Typography>
        </Box>
    )
}