import {ComponentProps} from "react";
import {Box, Typography} from "@mui/material";

export function CounterWithIcon(props: ComponentProps<any>) {
    return (
        <Box>
            {props.icon}
            <Typography paddingLeft={0.5} paddingRight={2} style={{float: 'right'}}>{props.count}</Typography>
        </Box>
    )
}
