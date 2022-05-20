import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import CategoryList from './components/CategoryList';
const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <nav className="navbar">
            <h1 class="h1">Rabbit</h1>
            <div className="links">
                
                <a href="/">Home</a>
                <a href="/my-cart">Cart</a>
                <a href="/account">Account</a>
                
                <input type="text" placeholder="Search..." />
                <CategoryList />

            </div>
        </nav>
        
    );
}

export default Navbar;