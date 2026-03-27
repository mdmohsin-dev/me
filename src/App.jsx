import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechCard from './components/TechCard'

function App() {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <TechCard></TechCard>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
