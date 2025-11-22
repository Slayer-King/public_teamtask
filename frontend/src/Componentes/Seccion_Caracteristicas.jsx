import React from 'react'
import iconoGestion from '../assets/gestion tareas.png'
import iconoEquipo from '../assets/colaboracion en equipo.png'
import iconoNotificacion from '../assets/notificacion inteligente.png'

export const Seccion_Caracteristicas = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "60px",
      padding: "40px 0"
    }}>
      
      {/* --- Gestión de Tareas --- */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "10px"
      }}>
        <img src={iconoGestion} alt="Gestión de tareas"
          style={{ height: "90px", filter: 'invert(1)' }} />
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Gestión de Tareas</p>
      </div>

      {/* --- Colaboración en Equipo --- */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "10px"
      }}>
        <img src={iconoEquipo} alt="Colaboración en equipo"
          style={{ height: "90px", filter: 'invert(1)' }} />
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Colaboración en Equipo</p>
      </div>

      {/* --- Notificación Inteligente --- */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "10px"
      }}>
        <img src={iconoNotificacion} alt="Notificación inteligente"
          style={{ height: "90px", filter: 'invert(1)' }} />
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Notificación Inteligente</p>
      </div>

    </div>
  )
}
