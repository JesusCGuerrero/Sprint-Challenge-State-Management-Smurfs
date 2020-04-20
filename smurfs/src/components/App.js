import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Smurfs from './smurfs'

import {DataContext} from '../contexts/data'
import Form from "./form";

function App () {

  const [data, setData] = useState([])
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
})

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      setData(response.data)
      console.log('Response:', response)
    })
  }, [data])


  console.log('smurf:', smurf)

  return (
    <div className="App">
      <DataContext.Provider value={{data, setSmurf, smurf}}>
        <Form />
        <Smurfs setSmurf={setSmurf}/>
      </DataContext.Provider>
    </div>
  );
}

export default App;