import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {GitHub} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import ModrinthIcon from "../icons/Modrinth";
import * as React from "react";
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import {linkStyle, titleStyle} from "./css/sideDrawerStyle";
import {applicationTitle} from "../../index";

export default function SideDrawer() {
    return (
        <div>
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
        </div>
    );
}