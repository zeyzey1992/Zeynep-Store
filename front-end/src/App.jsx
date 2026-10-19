import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Dasboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true");

    useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <BrowserRouter>

           <div className={darkMode ? "app dark-mode" : "app light-mode"}>

             <div className="Header-navbar">
                <Header />
                <Navbar 
                cart={cart} 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                user={user}
                />
            </div>

        <Routes>

                <Route
                    path="/"
                    element={<Dasboard setCart={setCart} />}
                />

                <Route
                    path="/register" 
                    element={<Register/>} 
                />

                <Route
                    path="/login" 
                    element={<Login setUser={setUser}/>}
                />
                
                <Route
                     path="/categories"
                    element={<Categories />}
                />

                <Route
                path="/categories/:slug"
                element={<Categories />}
                />

                <Route
                    path="/Cart"
                    element={
                        <Cart
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />

                <Route
                path="/product/:id"
                element={<ProductDetails setCart={setCart}/>}
                />

            </Routes>

           </div>

            

        </BrowserRouter>
    );
}

export default App;