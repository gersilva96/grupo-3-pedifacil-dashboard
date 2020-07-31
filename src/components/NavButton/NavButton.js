import React from 'react';
import './NavButton.scss';

const NavButton = ({title}) => {
    return <a href="/" className="nav_link">
        {title}
    </a>
};

export default NavButton;