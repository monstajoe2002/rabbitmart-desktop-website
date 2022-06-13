import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { cart } from "../product_page/Product";
const ShoppingCart = () => {
let totalPrice=0;
cart.map(product => totalPrice+=product.price)
    
    return (<div>
        <Table responsive='xl'>
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </thead>
                
                <tbody>
                    {cart.map(product =><tr>
                        <td>
                             {product.name}
                        </td>
                        <td>
                            { product.price}
                        </td>
                        <td>
                            {product.quantity}
                        </td>
                        
                    </tr>)}
                <tr>
                    <td>Total price: {totalPrice} EGP</td>
                    <td />
                    <td />
                </tr>
                </tbody>

        </Table>
        <Button variant="contained" href="http://localhost:4000" style={{ backgroundColor: "#124831", fontFamily: 'Poppins', color: "#dcfd51" }}>Checkout</Button>
    </div>);
}

export default ShoppingCart;