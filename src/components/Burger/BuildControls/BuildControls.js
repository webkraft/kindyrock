import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    /*{label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Meat', type:'meat'},
    {label: 'Cheese', type:'cheese'}
    */
    {label: 'Babies', type:'babies'},
    {label: 'Toddlers', type:'toddlers'},
    {label: 'Pre-Schoolers', type:'preschoolers'},
    {label: 'Young Children', type:'youngchildren'},
];

//functional component that recieves props and returns jsx
//access the object above

/*
-- Add or remove video categories
*/
const buildControls = (props) => (
    
    <div className={styles.BuildControls}>
        <h3>Category selection</h3>
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

        <div>
                    <h2>Testing data</h2>
                    <p>Loop through state data</p>
                </div>

    </div>
);

export default buildControls;