
import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import TechCard from './components/TechCard'

function App() {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar></Navbar>
      
        <Banner></Banner>
    
      <TechCard></TechCard>
      <Contact></Contact>
    </div>
  )
}

export default App
