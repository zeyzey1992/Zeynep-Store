import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navbar.css";
import { Link } from "react-router-dom";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import SunnyIcon from "@mui/icons-material/Sunny";
import { useEffect, useState } from "react";

function Navbar({ cart, darkMode, setDarkMode }){

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <nav>
            <a href="/">Home</a>
            
            <div className="category-menu">
                <Link to="/categories">Categories</Link>

                <div className="category-dropdown">
                    {categories.map(category =>(
                        <Link
                        key={category.slug}
                        to={`/categories/${category.slug}`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>

            <input
                type="text"
                placeholder="Search..."
            />

            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <SunnyIcon /> : <ModeNightIcon />}
            </button>

            <Link to="/cart" className="cart-button">
            
            
            <ShoppingCartIcon/>

            <span className="cart-count">
                {cart.length}
            </span>
            </Link>
        </nav>
    );
}

export default Navbar;