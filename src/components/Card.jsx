import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../redux/actions";
import { useState,useEffect } from "react";

export  function Card({id,name,status,species,gender,origin,image,onClose,removerFavoritos,addFavoritos,myFavorites,allCharacters}) {

   let [isFav,setIsFav]=useState(false)

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         //console.log("id a eliminar",id)
         removerFavoritos(id);
      }
      else{
         setIsFav(true); //Dudas aqui

         if (id && !myFavorites.find( (character)=>character.id===id   )) {
            //no encontro repetido 
            addFavoritos({
               id:id,
               name:name,
               status:status,
               species:species,
               gender:gender,
               origin:origin,
               image:image,
               onClose:onClose,
               removerFavoritos:removerFavoritos,
               //addFavoritos:addFavoritos
            })

         } else { //Ya hay un fav
            window.alert('Ya esta en favoritos');
         }
         
         
      }
   }

   useEffect(() => {
      allCharacters.forEach((fav) => {
         
         if (fav.id === Number(id) ) {
            setIsFav(true);
         }
      });
      // for (let i = 0; i< myFavorites.length; i++) {
      //    if(myFavorites[i].id===id ) setIsFav(true)
      // }
   }, [allCharacters,id]);

   //console.log("Esta funcion me llega a card",onClose," con este id: ",id)
   return (
      <div className="cuadro">
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={ ()=>{onClose(id)}} className="buttonClose"   >X</button>
         <br />
         {/* <h2>key: {id} </h2> */}
         <img src={image} alt='' />
         <h2> <Link to={`/detail/${id}`} >{name}</Link></h2>
         <h2>Status: {status} </h2>
         <h2>Species: {species} </h2>
         <h2>Gender: {gender} </h2>
         <h2>Origin: {origin} </h2>
         <hr />
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavoritos:function(character){
         dispatch(addFav(character))
      },
      removerFavoritos:function(id){
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites,
      allCharacters:state.allCharacters
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)