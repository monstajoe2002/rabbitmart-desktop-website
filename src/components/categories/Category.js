import { useEffect, useState } from 'react';
import ProductCard from '../homepage/ProductCard';
import { CardGroup } from "react-bootstrap";
const axios = require('axios')
const Category = (props) => {
    const [products, setProducts] = useState([]);
    let productsList = [];
    const categories = [...new Set(products.map(product => product.category))]
    useEffect(() => {

        (async () => {
            const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
            productsList = result.data
            setProducts(productsList);
        })();
    }, []);
    return (
        <div>
            <h1 id="heading">{props.title}</h1>
            <CardGroup>
                {products.map(product => {
                    if (product.category ===props.title)
                    return <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} /> 
                    if(props.title==='All')
                        return <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
                    })}

            </CardGroup>
        </div>
    );
}

export default Category;