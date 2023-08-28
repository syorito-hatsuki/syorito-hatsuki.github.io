import {Typography} from "@mui/material";
import {textLimit} from "../../../css/textStyles";

export function GithubDescription(props: { content: string }) {
    let description = props.content || 'Description not available'
    return (<Typography variant="body2" color="text.secondary" style={textLimit}>{description}</Typography>)
}