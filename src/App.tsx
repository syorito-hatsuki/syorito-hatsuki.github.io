import React from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SideDrawer from "./components/drawer/SideDrawer";
import {Outlet} from "react-router-dom";
import {Typography} from "@mui/material";

export default function App() {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {sm: `${drawerWidth}px`}}}>
                <Toolbar sx={{mr: 2, display: {sm: 'none'}}}>
                    <IconButton color="inherit" aria-label="open drawer" edge="start"
                                onClick={() => setMobileOpen(!mobileOpen)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography width="100%" align="center" variant="h6">fStudioHub</Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                <Drawer container={window.document.body} variant="temporary" open={mobileOpen}
                        onClose={() => setMobileOpen(!mobileOpen)}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: {xs: 'block', sm: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                        }}>
                    <SideDrawer/>
                </Drawer>
                <Drawer variant="permanent" sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }} open>
                    <SideDrawer/>
                </Drawer>
            </Box>

            <Box component="main" sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}>
                <Toolbar sx={{mr: 2, display: {sm: 'none'}}}/>
                <Outlet/>
            </Box>
        </Box>
    );
}
