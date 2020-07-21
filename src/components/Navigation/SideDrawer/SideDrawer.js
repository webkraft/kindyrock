import React from 'react';
import Logo from '../../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import style from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

//normal component that returns jsx
//the other is a functional comp that has no conditions or logic 
//want to make conditions for the output jsx
//make a real function body to add conditions

const sideDrawer = (props) => {
    
    //dynamically add classes
    let attachedStyles = [style.SideDrawer, style.Close];
    if(props.open){
        attachedStyles = [style.SideDrawer, style.Open];
    }


    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyles.join(' ')}>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavMenu/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;