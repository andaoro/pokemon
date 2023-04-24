import React from 'react'
import {BrowserRouter,Routes,Route,createBrowserRouter} from 'react-router-dom'
import App from '../App.jsx'
import { Pokemon } from '../views/Pokemon/Pokemon.jsx'

export const Main = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route default path='/' element={<App/>}/>
          <Route path='/pokemon/:name' element={<Pokemon/>}/>
        </Routes>
      </BrowserRouter>
  )
}
