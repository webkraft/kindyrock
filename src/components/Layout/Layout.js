import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

/*
To add condition/click handler need to change the function to a class
import React from 'react';

const layout = (props) => (
    <Aux>
    <Toolbar/>
    <SideDrawer/>
        <main className={styles.Content}>
        {props.children}
    </main>
    </Aux>
);
export default layout;

*/

// add this.props, for all class name comps
// need to change the function name to a capital
// -- Implement a method to do some logic
class Layout extends Component {

    state = {
        showSideDrawer:false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer:false
        });
    }

    sideDrawerToggleHandler = () => {
        //this.setState({showSideDrawer: !this.state.showSideDrawer});
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler}/>
                    <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default Layout;