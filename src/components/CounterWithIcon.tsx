import {ReactElement} from "react";
import {Box, Typography} from "@mui/material";

export function CounterWithIcon(props: {
    count: number
    icon: ReactElement
}) {
    return (
        <Box>
            {props.icon}
            <Typography paddingLeft={0.5} paddingRight={2} style={{float: 'right'}}>{props.count}</Typography>
        </Box>
    )
}
