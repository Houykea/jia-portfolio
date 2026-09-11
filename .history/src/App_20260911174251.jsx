import './App.css'
import StatusBadge from './StatusBadge'
import SectionHeading from "./components/Headings";
import Card from './components/Card';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      {/* main column */}
      <main className="flex flex-col gap-6">
          <Card>
            <h1 className="text-gray-900 text-2xl font-bold mb-2">Your Name Here</h1>
            <p className="text-gray-700 mb-4">
              My goal for this course is to build real projects and learn Git properly.
            </p>
            <StatusBadge isOpenToWork={true} />
          </Card>

          <div>
            <SectionHeading title="Projects" />
            <div className="flex flex-col md:flex-row gap-4">
              <ProjectCard
                title="Portfolio Site"
                status="In Progress"
                link="https://github.com/Houykea/jia-portfolio"
              />
              <ProjectCard
                title="Weather App"
                status="Completed"
                link="https://github.com/yourusername/weather-app"
              />
            </div>
          </div>
        </main>

      {/* sidebar */}
      <aside>
        <Card>
          <SectionHeading title="About" />
          <p className="text-gray-500 text-sm">
            A short bit about yourself goes here.
          </p>
        </Card>
      </aside>


      <SectionHeading title="Lim Houykea"/>
      <p>My goal is to master a professional React project workflow from component development to version control, team collaboration, and functional product.</p>
      <StatusBadge isOpenToWork={true}/>
    </div>
  )
}

export default App;