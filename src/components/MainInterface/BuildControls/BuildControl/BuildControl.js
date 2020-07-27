//import React from 'react';
import React from 'react';
import style from './BuildControl.module.css';

//This is a resuable component to use in BuildControls
//add the built in onClick listener
const buildControl = (props) => (
    <div className={style.BuildControl}>
    <button
    value={props.classname}
    className={[style.More, style[props.classname]].join(' ')}
    onClick={props.added}>
    {props.label}
    </button>
</div>
);

export default buildControl;

/*
className={[style.More, style[props.classname]].join(' ')}

div style={{ backgroundColor: 'red', color: 'white' }}
style={{backgroundColor: "lightblue"}}
styles={{ backgroundImage: 'url(' + props.img + ')' }}
backgroundImage: 'url(' + props.img + ')'

<div className={style.Label}>{props.label}</div>
<button
            className={style.Less} 
            onClick={props.removed}
            disabled={props.disabled}>Less</button>

            <button 
            className={style.More}
            onClick={props.added}>More</button>
*/