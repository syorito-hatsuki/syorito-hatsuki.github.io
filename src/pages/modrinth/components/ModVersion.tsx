import {Typography} from "@mui/material";
import {useProjectVersion} from "../../../services/modrinth/version";

export function ModVersion(props: {
    slug: string
}) {
    const {data} = useProjectVersion(props.slug)
    return <Typography style={{float: 'right'}} variant={"body2"}>
        {data ? data[0].version_number : "Version unavailable"}
    </Typography>
}