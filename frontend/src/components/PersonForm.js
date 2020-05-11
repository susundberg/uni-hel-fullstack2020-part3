import React from 'react'





const PersonForm = ({state,change,submit}) => (
    <div>
        
        <form onSubmit={submit}>
            <div> Name: <input name="name" value={state.name} onChange={change}/> </div>
            <div> Number: <input name="number" value={state.number} onChange={change}/> </div> 
            <button type="submit">add</button>
        </form>
    </div>
)

export default PersonForm;