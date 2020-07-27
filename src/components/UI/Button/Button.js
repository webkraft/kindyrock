import React from 'react';
import style from './Button.module.css';

//functinoal comp that recives some props
//add an array of classes to add [classes.Button]
//use join to make the string from the array
const button = (props) => (
    <button
        className={[style.Button, style[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;