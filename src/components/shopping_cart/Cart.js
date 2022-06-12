import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { cart } from "../product_page/Product";
const ShoppingCart = () => {
    const LOCAL_STORAGE_KEY=localStorage.key(0)
    const [cartProducts,setCartProducts]=useState([cart])
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY))
        if (stored) setCartProducts(stored)
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartProducts))
    }, [cartProducts])

    
    return (<div>
        <Table responsive='xl'>
            <tr>
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
                </tbody>

            </tr>
        </Table>
    </div>);
}

export default ShoppingCart;