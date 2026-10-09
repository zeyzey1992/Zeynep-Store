import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Dasboard from "./pages/Dashboard";
import Categories from "./pages/Categories";



function App() {

    const [cart, setCart] = useState([]);
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
                />
            </div>

        <Routes>

                <Route
                    path="/"
                    element={<Dasboard setCart={setCart} />}
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