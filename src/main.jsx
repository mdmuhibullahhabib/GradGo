import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max--screen-xl mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  </StrictMode>,
)
