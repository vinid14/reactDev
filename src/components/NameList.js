import React from 'react'
import Person from './Person'

function NameList() {
    const person=[
        {
            name:'Vinid',
            age:25,
            skill:'Angular'
        },
        {
            name:'Kumar',
            age:28,
            skill:'Java'
        },
        {
            name:'Pagolu',
            age:29,
            skill:'React'
        }
    ]
    const perstonList= person.map(person => <Person person={person}/>)
    return (
        <div> {perstonList}
    

        </div>
    )
}

export default NameList
