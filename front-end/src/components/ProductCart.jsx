
function ProductCard( { product, setCart }){

    return(

        <div className="product-card">

            <h3 onClick={() => window.location.href= `/product/${product.id}`}></h3>
                {product.title}

            <img 
                src={product.thumbnail}
                alt={product.title}
                onClick={() => window.location.href=`product/${product.id}`}
                style={{ cursor: "pointer" }}
            />

            <p>{ product.category }</p>

            <span
                style={{
                    color: "#C9A227",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "10px"
                }}>
                    ${product.price}

            </span>

            <button className="add-cart-button"
            onClick={() => setCart(prevCart => [...prevCart, product])}
            >
                Add to Cart
            </button>
        </div>
    );
}
export default ProductCard