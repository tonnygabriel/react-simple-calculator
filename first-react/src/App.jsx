import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExerciseOne from './exercises/facts'
import ReasonsWhy from './exercises/reasons'
import NavBar from './exercises/navigation'

function App() {
  return(
    <div>
      <NavBar />
      <ExerciseOne/>
      <img src={reactLogo} alt="" />
      <ReasonsWhy />
    </div>
  )
}

export default App
