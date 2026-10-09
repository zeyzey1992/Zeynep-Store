import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ setCart }) {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            });

    }, [id]);

    if (!product) {
        return <p>Loading....</p>;
    }

    return (
        <div>

            <div className="product-details">

                <h2>{product.title}</h2>

                <div className="product-content">

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <div className="product-info">

                        <p>{product.description}</p>

                        <p className="product-price">
                            ${product.price}
                        </p>

                    </div>

                </div>

                <button className="add-cart-button"
                onClick={() => setCart(prevCart => [...prevCart, product])}
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductDetails;