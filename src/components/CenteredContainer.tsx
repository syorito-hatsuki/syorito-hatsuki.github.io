import {Container} from "@mui/material";
import {ReactNode} from "react";

export function CenteredContainer(props: { children: ReactNode }) {
    return (<Container style={{
            position: "absolute",
            top: "50%",
            left: "calc(50% + 120px)",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
        }}>{props.children}</Container>
    )
}