import { Card} from "react-bootstrap";
import { Button } from "@mui/material";
import ShoppingCart from "../shopping_cart/Cart";
const ProductCard = () => {
    return ( <div>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Lamar Full Cream 500ml</Card.Title>
                <Card.Text>
                    20.00 EGP
                </Card.Text>
                <Button variant="contained" href="/product" style={{ backgroundColor: '#124831', fontFamily: 'Poppins', color:'#dcfd51'}}>View</Button>
            </Card.Body>
        </Card>
    </div> 
    );
}
 
export default ProductCard;