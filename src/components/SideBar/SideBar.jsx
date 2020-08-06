import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Componentes propios
import NavButton from '../NavButton/NavButton';

//CSS propio
import './SideBar.scss';

const SideBar = () => {
    return (
        <div id="sidebar">
            <Link to="/" className="link-main">
                <img src="images/logo/logoWhiteH.svg" alt="pedí fácil logo" />
            </Link>
            <span className="span">DASHBOARD v0.1</span>
            <div className="nav">
                <NavLink exact to="/">
                    <NavButton title="Inicio" />
                </NavLink>
                <NavLink exact to="/users">
                    <NavButton title="Usuarios" />
                </NavLink>
                <NavLink exact to="/products">
                    <NavButton title="Productos" />
                </NavLink>
                <NavLink exact to="/categories">
                    <NavButton title="Categorías" />
                </NavLink>
            </div>
            <Link to="/" className="link-footer">
                <img src="images/logo/logoWhite.svg" alt="pedí fácil logo footer" />
            </Link>
            <span className="span">&copy;2020 - Pedí Fácil</span>
        </div>
    );
};

export default SideBar;