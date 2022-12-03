import React from "react";
import {Link} from "react-router-dom"
import IMG from '../imagenes/pexels1.jpg'
import '../styles/LandingPage.css'

export  default function LandingPage(){
    
    return(
        <div>
            <h1 className="title1">BIENVENIDOS</h1>
            <div>
                <Link to= '/home'>
                    <button className="button">INGRESAR</button>
                </Link>
                <img  className="lorem" src={IMG} alt=''/>
                <hr className="h"/>
            </div>
        </div>
    )
}