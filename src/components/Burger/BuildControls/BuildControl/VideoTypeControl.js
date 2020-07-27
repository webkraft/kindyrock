//import React from 'react';
import React from 'react';
import style from './VideoTypeControl.module.css';

//This is a resuable component to use in BuildControls
//add the built in onClick listener
const videoTypeControl = (props) => (
            <div className={style.TypeControl}>
            <button
            value={props.classname}
            className={[style.VideoTypeBtn, style[props.classname]].join(' ')}
            onClick={props.added}>
            {props.label}
            </button>
        </div>
);

export default videoTypeControl;

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