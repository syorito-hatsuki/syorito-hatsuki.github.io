import {useState} from "react";
import {Typography} from "@mui/material";
import {useProjectVersion} from "../../../services/modrinth/version";

export function ModVersion(props: {
    slug: string
}) {
    const [text, setText] = useState("")
    const {data, status, error} = useProjectVersion(props.slug)

    if (status === "error") setText("Version unavailable")
    if (status === "success") setText(data[0].version_number)

    return (<Typography style={{float: 'right'}} variant={"body2"}>{text}</Typography>)
}