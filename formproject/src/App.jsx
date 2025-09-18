import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form>
      <center>
      <Form/>
      </center>
    </form>
    </>
  )
}

export default App
