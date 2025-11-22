import React, { useState } from "react";
import { EspacioDeTrabajo } from "../Componentes/ComponentesDelEntornoDeTrabajo/EspacioDeTrabajo";
import { Header_inicio } from "../Componentes/ComponentesDelEntornoDeTrabajo/Header_inicio";
import { Slider_bar } from "../Componentes/ComponentesDelEntornoDeTrabajo/slider_bar";

export default function EntornoDeTrabajo() {
    const [vista, setVista] = useState("Inicio");
    return (
       <div style={{display: "flex", flexDirection:"row", height: "100%", width: "100%" , minWidth: "100vw", minHeight: "100vh"}}>
            <div style={{background: "#1A1A1A" ,width: "250px", height: "100%", position: "fixed", left: 0, top: 0}}>
                <Slider_bar setVista={setVista}/>
            </div>
            
            <div style={{display: "flex", flexDirection:"column", width: "100%", minHeight: "800px", padding: "20px"}}>
                <Header_inicio/>
                <EspacioDeTrabajo vista = {vista}/>
            </div>
            
       </div> 
    )
}