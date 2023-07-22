import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'
import { Link , NavLink} from "react-router-dom";
import imagen from "../../img/titulo_rick_aand _morty.jpg"

const Nav = ({onSearch, random})=> {
    return(
        <div className={style.contenedor} >
            <img src={imagen} alt="logo" />
            <SearchBar onSearch={onSearch}/>
            <button className={style.button}><NavLink to="/favorites">Favorites</NavLink> </button>
            <button className={style.button}><Link to="/about">About</Link></button>
            <button className={style.button}><Link to="/home">Home</Link></button>
            <button className={style.button} onClick={random} >Random</button>
        </div>   
    )
};
export default Nav;