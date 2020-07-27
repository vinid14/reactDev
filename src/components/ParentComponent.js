import React, { Component } from 'react'
import ChildComponet from './ChildComponet'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }
        this.greetParent=this.greetParent.bind(this)
        }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponet greetHandler ={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
