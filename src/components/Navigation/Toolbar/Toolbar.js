import React from 'react';
import style from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    
    <header className={style.Toolbar}>
        <div className={style.ToolbarWrapper}>
        <Logo/>
        <nav className={style.DesktopOnly}>
            <NavMenu/>
        </nav>
        </div>
        <DrawerToggle show={props.open} clicked={props.drawerToggleClicked}/>
    </header>
);

export default toolbar;