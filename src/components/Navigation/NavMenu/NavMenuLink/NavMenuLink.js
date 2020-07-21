import React from 'react';
import style from './NavMenuLink.module.css';

/* props.children - wrap the link text with the component */
const navlink = (props) => (
    /* create place holders then add reusable comps */
    <li className={style.NavMenuLink}>
        <a
        href={props.link}
        className={props.active ? style.active : null}
        >{props.children}</a>
    </li>
);

export default navlink;