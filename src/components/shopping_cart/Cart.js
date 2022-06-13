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
                    <tr>
                        <td>
                            {cart.map(product => product.name)}
                        </td>
                        <td>
                            {cart.map(product => product.price)}
                        </td>
                        <td>
                            {cart.map(product => product.quantity)}
                        </td>
                        
                    </tr>
                <tr>
                    <td>Total price: {totalPrice} EGP</td>
                    <td />
                    <td />
                </tr>
                </tbody>

        </Table>
        <Button variant="contained"  style={{ backgroundColor: "#124831", fontFamily: 'Poppins', color: "#dcfd51" }}>Checkout</Button>
    </div>);
}

export default ShoppingCart;