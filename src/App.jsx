import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <About/>
    <Projects/>
    <Contact/>
    </>  
  )
}

export default App
