import "./cart.css";

function Cart({ cart, setCart }) {

    const total = cart.reduce(
        (sum, product) => 
        sum + product.price * (product.quantity || 1), 0);

    return (
        <div>
            <h2>My Cart</h2>

            <div className="cart-product">

                {cart.map((product, index) => (
                    <div className="cart-item" key={index}>

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />

                        <h3>{product.title}</h3>

                        <p>${product.price}</p>

                        <div className="quantity">

                         <button
                            onClick={() => {
                                setCart(cart.map((item, i) =>
                                    i === index && (item.quantity || 1) > 1
                                    ? { ...item, quantity: (item.quantity || 1) - 1 }
                                    : item
                                ));
                            }}
                        >
                            -
                        </button>

                            <span>{product.quantity || 1}</span>

                            <button
                                onClick={() => {
                                    setCart(cart.map((item, i) =>
                                        i === index
                                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                                            : item
                                    ));
                                }}
                            >
                                +
                            </button>
                                            

                        </div>
                        

                        <button
                            className="remove-button"
                            onClick={() =>
                                setCart(cart.filter((item, i) => i != index))
                            }
                        >
                            Remove
                        </button>

                    </div>
                ))}

            </div>

            <h3 className="cart-total">
                Total: ${total.toFixed(2)}
            </h3>

        </div>
    );
}

export default Cart;