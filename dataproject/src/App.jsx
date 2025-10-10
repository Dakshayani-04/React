import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import AddData from './AddData'
import ViewData from './ViewData'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

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
    </>
  )
}

export default App
