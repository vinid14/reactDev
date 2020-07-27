import React from 'react'

function ChildComponet(props) {

    return (
        <div>
            <button onClick={props.greetHandler}> Greet Parent</button>
        </div>
    )
}

export default ChildComponet
