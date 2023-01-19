import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className="App">
      <Background />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
