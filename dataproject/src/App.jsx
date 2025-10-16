import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './Store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import AddData from './AddData'
import ViewData from './ViewData'
import MoreDetails from './MoreDetails'

function App() {
  const [Datalist, setDatalist] = useState([]);
  return (
    <>
      <BrowserRouter>
      <Header />
        <Store.Provider value={{ Datalist, setDatalist }}>
          <Routes>
            <Route path="/" element={<AddData />}></Route>
            <Route path='/AddData' element={<AddData />}></Route>
            <Route path="/ViewData" element={<ViewData />}></Route>
            <Route path="/MoreDetails/:ID" element={<MoreDetails />}></Route>
          </Routes>
        </Store.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
