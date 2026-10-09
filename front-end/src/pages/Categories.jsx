import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Categories(){

    const { slug } = useParams();
    console.log("Slug:", slug);
    const [ Categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);   
    

    useEffect(() => {
    if (slug) {
        fetch(`https://dummyjson.com/products/category/${slug}`)
            .then(response => response.json())
            .then(data => {
                console.log("API response:", data);
                setProducts(data.products);
            })
            .catch(error => console.log(error));
    }
    }, [slug]);

    return(

        <div className="products">
            {products.map(product =>(
                <div className="product-card">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                    <p>${product.price}</p>

                </div>
            ))}
        </div>
    );

}

export default Categories;