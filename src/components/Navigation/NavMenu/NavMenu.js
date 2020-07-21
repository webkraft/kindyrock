import React from 'react';
import style from './NavMenu.module.css'
import NavMenuLink from '../NavMenu/NavMenuLink/NavMenuLink';

const navmenu = (props) => (
    /* place the props in the links to pass to NavMenu */
    <ul className={style.NavMenu}>
        <NavMenuLink link="/" active>Home</NavMenuLink>
        <NavMenuLink link="#">Favourites</NavMenuLink>
        <NavMenuLink link="#">Membership</NavMenuLink>
    </ul>
);

export default navmenu;