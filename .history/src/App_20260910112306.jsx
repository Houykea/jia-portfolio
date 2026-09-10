import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StatusBadge from './StatusBadge'

function App() {
  return (
    <>
      <h1>Lim Houykea</h1>
      <p>My goal is to master a professional React project workflow from component development to version control, team collaboration, and deployable .</p>
      <StatusBadge isOpenToWork={true}/>
    </>
  )
}

export default App
