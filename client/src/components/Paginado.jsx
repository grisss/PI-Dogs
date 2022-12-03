import React from "react";
import '../styles/Paginado.css'

export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumbers=[]

    for (let i =1; i<=Math.ceil(allDogs/dogsPerPage);i++){
        pageNumbers.push(i)
    }

    return(
        <nav className="numBox">
            {pageNumbers &&
            pageNumbers.map(number=>{
                return <div key={number}>
                    <button className="indexCont" onClick={()=>paginado(number)}>{number}</button>
                </div>
            })}
        </nav>
    )
}