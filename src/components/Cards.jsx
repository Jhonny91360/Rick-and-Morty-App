import Card from './Card';

export default function Cards({characters,onClose}) { 
   // const arrayReturn=[] 
   // characters.forEach(character => {
   //    console.log(character);
   //    arrayReturn.push(  
   //    <Card
   //       id={character.id}
   //       name={character.name}
   //       status={character.status}
   //       species={character.species}
   //       gender={character.gender}
   //       origin={character.origin.name}
   //       image={character.image}
   //       onClose={() => window.alert('Emulamos que se cierra la card')}
   //     />  
   //     );
   //    });

   // return <div>{arrayReturn}</div>
   //console.log("Me llego esto a Cards",characters);
   // console.log("Esta funcion llega a Cards",onClose);

   return (
     
   <div className="contenedor"> {  
         
         characters.map(element => {
         
         return <Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
            />
         })
      }      
   </div>     
   )   
         
   }