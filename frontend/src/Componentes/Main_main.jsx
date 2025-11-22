import React from 'react'
import { Seccion_Registro } from './Seccion_Registro'
import { Seccion_Caracteristicas } from './Seccion_Caracteristicas'
import { Seccion_informativa } from './Seccion_informativa'

export const Main_main = () => {
  return (
    <main>
        <Seccion_Registro></Seccion_Registro>
        <Seccion_Caracteristicas></Seccion_Caracteristicas>
        <Seccion_informativa></Seccion_informativa>
    </main>
  )
}
