import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import AddData from './AddData'
import ViewData from './ViewData'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import CountUp from "react-countup"
import Tilty from 'react-tilty'
import Image from "./assets/react.svg"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path ="/" element={<Home />}/>
        <Route  path ="/addData" element={<AddData />}/>
        <Route  path ="/viewData" element={<ViewData />}/>

      </Routes>
      </BrowserRouter>
      {/* <CountUp end={52877} 
      duration={2}/>
      <Tilty>
        <img src={Image} width={100}/>
      </Tilty> */}


    </>
  )
}

export default App
