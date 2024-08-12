import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CreateUser.css';
const CreateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
 

  const submit = (e) => {
    e.preventDefault()
    const userData = { name, email, address }
    console.log('Submitting user data:', userData)
    axios.post('https://backend-nsk7.onrender.com/api/routes/create', userData)
      .then(result => {
        console.log('User created successfully:', result)
        
      })
      .catch(error => {
        console.error('There was an error creating the user!', error)
      })
  }

  return (
    <div>
      <center>
      <div>
        <form onSubmit={submit} class="form">
          <h2>SIGN UP</h2>
          <p>get faster updates and lead a healthy and fit life by knowledge!!</p>
          <p>let knowledge be the health</p>
          <div>
            <label>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="f1"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="f2"
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>password:</label>&nbsp;&nbsp;&nbsp;
            <input id="f3"
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br></br>
          <button type='submit' id="f4">Submit</button>
        </form>
      </div>
      </center>
    </div>
  )
}

export default CreateUser
