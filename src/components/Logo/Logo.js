import React from 'react';
import appLogo from '../../assets/Images/KR-small-logo.png';
import style from './Logo.module.css';

const logo = (props) => (
    <div className={style.Logo}>
        <img src={appLogo} alt="Logo"/>
    </div>
);

export default logo;