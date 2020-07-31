import React from 'react';

//Hoja de estilos
import './SideBar.scss';

//Componentes
import NavButton from './../NavButton/NavButton';

const SideBar = () => {
    return <div id="sidebar">
        <a className="link-main" href="/">
            <img src="images/logo/logoWhiteH.svg" alt="pedí fácil logo"/>
        </a>
        <div className="nav">
            <NavButton title="Home" />
            <NavButton title="Usuarios" />
            <NavButton title="Productos" />
            <NavButton title="Categorías" />
        </div>
        <a className="link-footer" href="/">
            <img src="images/logo/logoWhite.svg" alt="pedí fácil logo footer"/>
        </a>
    </div>
};

export default SideBar;