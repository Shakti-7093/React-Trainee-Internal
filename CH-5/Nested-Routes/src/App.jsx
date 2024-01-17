import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from './Components/Protected'
import Login from './Components/Login'
import Hardik from './Components/Hardik'
import Pavan from './Components/Pavan'
import Error from './Components/Error'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<Protected Component={About} />} />
          <Route path='/contact' element={<Protected Component={Contact} />} >
            <Route path='hardik' element={<Hardik/>}/>
            <Route path='pavan' element={<Pavan/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App