import React, {Component}  from 'react';
import Layout from './components/Layout/Layout';
import MainInterfaceBuilder from './containers/MainInterfaceBuilder/MainInterfaceBuilder';

class App extends Component{
  render(){
    
    return(
      <div>
      <Layout>
        <MainInterfaceBuilder/>
      </Layout>
    </div>
    );
  }
}

export default App;
//<h3>KindyRock Videos</h3>