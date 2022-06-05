import { Card} from "react-bootstrap";
import { Button } from "@mui/material";
import ShoppingCart from "../shopping_cart/Cart";
const ProductCard = () => {
    return ( <div>
        <Card style={{ width: '15rem',padding:'5px',margin:'5px' }}>
            <Card.Img variant="top" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
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