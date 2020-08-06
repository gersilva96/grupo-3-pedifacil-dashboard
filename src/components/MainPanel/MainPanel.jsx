import React from 'react';
import { Route } from 'react-router-dom';

//Componentes propios
import Home from './Sections/Home';
import Users from './Sections/Users';
import Products from './Sections/Products';
import Categories from './Sections/Categories';

//Componentes y métodos de Material UI
import { Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//CSS propio
import './MainPanel.scss';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Nunito',
        h4: {
            fontWeight: 700
        }
    }
});

const MainPanel = ({ title }) => {
    return (
        <div className="main-panel">
            <ThemeProvider theme={theme}>
                <Typography variant="h4" component="h1" className="mb-5">{title}</Typography>
            </ThemeProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/categories" component={Categories} />
        </div>
    );
};

export default MainPanel;