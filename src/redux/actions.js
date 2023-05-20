//Antes de express
// export const addFav=(character)=>{
//     return{
//         type:'ADD_FAV',
//         payload:character
//     }
// }
//Con express
import axios from "axios";

export const readAllFav= ()=>{
    
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const response= await axios.get(endpoint)
         const data=response.data.allFavorites
         return dispatch({type: 'READ_FAV',payload: data,});
      } catch (error) {
         console.log("error al leer favoritos ",error) 
      }
      
    };
}

export const addFav =  (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      //  axios.post(endpoint, character).then(({ data }) => {
      //     return dispatch({type: 'ADD_FAV',payload: data,});
      //  });
      try {
         const response= await axios.post(endpoint, character)
         const data=response.data.allFavorites
         
         return dispatch({type: 'ADD_FAV',payload: data,});
         
      } catch (error) {
         console.log("error al agregar fav ",error) 
      }
      
    };
 };

 ////

//Antes de express
// export const removeFav=(characterId)=>{
//     console.log("action elimina a:",characterId)
//     return{
//         type:'REMOVE_FAV',
//         payload:characterId
//     }
   
// }
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      //  axios.delete(endpoint).then(({ data }) => {
      //     return dispatch({type: 'REMOVE_FAV',payload: data,});
      //  });
      try {
         const response= await axios.delete(endpoint)
         const data=response.data.allFavorites
         //console.log("Respuesta del server al eliminar favoritos: ",data)
         return dispatch({type: 'REMOVE_FAV',payload: data,})
      } catch (error) {
        console.log("error al eliminar ",error)      
      }
      
    };
 };



export const filterCards=(gender)=>{
    return{
        type:"FILTER",
        payload:gender
    }
}

export const orderCards=(orden)=>{
    return{
        type:"ORDER",
        payload:orden
    }
    

}

