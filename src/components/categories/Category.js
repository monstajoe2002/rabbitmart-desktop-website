import { useEffect, useState } from 'react';
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
            {products.filter(title=>title===props.title)}
            
        </div>
     );
}
 
export default Category;