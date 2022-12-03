import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

export default function NavBar(){
    return(
        <header id="navegador">
            <div>
                <Link className="Dog" to="/create">Crear raza</Link>
            </div>
        </header>
    )
}