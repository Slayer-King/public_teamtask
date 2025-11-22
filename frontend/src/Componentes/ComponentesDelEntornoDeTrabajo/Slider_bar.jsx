import React from 'react'
import logo from '../../assets/logo teamtask sin palabras.png'
import { GoHome } from "react-icons/go"
import { BiTask } from "react-icons/bi"
import { PiProjectorScreenBold } from "react-icons/pi"
import { AiOutlineTeam } from "react-icons/ai"
import { FaCalendarAlt } from "react-icons/fa"

export const Slider_bar = ({setVista}) => {


  return (
    <div style={{background: "#1A1A1A",display: 'flex', flexDirection: "column", gap: "20px", padding: "20px"}}>
        <div style={{display: 'flex', flexDirection: 'row-reverse', gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{fontSize: "18px", fontWeight: "700"}}>Team Task</p>
            <img src={logo} alt="logo Team Task" style={{height: '70px'}} />
        </div>

        <button onClick={() => setVista("Inicio")}>
            <GoHome />
            Inicio
        </button>

        <button onClick={() => setVista("Tareas")}>
            <BiTask/>
            Mis Tareas
        </button>

        <button onClick={() => setVista("Proyectos")}>
            <PiProjectorScreenBold/>
            Proyectos
        </button>

        <button onClick={() => setVista("Equipos")}>
            <AiOutlineTeam/>
            Equipos
        </button>

        <button onClick={() => setVista("Calendario")}>
            <FaCalendarAlt/>
            Calendario
        </button>  
    </div>
  )
}
