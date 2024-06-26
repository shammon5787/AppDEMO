import React, { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {

  let heroData = [
    {text1: "PICTURE ONE", text2: "car for sale"},
    {text1: "PICTURE TWO", text2: "BMW car for sale"},
    {text1: "PICTURE ONE", text2: "vits car for sale"},
  ]

  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false)

  return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus} />
      <Navbar />
      <Hero 
      heroCount = {heroCount} 
      playStatus = {playStatus} 
      setplayStatus = {setheroCount} 
      setheroCount ={setheroCount} 
      heroData = {heroData[heroCount]}
      />
    </div>
  )
}

export default App