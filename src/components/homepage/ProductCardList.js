import { CardGroup, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
const axios = require('axios')
const ProductCardList = () => {
    const [products, setProducts] = useState([]);
    let productsList = [];

    useEffect(() => {

        (async () => {
            const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
            productsList = result.data
            setProducts(productsList);
        })();
    }, []);
    return ( <CardGroup>
        {productsList.map(product => {<ProductCard id={product.id} name={product.name} price={product.price}/>})}
        
        
    </CardGroup> 
    );
}
 
export default ProductCardList;