import '../../styles/product_page.css'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material';


const ProductPage = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
       
    }
    { useEffect(() => { console.log(count) });} 
    return (<div className="product-info">
        <img id="image" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png">

        </img>
        <h1 id='name'>El Doha Rice</h1>
        <div>
            <h1 id="price" >50.00 EGP</h1>
        </div>
        <h5 id='quantity'>1 kg</h5>
        <Button variant="contained" onClick={() => incrementCount()} style={{ backgroundColor: "#124831", fontFamily: 'Poppins', color: "#dcfd51" }}>Add to Cart</Button>
        <p>{count}</p>
        

    </div>);
}

export default ProductPage;