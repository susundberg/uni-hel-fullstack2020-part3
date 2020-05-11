import React  from 'react'


const Filter = ({text,change}) => (
    <div>
        <p>Filter show with</p>
        <form >
            <input value={text} onChange={ change }/>
        </form>
    </div>
)

export default Filter;
