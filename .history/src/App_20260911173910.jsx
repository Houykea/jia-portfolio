import './App.css'
import StatusBadge from './StatusBadge'
import SectionHeading from "./components/Headings";
import Card from './components/Card';

function App() {
  return (
    <div>

    <>
      <SectionHeading title="Lim Houykea"/>
      <p>My goal is to master a professional React project workflow from component development to version control, team collaboration, and functional product.</p>
      <StatusBadge isOpenToWork={true}/>
      
    </>
    </div>
  )
}

export default App;