import React from 'react'

function NameList() {
    const names=['vinid','kumar','pagolu']
    return (
        <div>
            {
              names.map( tempName => <h2>{tempName}</h2>)  
            }

        </div>
    )
}

export default NameList
