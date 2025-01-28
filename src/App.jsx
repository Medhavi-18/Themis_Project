import { useState } from 'react'
import './App.css'
import User from './User'
import DoctorForm from './DoctorForm'
import CompetitorData from './CompetitorData'
import FullForm from './FullForm'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <User/>

        <DoctorForm/>

        <CompetitorData/> */}

           {/* <Home/> */}

        <FullForm/>

       
        
        
        
    </>
  )
}

export default App
