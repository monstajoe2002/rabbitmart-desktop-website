import '../../styles/product_page.css'
import Image from 'react-bootstrap/Image'
import { Button } from '@mui/material';
const ProductPage = () => {
    return (<div className="product-info">
        <img id="image" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png">

        </img>
        <h1 id='name'>El Doha Rice</h1>
        <div>
            <h1 id="price" >50.00 EGP</h1>
        </div>
        <h5 id='quantity'>1 kg</h5>
        <Button></Button>
    </div> );
}
 
export default ProductPage;