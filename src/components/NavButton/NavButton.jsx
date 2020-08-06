import React from 'react';

//Componentes, métodos e íconos de Material UI
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Home as HomeIcon, Person as PersonIcon, Apps as AppsIcon, Category as CategoryIcon } from '@material-ui/icons';

//CSS propio
import './NavButton.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#679df6',
            main: '#4285F4',
            dark: '#2e5daa',
            contrastText: '#fff',
        }
    }
});

const NavButton = ({ title }) => {
    const renderIcon = titulo => {
        switch (titulo) {
            case "Inicio":
                return <HomeIcon />;
            case "Usuarios":
                return <PersonIcon />;
            case "Productos":
                return <AppsIcon />;
            case "Categorías":
                return <CategoryIcon />;
            default:
                break;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" size="large" startIcon={renderIcon(title)} className="nav_link">
                {title}
            </Button>
        </ThemeProvider>
    );
};

export default NavButton;