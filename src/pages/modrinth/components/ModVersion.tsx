import {ComponentProps, useEffect, useState} from "react";
import axios from "axios";
import {Typography} from "@mui/material";

export function ModVersion(props: ComponentProps<any>) {
    const [version, setVersion] = useState("")

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://api.modrinth.com/v2/project/${props.slug}/version?featured=true`
        }).then(response => {
            setVersion(response.data[0]['version_number'])
        }).catch(() => setVersion("Version not available"));
    }, [props.slug])

    return (<Typography style={{float: 'right'}} variant={"body2"}>{version}</Typography>)
}