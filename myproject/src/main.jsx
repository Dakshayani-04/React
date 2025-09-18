import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Function from './FunctionComponent.jsx'
import Header from'./header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Function />
    <Header/>
  </StrictMode>,
)
