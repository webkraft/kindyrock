import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Meat', type:'meat'},
    {label: 'Cheese', type:'cheese'}
];

//functional component that recieves props and returns jsx
//access the object above
const buildControls = (props) => (
    
    <div className={styles.BuildControls}>
        <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} />
        ))}
        <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>
            Order NOW
        </button>
    </div>
);

export default buildControls;