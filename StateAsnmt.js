import React, { Component } from 'react';

class StateAsnmt extends Component{
    constructor(){
        super();
        this.state={
            total:0,
            numbers:null
        };
    }

    fun=(e)=>{
        this.setState({numbers:e.target.value});
        console.log(Array.from(e.target.value));
        let result=Array.from(e.target.value).reduce((acc,current)=>{
            return Number(acc)+Number(current)  
        },0);
        this.setState({total:result})
    }



        render(){
            return(
                <div>
                    <br></br>
                   
                        <div class="row">
                            <div class="col s6 m4">
                           <input type="text" onChange={this.fun} placeholder="Enter the numbers"/>
                            {this.state.numbers}
                        </div>
                        <h4>Result : {this.state.total}</h4>
                    </div>
                </div>
            )};
    }
export default StateAsnmt;