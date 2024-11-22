import React from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home'>
        <h1>BANANA MONKEYS</h1>
        <button onClick={() => navigate('/Login')}>Play</button>
        <button onClick={() => navigate('/signup')}>Signup</button>
        <button onClick={() => navigate('/Leaderboard')}>Leaderboard</button>

    </div>
  )
}

export default Home