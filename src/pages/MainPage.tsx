import {Link, Typography} from "@mui/material";
import React from "react";
import {applicationTitle} from "../index";
import {CenteredContainer} from "../components/CenteredContainer";

export default function MainPage() {
    return (
        <CenteredContainer>
            <Typography variant="h1" textAlign="center">{applicationTitle}</Typography>
            <Typography variant="h5" textAlign="center">
                Developed by <Link underline='none' href="https://github.com/syorito-hatsuki">Syorito Hatsuki</Link>
            </Typography>
        </CenteredContainer>
    )
}