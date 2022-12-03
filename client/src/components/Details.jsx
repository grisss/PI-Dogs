import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';
import {Link} from "react-router-dom"
import '../styles/Details.css'

export default function Detail(props){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props.match.params.id])

    const myDog=useSelector((state)=>state.detail)
    return(
        <div >
            {
                myDog.length>0?
                <div  className="container5">
                    <h2 className="detalle" >DETALLES</h2>
                    <img src={myDog[0].image} alt='' className="Dog-img"/>
                    <h3 className="Details">Nombre: {myDog[0].name}</h3>
                    <h3 className="Details">Temperamento:{myDog[0].temperament}</h3>
                    <h3 className="Details">Peso:{myDog[0].weight}</h3>
                    <h3 className="Details">Altura:{myDog[0].height}</h3>
                    <h3 className="Details">Años de vida: {myDog[0].life_span}</h3>
                
                </div>: <p className="loading">Espere...</p>
            }
            <div>
                <Link to="/home/">
                    <button className="volver" >Volver</button>
                </Link>
            </div>
        </div>
    )
}