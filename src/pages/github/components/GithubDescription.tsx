import {Typography} from "@mui/material";

export function GithubDescription(props: { content: string }) {
    let description = props.content || 'Description not available'
    return (<Typography variant="body2" color="text.secondary" textOverflow='ellipsis' overflow='hidden'
                        whiteSpace='nowrap'>{description}</Typography>)
}