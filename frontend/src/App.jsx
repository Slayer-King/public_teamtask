import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LoadinPag from './pag/LoadinPag'
import LoginPag from './pag/LoginPag'
import EntornoDeTrabajo from './pag/EntornoDeTrabajo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoadinPag/>}/>
          <Route path='/login' element={<LoginPag/>}/>
          {/*Ruta de desarrollo para entrar directo al entorno de trabajo */}
          <Route path='/wordspace' element={<EntornoDeTrabajo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
