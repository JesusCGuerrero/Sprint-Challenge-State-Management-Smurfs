import React, {useContext} from 'react';
import MyModal from './modal'

const Card = (props) => {

    return(
        <div className="smurfCard">
            <h1>Smurf: {props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
            <MyModal smurf={props.smurf} setSmurf={props.setSmurf}/>
        </div>
    )
}

export default Card