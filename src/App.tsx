import './App.css'
import StatusBadge from './components/StatusBadge'
import SectionHeading from "./components/Headings";
import Card from './components/Card';
import ProjectCard from './components/ProjectCard';
import Product from './components/Product';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8 space-y-6 max-w-4xl mx-auto'>
      {/* main column */}
      <main className="flex flex-col gap-6">
          <Card className="text-center">
            <SectionHeading title="Lim Houykea"/>
            <p className="text-gray-700 mb-4">
              My goal is to master a professional React project workflow from component development to version control, team collaboration, and functional product.
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
                link="https://github.com/Houykea/jia-portfolio"
              />
            </div>
          </div>
        </main>

      {/* sidebar */}
      <aside>
        <Card>
          <SectionHeading title="About" />
          <p className="text-gray-500 text-sm">
            My name is Lim Houykea. A third-year student majoring in Information and Communication Technology. I'm open for freelance job ^^
          </p>
        </Card>
      </aside>

      {/* Product Section */}
      <Product />
    </div>
  )
}

export default App;