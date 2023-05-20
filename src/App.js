import './App.css';
import Cards from './components/Cards.jsx';
import { Favorites } from './components/Favorites';
import { useState } from 'react';
import Nav from './components/Nav';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import {  Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
   //Variables
   const location=useLocation();
   const navigate = useNavigate();
 
   //Estado de este componente, characters es un array que contiene los personajes a mostrar
   const[characters,setCharacters]=useState([]);
   const[access,setAccess]=useState(false);

   //Funcion que se hereda a Nav y luego a SearchBar, segun el id introducido, se hace una peticion al personaje con ese id, sino esta repetido se guarda en characters
   async function onSearch(id) {
      
      // axios(`http://localhost:3001/rickandmorty/character/${id}`)     //falta hacer la logica para repetidos y para error not found
      //    .then( ( { data} ) => {
      //       console.log("este dato me da el server: ",data)
      //    if (data.name && !characters.find( (character)=>character.id===data.id   )) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } 
      //    else{
      //       alert('Hubo un error');
      //    }
      // });
      try {
         const response= await axios(`https://rick-and-morty-server-production-ee1d.up.railway.app/rickandmorty/character/${id}`)
         const {data}=response
            if (data.name && !characters.find( (character)=>character.id===data.id   )) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
            else{
               alert('Hubo un error');
            }
      } catch (error) {
         console.log(error);
         window.alert("No hay personajes con este id")
      }
      
   }
   //Antes de express
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   //Con express
   async function login(userData) {
      const { email, password } = userData;
      const URL = 'https://rick-and-morty-server-production-ee1d.up.railway.app/rickandmorty/login/';
      //console.log("mi axios ",URL + `?email=${email}&password=${password}` )
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    console.log(data)
      //    access && navigate('/home');
      // });
      try {
         const response= await axios(URL + `?email=${email}&password=${password}`)
         const {data}=response;
         setAccess(data);
            console.log(data)
            data.access && navigate('/home');

      } catch (error) {
         alert("Credenciales invalidas")
      }
      
   }

   function logout(){
         setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);
   //Funcion con captura de error por id fuera del rango
   // function onSearch(id) {
   //    axios(https://rickandmortyapi.com/api/character/${id})
   //       .then(({ data }) => {
   //          setCharacters((oldChars) => [...oldChars, data])
   //       })
   //       .catch(function (error) {
   //          console.log(error);
   //          window.alert('¡No hay personajes con este ID!')
   //       })
   // }

   //Funcion que se hereda a Card para eliminar tarjeta x, se hace un filtro y solo se deja los personajes sin la id seleccionada por la card donde se ejecuto la funcion
    function onClose(id) {
      const newCharacters = characters.filter(character => character.id !== id);
      setCharacters(newCharacters);
    }


    //Renderizacion de este componete
   return (
      <div className='App' style={{padding:'25px'} }>
            
          { location.pathname!=="/" && <Nav onSearch={onSearch} logout={logout} /> } 
         <Routes>
         
            <Route path="/" element={<Form login={login}  />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
            
         {/* <div>
            <Nav onSearch={onSearch}  />
            <hr />  
            <Cards characters={characters} onClose={onClose} />
         </div>
         <hr />        */}
      </div>
      
      );
}

export default App;
