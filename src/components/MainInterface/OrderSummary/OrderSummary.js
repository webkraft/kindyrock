import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        //inline styling
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
            </li>
            )
        }
    )

    return(
        <Aux>
        <h3>Your Order</h3>
        <p>Order details...</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchasedCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )

};

export default orderSummary;