import {GitHub} from "@mui/icons-material";
import ModrinthIcon from "../icons/Modrinth";
import {Link} from "react-router-dom";
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {linkStyle, titleStyle} from "./css/sideDrawerStyle";
import {applicationTitle} from "../../index";

export default function SideDrawer() {
    return (
        <>
            <Toolbar style={titleStyle}>
                <Typography variant="h4">{applicationTitle}</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <Link to="/github" style={linkStyle}>
                    <ListItem key="Github" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GitHub/>
                            </ListItemIcon>
                            <ListItemText primary="Github"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/modrinth" style={linkStyle}>
                    <ListItem key="Modrinth" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModrinthIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Modrinth"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Box marginTop="auto" paddingBottom={2}>
                <Typography variant="body2" textAlign="center">
                    Powered by <a style={{textDecoration: "none"}} href="https://reactjs.org">React</a> + <a
                    style={{textDecoration: "none"}} href="https://mui.com">MUI</a>
                </Typography>
            </Box>
        </>
    );
}