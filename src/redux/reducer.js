const initialState={
    myFavorites:[],
    allCharacters:[]
}

const rootReducer=(state=initialState,action)=>{

    switch (action.type) {

        case 'READ_FAV':
           
            //console.log("mis favoritos desde read Fav: ",state.myFavorites)
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            

        case 'ADD_FAV':
            //Antes de express
            // return{
            //     ...state,
            //     myFavorites:[...state.myFavorites,action.payload], //ojo
            //     allCharacters:[...state.allCharacters,action.payload]
            //  }
            //console.log("mis favoritos son: ",state.myFavorites)
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
           

        case 'REMOVE_FAV':
            //Antes de express
            // return{
            //     ...state,
            //     myFavorites: state.myFavorites.filter((char)=>{
            //     console.log(char)
            //     return char.id!==action.payload  }),
            //     allCharacters: state.allCharacters.filter((char)=>{
            //     console.log(char)
            //     return char.id!==action.payload  })
            // }
            // break;  
            return { ...state, myFavorites: action.payload,allCharacters:action.payload };
        case "FILTER":
            return{
                ...state,
                myFavorites:[...state.allCharacters.filter( (element)=> {

                    return element.gender===action.payload 
                     } 
                    )]
                
            }
               

        case "ORDER":
            return{
                ...state,
                 myFavorites:
                    action.payload ==="A" 
                    ? state.allCharacters.sort((a,b)=> a.id - b.id) 
                    : state.allCharacters.sort((a,b)=> b.id - a.id)
                }
                       

        default:
            return{...state}
            
    }


}

export default rootReducer;