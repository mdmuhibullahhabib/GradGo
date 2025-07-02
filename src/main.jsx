import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Layouts/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>,
)
