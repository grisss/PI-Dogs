import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { postDog, filterTemperament } from "../actions";
import { Link } from "react-router-dom";
import '../styles/Create.css'

function validate(dogs){
let errors = {};
if (!dogs.name){
errors.name = "Se requiere un nombre"
} return errors
}

export default function DogCreate() {
const dispatch = useDispatch();
const history = useHistory();
const temperament = useSelector((state) => state.temperament);
    
const [errors,setErrors] = useState({});

const [dogs, setdog] = useState({
    name: "",
    temperament: [],
    image: "",
    min_height: '',
    max_height: '',
    min_weight: '',
    max_weight: '',
    life_span:''
});

useEffect(() => {
    dispatch(filterTemperament());
}, [dispatch]);

function handleSelect(e) {
    setdog({
    ...dogs,
    temperament: [...dogs.temperament, e.target.value],
    });
}
console.log(dogs)

function onInputChange(e) {
e.preventDefault();
setdog({
        ...dogs,
        [e.target.name]: e.target.value,
});
setErrors(
validate({
        ...dogs,
        [e.target.name]: e.target.value,
        })
);
}

function onSubmit(e) {
    e.preventDefault();
    dispatch(postDog(dogs));
    alert("Personaje creado con exito");
    setdog({
        name: "",
        temperament: [],
        image: "",
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span:''
    });
    history.push("/home");
    }

    return(
        <div>
            <form  className="container10" onSubmit={onSubmit}>
            <h3 className="titulo3" >Crea Tu perro</h3>
                <label className="name100">Nombe:</label>
                <input
                onChange={onInputChange}
                id="name"
                name="name"
                type="text"
                value={dogs.name}
                className="input"
                required
                autoFocus
                />
                {errors.name && <p className="error" >{errors.name}</p>}
                <label  className="name100">Imagen</label>
                <input
                onChange={onInputChange}
                name="image"
                type="text"
                value={dogs.image}
                className="input"
                required
                />
                <label className="name100">Altura Minima</label>
                <input
                onChange={onInputChange}
                type="number"
                value={dogs.min_height}
                name="min_height"
                placeholder=""
                className="input"
                required
                />
                <label className="name100">Altura Maxima</label>
                <input
                onChange={onInputChange}
                type="number"
                value={dogs.max_height}
                name="max_height"
                placeholder=""
                className="input"
                required
                />
                <label className="name100">Peso Minimo</label>
                <input
                onChange={onInputChange}
                type="number"
                value={dogs.min_weight}
                name="min_weight"
                placeholder=""
                className="input"
                />
                <label className="name100">Peso Maximo</label>
                <input
                onChange={onInputChange}
                type="nuber"
                value={dogs.max_weight}
                name="max_weight"
                placeholder=""
                className="input"
                />
                <label  className="name100">Esperanza de vida</label>
                <input
                onChange={onInputChange}
                type="text"
                value={dogs.life_span}
                name="life_span"
                placeholder=""
                className="input"
                />

                <select className="fle"  onChange={handleSelect}>
                {temperament.map((t)=>(
                        <option key={t.id} value={t.name}>{t.name}</option>
                        
                    ))}
                    
                </select>
                <ul>
                    <li className="option">{dogs.temperament.map((el)=>el)}</li>
                </ul>
                <Link to="/home">
                <button type="submit" className="atras-Crear">Atras</button><button className="atras-Crear" type="submit">Crear</button>
                </Link>
            </form>
        </div>
    )

}
