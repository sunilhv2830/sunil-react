import React, { Component } from 'react';
import Header from './Header';
import Conditional_Asnmt from './Conditional_Asnmt';
import StateAsnmt from './StateAsnmt';
import Footer from './Footer';



class App extends Component {
 
  render() {
    return (
      <div>
       <Header title="EMart">Z</Header>
       <Conditional_Asnmt></Conditional_Asnmt>
       <hr></hr>
       <StateAsnmt></StateAsnmt>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
