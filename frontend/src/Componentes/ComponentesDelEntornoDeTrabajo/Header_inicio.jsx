import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { IoIosNotificationsOutline } from "react-icons/io"

export const Header_inicio = () => {
  return (
    <div style={{position: "fixed", top: 0, left: 250, right: 0, height: "60px", backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
        <button>
            <FaSearch />
        </button>
        <input style={{width: "50%" , height: "50%", borderRadius: "10px"}} type="text" placeholder="Buscar..." />
        <img src="" alt="Avatar" />
        <button>
            <IoIosNotificationsOutline/>
        </button>
    </div>
  )
}
