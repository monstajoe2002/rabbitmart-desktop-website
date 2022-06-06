import { Card} from "react-bootstrap";
import { Button } from "@mui/material";
import ShoppingCart from "../shopping_cart/Cart";
import {v4} from 'uuid'
import { Link } from "react-router-dom";
const ProductCard = () => {
    return ( <div>
        <Link to='/product/' style={{color:'black',textDecoration:'none'}}>
            <Card style={{ width: '15rem', padding: '5px', margin: '5px' }}>
                <Card.Img variant="top" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
                <Card.Body>
                    <Card.Title>Lamar Full Cream 500ml</Card.Title>
                    <Card.Text>
                        20.00 EGP
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    </div> 
    );
}
 
export default ProductCard;