import React from 'react'
import Person from './Person'

function NameList() {
    const person=[
        {
            id:1,
            name:'Vinid',
            age:25,
            skill:'Angular'
        },
        {
            id:2,
            name:'Kumar',
            age:28,
            skill:'Java'
        },
        {
            id:3,
            name:'Pagolu',
            age:29,
            skill:'React'
        }
    ]
    const perstonList= person.map(person => <Person key={person.id} person={person}/>)
    return (
        <div> {perstonList}
    

        </div>
    )
}

export default NameList
