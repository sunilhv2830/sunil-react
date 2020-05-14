import React, { Component } from 'react'

class Conditional_Asnmt extends Component{
    constructor(){
        super();
        this.state={
            dummy:true
        };
    }
    fun=()=>
    {       
        this.setState({
            dummy:false
        })

    }
render(){
    
    return(
        <div>
            <h4>{this.state.dummy?'welcome':'clicked'}</h4>
            <button onClick={this.fun}>Click</button>
        </div>
    )
}
}
export default Conditional_Asnmt;