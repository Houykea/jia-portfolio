import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StatusBagde from './StatusBadge'

function App() {
  return (
    <>
      <h1>Lim Houykea</h1>
      <p>My goal is to master a whole flow of project mangement with React.</p>
      <StatusBadge is/>
    </>
  )
}

export default App
