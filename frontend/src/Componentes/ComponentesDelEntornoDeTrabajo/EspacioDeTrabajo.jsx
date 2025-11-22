import React from 'react'
import {Inicio} from '../../pag/pagEspacioDeTrabajo/Inicio'
import { Tareas } from '../../pag/pagEspacioDeTrabajo/Tareas'
import { Proyectos } from '../../pag/pagEspacioDeTrabajo/Proyectos'
import { Equipos } from '../../pag/pagEspacioDeTrabajo/Equipos'
import { Calendario } from '../../pag/pagEspacioDeTrabajo/Calendario'

export const EspacioDeTrabajo = ({vista}) => {
  return (
    <div>
        {vista === "Inicio" && <Inicio />}
        {vista === "Tareas" && <Tareas/>}
        {vista === "Proyectos" && <Proyectos/>}
        {vista === "Equipos" && <Equipos/>}
        {vista === "Calendario" && <Calendario/>}

    </div>
  )
}
