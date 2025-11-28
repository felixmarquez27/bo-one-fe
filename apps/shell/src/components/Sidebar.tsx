import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Typography,
    Divider,
    IconButton,
    Avatar,
    Stack
} from '@bo-one/design-system';

interface MenuItem {
    id: string;
    name: string;
    path: string;
}

interface SidebarProps {
    onLogout: () => void;
}

const drawerWidth = 256;

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const menuItems: MenuItem[] = [
        { id: 'dashboard', name: 'Dashboard', path: '/' },
        { id: 'usuarios', name: 'Usuarios', path: '/usuarios' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const isActive = (path: string) => location.pathname === path;

    const drawerContent = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'background.paper' }}>
            {/* Logo */}
            <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{ width: 16, height: 16, border: 2, borderColor: 'white', borderRadius: 0.5 }} />
                </Box>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary" lineHeight={1.2}>
                        BO-ONE
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Enterprise System
                    </Typography>
                </Box>
            </Box>

            {/* User Info */}
            <Box sx={{ p: 2, bgcolor: 'action.hover' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.light' }}>A</Avatar>
                    <Box sx={{ minWidth: 0 }}>
                        <Typography variant="subtitle2" noWrap>Administrator</Typography>
                        <Typography variant="caption" color="text.secondary" display="block" noWrap>
                            admin@bo-one.com
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Divider />

            {/* Menu */}
            <List sx={{ flexGrow: 1, px: 2, py: 2 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ mb: 0.5, display: 'block' }}>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            sx={{
                                borderRadius: 1,
                                bgcolor: isActive(item.path) ? 'primary.main' : 'transparent',
                                color: isActive(item.path) ? 'white' : 'text.primary',
                                '&:hover': {
                                    bgcolor: isActive(item.path) ? 'primary.dark' : 'action.hover',
                                }
                            }}
                        >
                            <ListItemText
                                primary={item.name}
                                primaryTypographyProps={{
                                    fontWeight: isActive(item.path) ? 600 : 400,
                                    fontSize: '0.875rem'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            {/* Logout */}
            <Box sx={{ p: 2 }}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        onClick={onLogout}
                        sx={{
                            borderRadius: 1,
                            color: 'error.main',
                            '&:hover': { bgcolor: 'error.lighter' }
                        }}
                    >
                        <ListItemText primary="Cerrar Sesión" primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
            </Box>
        </Box>
    );

    return (
        <>
            {/* Mobile Toggle */}
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' }, position: 'fixed', top: 8, left: 8, zIndex: 1100, bgcolor: 'background.paper', boxShadow: 1 }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: '1px solid', borderColor: 'divider' },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    );
};
