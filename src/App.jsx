import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import LatestProjects from './components/LatestProjects'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechCard from './components/TechCard'

function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor/>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <TechCard></TechCard>
      <Projects></Projects>
      <LatestProjects></LatestProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
