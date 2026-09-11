import { useState } from 'react'
import './App.css'
import StatusBadge from './StatusBadge'
import SectionHeading from "./components/Headings";

function App() {
  return (
    <>
      <SectionHeading />
      <p>My goal is to master a professional React project workflow from component development to version control, team collaboration, and functional product.</p>
      <StatusBadge isOpenToWork={true}/>
    </>
  )
}

export default App
