import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const { id }=useParams();
    const[character,setCharacter]= useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              //console.log("Este personaje me llego: ",data)
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    if(character.name){ 
    return(
        <div className="personaje">
            <div className="datos">
            <h1>{character.name}</h1>
            <br />
            <br />
            <h2>Staus  : {character.status} </h2>
            <h2>Gender : {character.gender} </h2>
            <h2>Specie : {character.species} </h2>
            <h2>Origin : {character.origin.name} </h2>
            <img src={character.image} alt={character.name} srcSet="" />
            </div>
        </div>
    )
    }
}

export default Detail;