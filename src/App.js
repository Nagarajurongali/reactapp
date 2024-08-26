import React from 'react'
import './App.css'
import Login from './Components/Login'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Main from './Components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound'
import About from './Components/About'
import Services from './Components/Services'
import Hooks from './Data/Hooks'
import Dummy from './Data/Dummy'
import Onepage from './Components/Onepage'
import Compone from './Datapassing/Compone'
import CompA from './Context/CompA'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
            <Route path='/about/:id' element={<Onepage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/dummy' element={<Dummy />} />
          <Route path='/props' element={<Compone />} />
          <Route path='/context' element={<CompA />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App