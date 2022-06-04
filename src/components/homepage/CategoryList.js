import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Category from '../categories/Category';
const CategoryList = () => {
    let category=''
    const categories = ['All', 'Meat, Fish & Poultry', 'Dairy Products']
    return (
        <div>
            <NavDropdown title="Categories" id="offcanvasNavbarDropdown-expand-sm">
                {categories.map(category =>
                    <>
                        <NavDropdown.Item href={`/category/${category.toLowerCase()}`} style={{ fontWeight: '400', color: 'black' }}>{category}</NavDropdown.Item>
                        
                        
                    </>
                )}

                
                
            </NavDropdown>
        </div>
    );
}

export default CategoryList;