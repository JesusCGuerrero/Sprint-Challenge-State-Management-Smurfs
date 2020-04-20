import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios'

const MyModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    })
    
    const submitSmurf = (e) => {
        e.preventDefault()
        Axios.post(`http://localhost:3333/smurfs`, props.smurf)
        .then(console.log('Post Successful', props.smurf))
    }

    const handleChanges = (input) => {
        props.setSmurf({...props.smurf, [input.target.name] : input.target.value})
    }

      return (
        <div className='modal'>
          <Button className="editButton" color="danger" onClick={toggle}>Edit Smurf</Button>
          <Modal isOpen={modal} toggle={toggle} className='modalBox'>
            <ModalHeader className='editTitle' toggle={toggle}>Edit Smurf {props.smurf.id}</ModalHeader>
            <ModalBody >
                <form onSubmit={submitSmurf}>
                    <input 
                    type='text' 
                    placeholder='name' 
                    onChange={handleChanges}
                    name='name'
                    defaultValue={props.smurf.name}/>
                    <input 
                    type='text' 
                    placeholder='age' 
                    onChange={handleChanges}
                    name='age'
                    defaultValue={props.smurf.age}/>
                    <input 
                    type='text' 
                    placeholder='height' 
                    onChange={handleChanges}
                    name='height'
                    defaultValue={props.smurf.height}/>
                    <br/>
                    <input type='submit' className="submit"/>
                </form>
            </ModalBody>
          </Modal>
        </div>
      );
    }

export default MyModal;