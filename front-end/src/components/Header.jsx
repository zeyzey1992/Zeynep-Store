import logo from "../assets/iconzeynep.jpeg";
import "./header.css";
import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="header-container">
        
        <Link to="/">
        <img 
        src={logo} 
        alt="Logo" 
        className="logo"
        ></img>
        </Link>

        <Link to="/" className="store-name">
        <h1>Zeynep Store</h1>
        </Link>
        </div>
    )
}
export default Header;