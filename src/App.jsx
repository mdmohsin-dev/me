
import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar></Navbar>
      <div className='max-w-350 mx-auto'>
        <Banner></Banner>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
