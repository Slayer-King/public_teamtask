import React from 'react'
import logo from '../assets/logo teamtask sin palabras.png'
import '../assets/styles/Seccion_Registro.css'

export const Seccion_Registro = () => {
  return (
    <section id="register-section" className="registro-container">
      <div className="registro-form">
        <div className="registro-header">
          <img src={logo} alt="logo teamtask" className="registro-logo" />
          <h2>Registrarse</h2>
        </div>

        <form className="registro-formulario">
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button className="btn btn-principal">Registrarse</button>
          <button className="btn btn-google">Registrarse con Google</button>
          <button className="btn btn-microsoft">Registrarse con Microsoft</button>
        </form>
      </div>

      <div className="registro-info">
        <h2>Crea y organiza tus proyectos, tareas y equipos aquí</h2>
        <img 
          src="https://www.eude.es/wp-content/uploads/2018/05/Dise%C3%B1o-sin-t%C3%ADtulo-2021-05-11T165120.480.png" 
          alt="equipo trabajando"
        />
        <p>Únete a este entorno de alta productividad donde todos organizan sus proyectos e ideas.</p>
      </div>
    </section>
  )
}

