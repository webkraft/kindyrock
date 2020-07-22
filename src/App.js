import React, {Component}  from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component{
  render(){
    
    return(
      <div>
      <Layout>
        <h3>KindyRock Videos</h3>
        <BurgerBuilder/>
      </Layout>
    </div>
    );
  }
}

export default App;