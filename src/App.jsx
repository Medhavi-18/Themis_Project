import { useState } from 'react'
import './App.css'
import FullForm from './FullForm'


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
