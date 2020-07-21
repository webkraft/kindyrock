import React from 'react';
import style from './BuildControl.module.css';
//This is a resuable component to use in BuildControls
//add the built in onClick listener
const buildControl = (props) => (
    
        <div className={style.BuildControl}>
            <div className={style.Label}>{props.label}</div>
            <button 
            className={style.Less} 
            onClick={props.removed}
            disabled={props.disabled}>Less</button>

            <button 
            className={style.More}
            onClick={props.added}>More</button>
        </div>
);

export default buildControl;