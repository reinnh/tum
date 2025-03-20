import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import TummisLogin from './pages/login'
import Home from './pages/home'
import { LoginIntranet } from './pages/portals/staffs/intranet'
import { HrLoginComponent } from './pages/portals/staffs/hr'
import { ElearningLoginPage } from './pages/portals/eLearning'
import { OnlineclearanceLoginPage } from './pages/portals/onlineClearance'
import { IndustrialAttacmentLoginPage } from './pages/portals/industrialAttachment'
import Business from './pages/accademics/schools/business'
import { Humanity } from './pages/accademics/schools/humanity'
import Helth from './pages/accademics/schools/faculty'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tummis' element={<TummisLogin/>}/>
        <Route path='/intranet' element={<LoginIntranet/>}/>
        <Route path='/hr' element={<HrLoginComponent/>}/>
        <Route path='/elearning' element={<ElearningLoginPage/>}/>
        <Route path='/onlineclearance' element={<OnlineclearanceLoginPage/>}/>
        <Route path='/iattachment' element={<IndustrialAttacmentLoginPage/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/humanity' element={<Humanity/>}/>
        <Route path='/health' element={<Helth/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
