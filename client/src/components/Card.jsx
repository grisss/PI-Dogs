import React from "react";
import '../styles/Card.css'

export default function Card({name,image,temperament,weight}){
    return(
        <div className="card">
            <img className="imagen"  src={image} alt=''/>
            <ul>
                <option className="temp">{temperament}</option>
            </ul>
            <ul>
                <option className="name1">{name}</option>
            </ul>
            <ul>
                <option className="weight1">{weight}</option>
            </ul>
        </div>
    )
}