import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Componentes propios
import SideBar from '../SideBar/SideBar';
import MainPanel from '../MainPanel/MainPanel';

//Componentes, métodos e íconos de Material UI
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

//Bootstrap y CSS propio
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#679df6',
            main: '#4285F4',
            dark: '#2e5daa',
            contrastText: '#fff',
        }
    },
    typography: {
        fontFamily: 'Nunito',
        h5: {
            fontWeight: 700
        }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

const App = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <SideBar />
        </div>
    );

    return (
        <div id="app">
            <Hidden smDown>
                <SideBar />
            </Hidden>
            <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
            <div className="right-panel">
                <ThemeProvider theme={theme}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <Hidden mdUp>
                                    <MenuIcon onClick={toggleDrawer("left", true)} />
                                </Hidden>
                            </IconButton>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5" className={classes.title}>
                                    Dashboard - Pedí Fácil
                                </Typography>
                            </ThemeProvider>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <Switch>
                    <Route exact path="/" render={(props) => <MainPanel {...props} title="Inicio" />} />
                    <Route exact path="/users" render={(props) => <MainPanel {...props} title="Usuarios" />} />
                    <Route exact path="/products" render={(props) => <MainPanel {...props} title="Productos" />} />
                    <Route exact path="/categories" render={(props) => <MainPanel {...props} title="Categorías" />} />
                </Switch>
            </div>
        </div>
    );
};

export default App;