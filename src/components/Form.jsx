import { useState } from "react";
import validation from "../validation";
import style from "../ccsModules/Form.module.css";
import axios from 'axios';
const URL = 'http://localhost:3001/rickandmorty/login/';

function Form({login}){

//console.log("mi hpta css",style);

//Estados
const[userData,setUserData]=useState(
    {
        email:"",
        password:""
    }
);
const[errors,setErrors]=useState(
    {
        // email:"",
        // password:""
    }
);

//Funciones
const handleChange=(event)=>{
    const propiedades= event.target.name
    const valor= event.target.value

    setUserData({...userData,[propiedades]:valor})
    setErrors( validation({...userData,[propiedades]:valor}) )
    // console.log( validation({...userData,[propiedades]:valor}) )
}

const handleSubmit=(event)=>{
    event.preventDefault()
    login(userData);
}

const createNewUser=async(event)=>{
    event.preventDefault()
    for(let property in errors){
        if(errors[property]) return alert ("Faltan datos")
    }

    try {
         await axios.post(`${URL}`,userData)

    } catch (error) {
        console.log("Error: ",error.response.data)
        return alert(error.response.data)
    }
    
    console.log("User created")
    alert("User created")
    //dispatch(readAllRecipes() )   //Actualizo mis recipes
}
//Renderizado
return(
        <div >
            
        <form action=""  className="login-form" >
            <>
            <img src="login.png" className={style.loginImage} alt="login"  />
            <br />
            <label htmlFor="">Email:</label>
            <input type="text" value={userData.email} onChange={handleChange} name="email" />
            <p>{errors.email} </p>
            </>
            <>
            <label htmlFor="">Password:</label>
            <input type="text" value={userData.password} onChange={handleChange} name="password"/>
            <p>{errors.password} </p>
            </>

            <button type="submit" onClick={handleSubmit} >Login</button>
            <button onClick={createNewUser} >Create User</button>
        </form>
        </div>
)

}

export default Form;