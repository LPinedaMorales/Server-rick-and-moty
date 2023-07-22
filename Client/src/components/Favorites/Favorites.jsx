import {connect}  from "react-redux"
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css"


const Favorites = ()=> {
    const myFavorites = useSelector((state) => state.myFavorites); 
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };
    const handleFilter= (event)=>{
        dispatch(filterCards(event.target.value))
    };

    return(
        <div className={style.fondo}>
           
            <select onChange={handleOrder}>
                <option value="D">Desendente</option>
                <option value="A">Acendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Genderless"}>Genderless</option>
                <option value={"unknown"}>unknown</option>

            </select>
            <div className={style.contenedor}>
            {
                myFavorites?.map(({id, name, status, species, gender, origin,
                     image})=>{
                    return(
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        gender={gender}
                        origin={origin}
                        species={species}
                        image={image}
                        />
                    )
                })
            }
            </div>
            
            
        </div>
    )
};


const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};
export default connect(mapStateToProps, null )(Favorites);