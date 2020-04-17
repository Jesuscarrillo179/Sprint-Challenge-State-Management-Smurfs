import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createSmurf, getSmurfs } from '../actions/smurfActions';
import Smurfs from './Smurfs';
import axios from 'axios';

const SmurfForm = props => {
  console.log(props)
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    console.log("hey")
    props.getSmurfs()
    }, [])

  const [form, setForm] = useState({name:'', age:0 , height:'' })

  const onSubmit = e => {
    e.preventDefault()
    props.createSmurf(form)
  }
  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }
    return(
          <div>
            {props.smurfs.map(item => (
              <Smurfs item={item} name={item.name} age={item.age} height={item.height}/>
            ))}
            <form onSubmit={(e) => {onSubmit(e)}}>
              <label>Name</label>
              <input type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              />
              <br/>
              <label>Age</label>
              <input type="number" 
              name="age" 
              value={form.age}
              onChange={handleChange}
              />
              <br/>
              <label>height</label>
              <input type="text" 
              name="height" 
              value={form.height}
              onChange={handleChange}/>
              <br/>
            <button type="submit">Make a Smurf!</button>
          </form>
        </div>
    )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { createSmurf, getSmurfs })(SmurfForm);