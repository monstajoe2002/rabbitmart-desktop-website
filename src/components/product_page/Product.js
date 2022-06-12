import '../../styles/product_page.css'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
const axios=require('axios');
const ProductPage = () => {
    const [count, setCount] = useState(0)
    const productId = window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
    )
    
    const incrementCount = () => {
        setCount(count + 1)

    }
    const decrementCount = () => {
        setCount(count - 1);
    }
    const [products, setProducts] = useState([]);
    let productsList = [];

    useEffect(() => {

        (async () => {
            const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
            productsList = result.data
            setProducts(productsList);
        })();
        
    }, []);
    return (<div className="product-info">
        {products.map(product => {
            if(product.id===productId)
            return <><img id="image" src={`${product.image}`}>

            </img>
                <h1 id='name'>{product.name}</h1>
                <h5 id='quantity'>{product.weight}{product.measurement}</h5>
                <h1 id="price" >{product.price} EGP</h1>
                <Button variant="contained" onClick={() => console.log('Added to cart!')} style={{ backgroundColor: "#124831", fontFamily: 'Poppins', color: "#dcfd51" }}>Add to Cart</Button>
               </>})}

        <div className="quantity" style={{ textAlign: 'right' }}>

            <Button variant="outlined" disabled={`true` ? count === 0 : decrementCount()} onClick={() => decrementCount()} > - </Button>
            <h3>{count}</h3>
            <Button variant="outlined" onClick={() => incrementCount()}> + </Button>
        </div>

    </div>);
}

export default ProductPage;