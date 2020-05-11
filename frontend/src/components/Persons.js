import React from 'react'

const Person = ({person, remove}) => (
    <li >Name: {person.name} Number: {person.number} <button name={person.id} onClick={remove}>remove</button></li>
)

const Persons = ({filterWith,persons,remove}) => {

    const flen = filterWith.length
    const fval = filterWith.toUpperCase()

    const name_filter = (v) => { 
        const vcut = v.name.substring(0,flen)
        return vcut.toUpperCase() === fval
    }

    return (
    <div>
        <ul>
        { persons.filter(name_filter).map( (person) => (
            <Person key={person.name} person={person} remove={remove}/>
            ) )
        }
        </ul>
    </div>)
}

export default Persons