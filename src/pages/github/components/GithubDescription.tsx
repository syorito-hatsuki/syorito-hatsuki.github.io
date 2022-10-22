import {Typography} from "@mui/material";
import {textLimit} from "../../../css/textStyles";
import {ComponentProps} from "react";

export function GithubDescription(props: ComponentProps<any>) {
    let description = props.content
    if (description === null) description = 'Description not available'
    // @ts-ignore
    return (<Typography variant="body2" color="text.secondary" style={textLimit}>{description}</Typography>)
}