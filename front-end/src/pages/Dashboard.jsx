import { useEffect, useState } from "react";
import ProductCart  from "../components/ProductCart";
import "./Dashboard.css";

function Dasboard({ setCart }){

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/api/products")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data.products);
            });
    }, []);

    return(
        <div>
            

            <div className="products">
                {products.map(product=> (
                <ProductCart 
                key= { product.id } 
                product={ product}
                setCart={setCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dasboard;