import {Button,Menu,MenuItem, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/system';
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
const CategoryList = () => {
    const categories=['All','Meat, Fish & Poultry', 'Dairy Products']
    return (  
        <div>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories.map(category =>
                    <NavDropdown.Item href="/category/all" style={{ fontWeight: '400', color: 'black' }}>{category}</NavDropdown.Item>
                )}

            </NavDropdown>
        </div>
    );
}
 
export default CategoryList;