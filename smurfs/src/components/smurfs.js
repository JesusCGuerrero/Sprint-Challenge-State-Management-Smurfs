import React, { useContext } from 'react';
import { DataContext } from '../contexts/data'
import Card from './card'

const Smurfs = (props) => {

    const {data} = useContext(DataContext)

    return (
        <div>
            {data.map(item => {
               return <Card key={item.id} smurf={item} setSmurf={props.setSmurf}/>
            })}
        </div>
    )
}

export default Smurfs