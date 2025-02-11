import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Tooltip,
    useTheme,
    useMediaQuery,
    Container,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import DeblurIcon from "@mui/icons-material/Deblur";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

const settings = [
    { name: "Profile", path: "/profile" },
    { name: "Account", path: "/account" },
    { name: "Logout", path: "/logout" },
];

const AppHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Mobile Menu Icon (Left) */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Logo (Centered) */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                            flexGrow: isMobile ? 1 : 0,
                            justifyContent: "center",
                        }}
                    >
                        <DeblurIcon />
                        <Typography
                            noWrap
                            variant="h6"
                            sx={{ mx: 1, fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem" }}
                        >
                            Redux
                        </Typography>
                    </Box>

                    {/* Desktop Menu (Centered) */}
                    {!isMobile && (
                        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                            {pages.map((page) => (
                                <MenuItem key={page.name} component={Link} to={page.path}>
                                    {page.name}
                                </MenuItem>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Dropdown */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        keepMounted
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} component={Link} to={page.path} onClick={handleCloseNavMenu}>
                                {page.name}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* User Settings Icon (Right) */}
                    <Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <AccountCircleIcon sx={{ color: "white", width: 28, height: 28 }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "35px" }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} component={Link} to={setting.path} onClick={handleCloseUserMenu}>
                                    {setting.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader;
