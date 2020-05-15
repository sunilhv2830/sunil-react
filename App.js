import React, { Component } from 'react';
import Header from './Header';
import Conditional_Asnmt from './Conditional_Asnmt';
import StateAsnmt from './StateAsnmt';
import firstPhoto from 'images/user1.png';
import secondPhoto from 'images/user2.png';
import thirdPhoto from 'images/user3.png';
import Footer from './Footer';



class App extends Component {
 constructor(){
    super();
    this.state={
      userdata:[{name:"SUNIL HV",dob:"28-02-1995",email:"sunil@gmail.com",firstPhoto},
                {name:"ANIL HV",dob:"20-04-2000",email:"anil@gmail.com",secondPhoto},
                {name:"PRASANNA SAGI",dob:"13-10-1777",email:"prasanna@gmail.com",thirdPhoto}      
    ]
    
    }
  }

  render() {
    return (
      <div>
       <Header title="EMart">Z</Header>
       <Conditional_Asnmt></Conditional_Asnmt>
       <hr></hr>
       <StateAsnmt></StateAsnmt>
       <h4 align="center">USER LIST</h4>
      {
      this.state.userdata.map((data)=>{
        return  <SingleUser user={data}></SingleUser>
        })
      };
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
