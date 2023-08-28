import {GitHub} from "@mui/icons-material";
import ModrinthIcon from "../icons/Modrinth";
import {Link} from "react-router-dom";
import {
    Box,
    Divider,
    Link as MuiLink,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {applicationTitle} from "../../index";

export default function SideDrawer() {
    return (
        <>
            <Toolbar style={{justifyContent: 'center'}}>
                <Typography variant="h4">{applicationTitle}</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem key="Github" disablePadding>
                    <ListItemButton component={Link} to="/github">
                        <ListItemIcon>
                            <GitHub/>
                        </ListItemIcon>
                        <ListItemText primary="Github"/>
                    </ListItemButton>
                </ListItem>
                <ListItem key="Modrinth" disablePadding>
                    <ListItemButton component={Link} to="/modrinth">
                        <ListItemIcon>
                            <ModrinthIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Modrinth"/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Box marginTop="auto" paddingBottom={2}>
                <Typography variant="body2" textAlign="center">
                    Powered by <MuiLink underline='none' href="https://reactjs.org">React</MuiLink> + <MuiLink
                    underline='none' href="https://mui.com">MUI</MuiLink>
                </Typography>
            </Box>
        </>
    );
}