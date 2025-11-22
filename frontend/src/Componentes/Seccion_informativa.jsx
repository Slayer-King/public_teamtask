import React from 'react'
import imagTest from '../assets/logo teamtask sin palabras.png'

export const Seccion_informativa = () => {
  return (
    <div>
        {/*Plantilla */}
        <div style={{display: "flex", flexDirection: "row"}}>
            <div>
                <p>Texto cautivador</p>
            </div>
            <div>
                <img src={imagTest} alt="" />
            </div>
        </div>
    </div>
  )
}
