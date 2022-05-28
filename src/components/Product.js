import { Card} from "react-bootstrap";
import { Button } from "@mui/material";

const Product = () => {
    return ( <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Lamar Full Cream 500ml</Card.Title>
                <Card.Text>
                    25.00 EGP
                </Card.Text>
                <Button variant="contained" style={{ backgroundColor: '#124831', fontFamily: 'Poppins', color:'#dcfd51'}}>View</Button>
            </Card.Body>
        </Card>
    </div> 
    );
}
 
export default Product;