import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import styles from './Burger.module.css';
import BurgerIngredient from '../../containers/BurgerBuilder/BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //pass the burgerbuilder object and convert to an array and gets the keys
    //exctract all the types and get the lenght of each type
    
    //chanage const to a variable - use let
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        //use spread method to make number of objects
            return[...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    //use reduce to flatten array
    //reduce is used to transfrom an array into something else
    .reduce((arr, el) => {
        //arr is the updated arg that will  be returned.
        return arr.concat(el)
    },[]);


    if (transformedIngredients.length === 0){
        //transformedIngredients = <p>Video placeholder</p>
        transformedIngredients =  '<iframe src="https://player.vimeo.com/video/440258389" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><iframe src="https://player.vimeo.com/video/440258389" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><iframe src="https://player.vimeo.com/video/440258389" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
    }

    //to solve the problem of 0 ingredients - empty arrays
    //salad: 0, bacon: 0,
    //(4) [Array(0), Array(0), Array(0), Array(0)]
    //console.log(transformedIngredients);


    //<BurgerIngredient type="bread-top" />
    //<BurgerIngredient type="bread-bottom" />

    //{transformedIngredients}
    // {ReactHtmlParser(transformedIngredients)}
    //<div className={styles.Burger}>

    /*
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="bread-bottom" />
        <BurgerIngredient type="meat" />
    */

    return (
        <div className={styles.VideoWrapper}>
            <BurgerIngredient type="all-videos" />
        </div>
    )
}

export default burger;