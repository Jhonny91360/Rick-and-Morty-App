function validation(userData){

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const regexPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
 const regexPasswordSeisCaracteres= /^.{6,10}$/
 const regexPasswordNumero= /^(?=.*\d).+$/ 
//   const validate=(userData)=>{
  const errors={}

  if(!userData.email) errors.email ="Se requiere un nombre"
  else if(!regexEmail.test(userData.email)) errors.email="Debe ser un correo electrónico" 
  else if(userData.email.length >35 ) errors.email="El nombre de usuario no puede tener más de 35 caracteres"

  //if( !(userData.password.length>5 && userData.password.length<11) ) errors.password="La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
  if( !regexPasswordSeisCaracteres.test(userData.password) ) errors.password= "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
  else if ( !regexPasswordNumero.test(userData.password) ) errors.password= "La contraseña tiene que tener un numero"
  
  return errors;
//}

}

export default validation