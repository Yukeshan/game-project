import React,{useState} from 'react'
import '..//styles/Login.css';

function Login() {

const [username,setUsername]= useState("");
const [password,setPassword]= useState("");
const login = ()=>{

}

  return (
    <div className='login'>
      <h3>Login</h3>

      <input placeholder='Username' onChange={(event) => {
        setUsername(event.target.value);
      }}
      />

      <input placeholder='Password' onChange={(event) => {
        setPassword(event.target.value);
      }}
      />

      <button onClick={login}>Login</button>

    </div>
  )
}

export default Login