import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false 
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
                
        //         <div> Welcome Vinid</div>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
                
        //         <div> Welcome Guest</div>
        //         </div>
        //     )
        // }

        let message
        if(this.state.isLoggedIn){
            message=
                
                  <div> Welcome Vinid</div>
        }else{
            message=
                
                  <div> Welcome Guest</div>
        }
       return <div>{message}</div>

    }
}

export default UserGreeting
