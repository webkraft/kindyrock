import React, {Component}  from 'react';
import axios from 'axios';

/* Layouts */
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';

/* Comps/Logic */
//import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//Import video player component to load up videos
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoModal from '../../components/UI/VideoModal/VideoModal';
//import VideoBackground from '../../components/VideoPlayer/VideoBackground/VideoBackground';
import style from '../BurgerBuilder/BurgerBuilder.module.css'

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
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        videoCategory: null,
        videoType: null,
        totalPrice: 0,
        purchaseable: false,
        purchasing: false,
        showHomeVideoModal: true,
        posts: [],
        seconds: 25,
        minutes: 0,
        videoLoading:true
    }
    
    componentDidMount () {
        axios.get( 'https://website5.sdstesting.com.au/webservice/demo-service.php' )
        .then( response => {
            const posts = response.data.slice(0, 8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts});
            // console.log( response );
        } )
        .catch(error => {
            // console.log(error);
            this.setState({error: true});
        });

        //Timer
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.homeVideoModalHandler()
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)

        if (this.video) {
            this.video.addEventListener("loadeddata", () => {
              this.setState({ videoLoading: false });
            });
          }

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)

        if (this.video) {
            this.video.removeEventListener("loadeddata", () => {
            });
          }
    }

    //Add new method / helper method
    //tells if the burger can be purchased
    updatePurchaseState(videoCategory){
        //console.log("this.state.ingredients" + this.state.ingredients);
        //turn the above object values: salad price etc into an array
        const sum = Object.keys(videoCategory).map(igkey => {
            return videoCategory[igkey];
        })

        //this will flatten the array to return a single number
        .reduce((sum, el) => {
            return sum +el;
        }, 0);
        this.setState({videoCategory: sum > 0})

        console.log("videoCategory" + this.state.videoCategory);
    }

    //Methods for adding state to form controls
    /// ... ES6 spead operator to distribute the properies of the old state
    selectVideoCategory = (type) => {

        console.log('selectVideoCategory: ' + type);
        this.setState({videoCategory: type})
    }

    selectVideoType = (type) => {

        console.log('selectVideoType: ' + type);
        this.setState({videoType: type})
    }


    /*removeIngredientHandler = (type) => {
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
    }*/

    //Create a new method to handle the modal on purchasing state
    //cannot set state from an event- must use the arrow handler
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    homeVideoModalHandler = () => {
        this.setState({showHomeVideoModal: false})
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

        const { minutes, seconds } = this.state;

        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
    
        let posts = null;
        //<p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error && this.state.videoType != null) {
            posts = this.state.posts.map(post => {
            return <VideoPlayer 
                key={post.id}
                vimeo_id={post.vimeo_id}
                name={post.name}
                age_group={post.description}
                type={post.reg_date} />;
            })
        }

        return (
            <Aux>
            <VideoModal
            show={this.state.showHomeVideoModal} 
            modalClosed={this.homeVideoModalHandler}
            loading={this.state.videoLoading}>
            </VideoModal>
            <Modal 
            show={this.state.purchasing} 
            modalClosed={this.homeVideoModalHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchasedCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        />
                </Modal>
                <BuildControls
                    //Pass state
                    videoCategoryState = {this.state.videoCategory}
                    videoTypeState = {this.state.videoType}
                    //Handlers
                    videoCategorySelected={this.selectVideoCategory}
                    videoTypeSelected={this.selectVideoType}
                    disabled={disableInfo}
                    //purchaseable={this.state.purchaseable}
                    //ordered={this.purchaseHandler}
                    //price={this.state.totalPrice}
                />
                <div>               
                </div>           
                
                <div className={style.videoPostsWrapper}>
                {posts}
                </div>
            </Aux>
        );
    }
}

/*
<p>Category: {this.state.videoCategory}</p>
                <p>Type: {this.state.videoType}</p>                
                
                <p>-----</p>
                <div>
                { minutes === 0 && seconds === 0
                    ? <p>Time's Up</p>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
                </div>
                <p>-----</p>    


<p>Member: {this.state.member.member_name}</p>
<VideoBackground/>

<Burger ingredients={this.state.ingredients}/>

<BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
*/

////purchasing={this.state.purchasing}
export default BurgerBuilder;