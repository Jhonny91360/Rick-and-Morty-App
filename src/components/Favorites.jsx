import Card from "./Card"
import {  useSelector } from "react-redux"
import React, { useState,useEffect } from "react"
import { filterCards,orderCards,readAllFav } from "../redux/actions"
import { useDispatch } from "react-redux"

export function Favorites(){
    const [aux,setAux]=useState(false);

    var misFavoritos= useSelector( (state)=>state.myFavorites  )
    

    //console.log("estos son los favoritos",misFavoritos)

    const dispatch=useDispatch();

    const handleOrder=(event)=>{
        setAux(!aux)
        dispatch(orderCards(event.target.value))
    }

    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }
    //////////////////// OJITO INTENTO DE MOSTRAR FAV DESDE EL INICIO//////////////////////////
    useEffect(() => {
        //console.log("Use effect del componente Favorites")
        dispatch(readAllFav());
        // for (let i = 0; i< myFavorites.length; i++) {
        //    if(myFavorites[i].id===id ) setIsFav(true)
        // }
     }, [dispatch]);
    /////////////////////////////////////////////////////////////
    return(
        <div>
            <select name="" id="orden" className="select" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="" id="genero" className="select" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        <div className="contenedor" >{ 
            misFavoritos.map( favorito=>{
            return <Card
            key={favorito.id}
            id={favorito.id}
            name={favorito.name}
            status={favorito.status}
            species={favorito.species}
            gender={favorito.gender}
            origin={favorito.origin.name}
            image={favorito.image}
            />
            })   
            
            
        }</div>

        </div>
    )
}

export function mapStateToProps(state){
    return{
       myFavorites:state.myFavorites
    }
 }

//export default connect(mapStateToProps,null)(Favorites)