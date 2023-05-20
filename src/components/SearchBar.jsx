import { useState } from 'react';




export default function SearchBar(props) {

   const[id,setId]=useState("[]");

   const  handleChange= (event)=>{
      setId(event.target.value)
      //console.log("id capturado:",id)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} className="inputSearch"  />
         <button onClick={ ()=>{ props.onSearch(id)} }   className="botonSearch"  >Agregar</button>
      </div>
   );
}
