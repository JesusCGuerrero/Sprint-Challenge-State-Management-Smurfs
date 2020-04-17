import React, { useState, useContext } from 'react'
import Axios from 'axios'
import {DataContext} from '../contexts/data'

const Form = () => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    })
    
    const submitSmurf = (e) => {
        e.preventDefault()
        Axios.post(`http://localhost:3333/smurfs`, newSmurf)
        .then(console.log('Post Successful', newSmurf))
    }

    const handleChanges = (input) => {
        setNewSmurf({...newSmurf, [input.target.name] : input.target.value})
    }

    return (
        <div className="smurfForm">
            <form onSubmit={submitSmurf}>
                <h2>Create A Smurf</h2>
                <input 
                type='text' 
                placeholder='name' 
                onChange={handleChanges}
                name='name'
                value={newSmurf.name}/>
                <input 
                type='text' 
                placeholder='age' 
                onChange={handleChanges}
                name='age'
                value={newSmurf.age}/>
                <input 
                type='text' 
                placeholder='height' 
                onChange={handleChanges}
                name='height'
                value={newSmurf.height}/>
                <br/>
                <input type='submit' className="submit"/>
            </form>
        </div>
    )
}

export default Form