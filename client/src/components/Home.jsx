import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { getDogs, filterDogsByTemperament, filterCreated ,filterByWeight , Sort} from "../actions";
import Card from "./Card";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import '../styles/Home.css'
import IMG from '../imagenes/pexels3.jpg'


function Home(){
    const dispatch= useDispatch();
    const allDogs=useSelector((state)=> state.dogs)
    const [/*orden*/, setOrder]= useState("")
    const[currentPage, setCurrentPage]=useState(1)
    const [dogsPerPage]=useState(8)

    const indexOfLastDog= currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch])

    function handleFilterTemperament(e){
        dispatch(filterDogsByTemperament(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterWeight(e){
        dispatch(filterByWeight(e.target.value))
    }

    function onSelectsChange(e){
        e.preventDefault();
        dispatch(Sort(e.target.value))
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    return(
        <>
        <div className="header"></div>
        <NavBar/>
        <SearchBar/>
        <div>
            <h1 className='Title2'>Dogs</h1>
        </div>

        <img className="imagen2" src={IMG} alt=''/>
        <div>
            <select className="A" onChange={onSelectsChange}>
                <option> A/Z:</option>
                <option value="ASCENDENTE">Ascendente</option>
                <option value="DESCENDENTE">Descendente</option>
            </select>
            <select className="A" onChange={handleFilterWeight}>
                <option value="Peso"> Peso</option>
                <option value="Heavy">Pesado</option>
                <option value="Light">Ligero</option>
            </select>
            <select className="A" onChange={(event) => handleFilterTemperament(event)}>
            <option value="temp">Temp</option>
            <option value="Playful">Jugueton</option>
            <option value="Composed">Sereno</option>
            <option value="Independent">Independiente</option>
            <option value="Dutiful">Obediente</option>
            <option value="Alert">Alerta</option>
            <option value="Loyal">Leal</option>
            <option value="Courageous">Valiente</option>
            <option value="Stubborn">Terco</option>
            <option value="Trainable">Entrenable</option>
            <option value="Protective">Protector</option>
            <option value="Curious">Curioso</option>
            <option value="Dignified">Digno</option>
            <option value="Hardworking">Trabajador</option>
            <option value="Receptive"> Receptivo</option>
            <option value="Energetic">Energetico</option>
            <option value="Assertive">Asertivo</option>
            <option value="Reserved">Reserved</option>
            <option value="Attentive">Atento</option>
            <option value="Bold">Negrito</option>
            <option value="Fearless">Audaz</option>
            <option value="Good-natured">Bonachon</option>
            <option value="Refined">Refinado</option>
            <option value="Calm">Calma</option>
            <option value="Territorial">Territorial</option>
            <option value="Patient">Paciente</option>
            <option value="Great-hearted">De gran corazon</option>
            <option value="Merry">Alegre</option>
            <option value="Tolerant">Tolerante</option>
            <option value="Opinionated">Dogmated</option>
            <option value="Charming">Encantador</option>
            <option value="Unflappable">Inperturbable</option>
            <option value="Adventurous">Aventurero</option>
            <option value="Friendly">Amistoso</option>
            <option value="Faithful">Fiel</option>
            <option value="Responsible">Responsable</option>
            <option value="Sweet-Tempered">Dulce templado</option>
            <option value="Self-assured">Seguro de si mismo</option>
            <option value="Eager">Ansioso</option>
            <option value="Spirited">Energico</option>
            <option value="Rugged">Escabroso</option>
            <option value="Amiable">Amable</option>
            <option value="Self-confidence">Auto confianza</option>
            <option value="Goog-tempered">Buen temperamento</option>
            <option value="Hard-working">Trabajo duro</option>
            <option value="Feisty">Luchador</option>
            <option value="Adaptable">Adaptable</option>
            <option value="Quick">Rapido</option>
            <option value="Suspicious">Sospechoso</option>
            <option value="Cunning">Astuto</option>
            <option value="Athletic">Atletico</option>
            <option value="Thoughtful">Reflexivo</option>
            <option value="Benevolent">Benevolente</option>
            <option value="Bubbly">Burbujeante</option>
            <option value="Diligent">Diligente</option>
            <option value="Aloof">A distancia</option>
            <option value="Wild">Salvaje</option>
            <option value="Outgoing">Extrovertido</option>
            <option value="Docile">Docil</option>
            <option value="Loving">Cariñoso</option>
            <option value="Affectionate">Afectuoso</option>
            <option value="Lively">Dinamico</option>
            <option value="Companionable">Sociable</option>
            <option value="Joyful">Alegre</option>
            <option value="Agile">Agil</option>
            <option value="Determined">Determinado</option>
            <option value="Easygoing">De trato facil</option>
            <option value="Rational">Racional</option>
            <option value="Gay">Gay</option>
            <option value="Bossy">Mandon</option>
            <option value="Respectful">Respetuoso</option>
            <option value="Clever">Inteligente</option>
            <option value="Spunky">Guaperas</option>
            <option value="Fast">Rapido</option>
            <option value="Vigilant">Vigilante</option>
            <option value="Fun-loving">Amante de la diversion</option>
            <option value="Happy">Feliz</option>
            <option value="Confident">Confiado</option>
            <option value="Responsive">Sensible</option>
            <option value="Gentle">Amable</option>
            <option value="Dominant">Dominante</option>
            <option value="Obedient">Obediente</option>
            <option value="Tenacious">Tenaz</option>
            <option value="Steady">Firme</option>
            <option value="Reliable">De confianza</option>
            <option value="Fierce">Intenso</option>
            <option value="Watchful">Vigilante</option>
            <option value="Cheerful">Alegre</option>
            <option value="Trusting">Confiado</option>
            <option value="Familial">Familiar</option>
            <option value="Bright">Brillante</option>
            <option value="Stable">Estable</option>
            <option value="Inquisitive">Inquisitivo</option>
            <option value="Sociable">Sociable</option>
            <option value="Mischievous">Travieso</option>
            <option value="Boisterous">Bullicioso</option>
            <option value="Self-important">Importante</option>
            <option value="Extroverted">Extrovertido</option>
            <option value="Active">Activo</option>
            <option value="Clownish">Clownesco</option>
            <option value="Intelligent">Inteligent</option>
            <option value="Brave">Bravo</option>
            <option value="Devoted">Dedicado</option>
            <option value="Strong Willed">Voluntad fuerte</option>
            <option value="Kind">Kind</option>
            <option value="Proud">Orgulloso</option>
            <option value="Cautious">Precavido</option>
            <option value="Even tempered">Incluso templado</option>
            <option value="Excitable">Excitable</option>
            <option value="Hardy">Resistente</option>
            <option value="Sensitive">Sensible</option>
            <option value="Lovable">Adorable</option>
            <option value="Keen">Interesado</option>
            <option value="Powerful">Poderoso</option>
            <option value="Quiet">Tranquilo</option>
            <option value="Strong">Fuerte</option>
            <option value="Vocal">Vocal</option>
            <option value="People-Oriented">Orientado a las personas</option>
            <option value="Cooperative">Cooperativo</option>
            <option value="Trustworthy">Confiable</option>
            <option value="Generous">Generoso</option>
            <option value="Cat-like">Como el gato</option>
            <option value="Sturdy">Robusto</option>
            <option value="Aggressive">Agresivo</option>
            <option value="Willful">Deliberado</option>
            </select>
            <select className="A" onChange={handleFilterCreated}>
                <option value={"Todos"}>Todos</option>
                <option value={"Creados"}>Creados</option>
                <option value={"Existentes"}>Existentes</option>
            </select>
            <div className="container">
                {currentDogs?.map((el)=>{
                    return(
                        <div>
                            <Link className="Sub" to={"/home/"+el.id}>
                                {
                                <Card
                                name={el.name} image={el.image} key={el.key}
                                temperament={el.temperament} weight={el.weight}
                                />
                                }
                            </Link>
                        </div>
                    )
                })}
            </div>
            <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
            />
        </div>
        </>
    )
}

export default Home;