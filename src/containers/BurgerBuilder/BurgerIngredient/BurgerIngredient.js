import React, {Component} from 'react';
//import { checkPropTypes } from 'prop-types';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

//Burger ingredient is like the video ingredient - change ingredient with video
class BurgerIngredient extends Component{

    /*
    -- this adds the divs with styles to the burger ingredients
    */

    /* Object of videos
        Jack in the box
        https://player.vimeo.com/video/440258389

        Jiggle Your Scarfe
        https://player.vimeo.com/video/440259304

        Jump in the Puddles
        https://player.vimeo.com/video/440282888

    */

    //Make the JSON object, thats creted from the database

    render (){

    /*let videoList = [
        {"title": "Movie 1", "vimeoid": "440258389", "agegroup": "Baby"},
        {"title": "Movie 2", "vimeoid": "440259304", "agegroup": "Toddler"},
        {"title": "Movie 3", "vimeoid": "440282888", "agegroup": "Pre school"},
        {"title": "Movie 4", "vimeoid": "111222333", "agegroup": "Baby"}
    ]*/

    let ingredient = null;

    switch (this.props.type) {
        case ('all-videos'):
            //ingredient = <div className={styles.BreadBottom}></div>;
            //ingredient = ('<iframe src="https://player.vimeo.com/video/440258389" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
            ingredient = ('videoList');
            break;

        //Clicking on meat/toddler is going to load the list of toddler videos

        case ('bread-top'):
            //ingredient = ('<iframe src="https://player.vimeo.com/video/440259304" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
            ingredient = ('https://player.vimeo.com/video/440259304');
            break;
        
        /*
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        */

        case ('meat'):
            //ingredient = ('<iframe src="https://player.vimeo.com/video/440282888" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
            //<div className={styles.Meat}></div>;
            ingredient = ('https://player.vimeo.com/video/440282888');
            break;

        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;

        case ('salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;

        case ('bacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        
        default:
            ingredient = null;
    }

    return ingredient;
    }
}

BurgerIngredient.propTypes  = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;