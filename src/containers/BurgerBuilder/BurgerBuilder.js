import React, {Component}  from 'react';
/* Layouts */
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';

/* Comps/Logic */
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//import { object } from 'prop-types';

//all caps is for global constants
//prices for each ing
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat:2.5,
    bacon:1.5
}

class BurgerBuilder extends Component {

    //Adding state to make the burger and controls dynamic
    //modern way of adding state
    state = {
        //add objects

        /*
        In this state we will need to get the user/member details
        -- shown on settings and signup page
        */

        member:{
            member_id: 3128,
            member_name: "Mummy",
            member_email_address: "mummy@gmail.com"
        },
        audience:{
            child_id: 97624,
            child_name: "Peter",
            child_age: "3",
            favourite_videos:{
                videolist: [
                    {vimeo_id: 440258389,
                        name: "Jack in the box",
                        Description: "Video desc...",
                        AgeGroup: "Baby",
                        Type: "Learn",
                        ThumbnailFilename: "Jack-in-the-Box-Thumb.jpg"},
                    {vimeo_id: 440258389,
                        Name: "Jack in the box",
                        Description: "Video desc...",
                        AgeGroup: "Baby",
                        Type: "Learn",
                        ThumbnailFilename: "Jack-in-the-Box-Thumb.jpg"}
                ]
            }
        },
        videos: {
            vimeolist: [
                {vimeo_id: 440258389,
                    name: "Jack in the box",
                    Description: "Video desc...",
                    AgeGroup: "Baby",
                    Type: "Learn",
                    ThumbnailFilename: "Jack-in-the-Box-Thumb.jpg"},
                {vimeo_id: 440259304,
                    Name: "Jiggle Your Scarfe",
                    Description: "Video desc...",
                    AgeGroup: "Baby",
                    Type: "Learn",
                    ThumbnailFilename: "Jiggle-Your-Scarf-Thumbnail.jpg"},
                {vimeo_id: 440282888,
                    Name: "Jump in the Puddles",
                    Description: "Video desc...",
                    AgeGroup: "Baby",
                    Type: "Learn",
                    ThumbnailFilename: "Jump-in-the-puddles-TNL.jpg"}
            ]
          },
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
        //want to pass the above object (not array) to the burger- 
        //cannot just map it to loop through it.
    }


        //Add new method / helper method
    //tells if the burger can be purchased
    updatePurchaseState(ingredients){
        //console.log("this.state.ingredients" + this.state.ingredients);
        //turn the above object values: salad price etc into an array
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        })

        //this will flatten the array to return a single number
        .reduce((sum, el) => {
            return sum +el;
        }, 0);
        this.setState({purchaseable: sum > 0})

        console.log("purchaseable" + this.state.purchaseable);
    }

    //Methods for adding state to form controls
    /// ... ES6 spead operator to distribute the properies of the old state
    addIngredientHandler = (type) => {
        const oldCount  = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount  = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    //Create a new method to handle the modal on purchasing state
    //cannot set state from an event- must use the arrow handler
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        //this.setState({purchasing: false})
        alert('Continue');
    }

    //the burger dosnt recieve any ingredients yet
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchasedCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
                <div>
                <p>Member: {this.state.member.member_name}</p>
                </div>
            </Aux>
        );
    }
    
}
////purchasing={this.state.purchasing}
export default BurgerBuilder;