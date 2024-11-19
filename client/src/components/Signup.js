import React, {useState} from 'react'
import '../styles/Signup.css'

function Signup() {
  const[user,setUser] = useState(null)
  const signUp = ()=>{

  }
  return (
    <div className='signUp'>
      <h3>Sign Up</h3>
      <input placeholder='First Name' onChange={(event) => {
        setUser({...user,firstName:event.target.value})
      }}
      />

      <input placeholder='Last Name' onChange={(event) => {
        setUser({...user,lastName:event.target.value})
      }}
      />

      <input placeholder='Username' onChange={(event) => {
        setUser({...user,username:event.target.value})
      }}
      />

      <input placeholder='Email' onChange={(event) => {
        setUser({...user,email:event.target.value})
      }}
      />

      <input placeholder='Password' onChange={(event) => {
        setUser({...user,password:event.target.value})
      }}
      />

      <input placeholder='Confirm Password' onChange={(event) => {
        setUser({...user,confirmPassword:event.target.value})
      }}
      />

      <button onClick={signUp}>Sign Up</button>

    </div>
  )
}

export default Signup