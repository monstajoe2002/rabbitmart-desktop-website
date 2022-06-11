import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Category from '../categories/Category';
const axios = require('axios')
const CategoryList = () => {
    const [products, setProducts] = useState([]);
    let productsList = [];

    useEffect(() => {

        (async () => {
            const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
            productsList = result.data
            setProducts(productsList);
        })();
    }, []);
    
    const categories = [...new Set(products.map(product => product.category)).add('All')]
    
    return (
        <div>
            <NavDropdown title="Categories" id="offcanvasNavbarDropdown-expand-sm">
                {categories.map(category =>
                    <a>
                        <NavDropdown.Item href={`/category/${category.toLowerCase()}`} style={{ fontWeight: '400', color: 'black' }}>{category}</NavDropdown.Item>
                    </a>    
                        
                )}

                
                
            </NavDropdown>
        </div>
    );
}

export default CategoryList;