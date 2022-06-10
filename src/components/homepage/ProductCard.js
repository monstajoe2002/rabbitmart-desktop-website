import { Card} from "react-bootstrap";
import { Button } from "@mui/material";
import ShoppingCart from "../shopping_cart/Cart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require('axios')
const ProductCard = (props) => {
    const [products, setProducts] = useState([]);
    let productsList = [];

    useEffect(() => {

        (async () => {
            const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
            productsList = result.data
            setProducts(productsList); 
        })();
    }, []);
    return ( <div>
        <Link to={`/product/${props.id}`} style={{color:'black',textDecoration:'none'}}>
            <Card style={{ width: '15rem', padding: '5px', margin: '5px' }}>
                <Card.Img variant="top" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    </div> 
    );
}
 
export default ProductCard;