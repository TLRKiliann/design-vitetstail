import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar'

import { Login } from './Pages/Login'
import { DemoCarousel } from './Pages/Carousel'
import { Animation } from './Pages/Animation'
import { About } from './Pages/About' 

import './App.scss'

const App:React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/carousel' element={<DemoCarousel />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
