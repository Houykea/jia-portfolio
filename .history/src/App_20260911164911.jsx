import { useState } from 'react'

import './App.css'
import StatusBadge from './StatusBadge'

function App() {
  return (
    <>
      <h1>Lim Houykea</h1>
      <p>My goal is to master a professional React project workflow from component development to version control, team collaboration, and functional product.</p>
      <StatusBadge isOpenToWork={true}/>
    </>
  )
}

export default App
