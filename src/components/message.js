import React, { Component } from 'react'

class Message extends Component{

constructor(){
    super()
    this.state={
        message :'Welcome Vistior'
    }
}

changeMethod(){
    this.setState({
        message:'Thankyou for subscribing'
    })
}

 render(){
     return(
         <div>
         <h1> {this.state.message}</h1>
         <button onClick={()=>this.changeMethod()}>  Subscribe</button>
         </div>
     )
 }
}
export default Message