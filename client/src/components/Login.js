import React,{useState} from 'react'
import '..//styles/Login.css';

function Login() {

const [username,setUsername]= useState("");
const [password,setPassword]= useState("");
const login = ()=>{

}
const loginWithGoogle = () =>{

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
      <p>- OR -</p>
      <button onClick={loginWithGoogle}>Login with <b>GOOGLE</b></button>

    </div>
  )
}

export default Login