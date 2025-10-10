import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './CardMain'
import Function from './FunctionComponent'
import myimage from './assets/react.svg';
// import Home from './Home'
// import Services from './Services'
// import Contact from './Contact'
// import PageNotFound from './PageNotFound'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App
