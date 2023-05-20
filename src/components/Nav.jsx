import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";



export default function Nav({onSearch,logout}){
    

    return(
        <div>
           <nav className="navbar">
           <SearchBar  id="button4" onSearch={onSearch} />

           <Link to="/home">
            <button id="button4">Home</button>
            </Link>

            <Link to="/favorites">
            <button id="button4">Favorites</button>
            </Link>

            <Link to="/about">
            <button id="button4">About</button>
            </Link>
            
           
            <button onClick={logout}  id="button4" >Log out</button>
            
            </nav> 
        </div>
    )

}