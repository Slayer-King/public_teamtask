import React from 'react'
import '../assets/styles/Header.css'
import logo_teamtask from '../assets/logo teamtask sin palabras.png'
import { useNavigate } from 'react-router-dom'

export const Header_Main = () => {
  const navigate = useNavigate()
  const handleClick = () => {
        navigate("/login")
      }
  const handleRegisterClick = () => {
    const registerSection = document.getElementById('register-section')
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //evento del boton de desarrollo que lleva directo al entorno de trabajo
  const handleDevClick = () => {
    navigate("/wordspace")
  }
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo_teamtask} alt="TeamTask Logo" className="logo" />
        <h1 className="title">teamtask</h1>
      </div>
      <div className="button-container">
        <button onClick={handleClick} className="btn" style={{background: "#00BEAF"}}>Iniciar Sesión</button>
        <button onClick={handleRegisterClick} className="btn" style={{background: "#0097E8"}}>Registrarse</button>
        {/*boton de desarrollo lleva directo al entorno de trabajo */}
        <button onClick={handleDevClick}>dev entorno</button>
      </div>
    </header>
  )
}
