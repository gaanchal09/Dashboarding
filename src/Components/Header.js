import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../ThemeProvider';

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const currentTheme = localStorage.getItem('theme') || 'light';

    const handleThemeChange = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        toggleTheme();
    };

    return (
        <AppBar position="fixed" className="header">
            <Toolbar>
                <Typography variant="h6" className="title">
                    Admin Dashboard
                </Typography>
                <div className="theme-switcher" onClick={handleThemeChange}>
                    <IconButton color="inherit">
                        {currentTheme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <Typography variant="body1">{currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
