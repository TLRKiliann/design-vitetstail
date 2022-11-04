import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Login } from './Pages/Login'
import { MyCarousel } from './Pages/MyCarousel'
import { Animation } from './Pages/Animation'
import { About } from './Pages/About' 
import { Profile } from './Pages/Profile' 
import { Settings } from './Pages/Settings' 
import { SignOut } from './Pages/SignOut' 
import './App.scss'

const App:React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/carousel' element={<MyCarousel />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signout' element={<SignOut />} />
      </Routes>
    </div>
  )
}

export default App
