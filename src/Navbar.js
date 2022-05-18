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
                <CategoryList />
                <a href="/">Home</a>
                <a href="/my-cart">Cart</a>
                <a href="/account">Account</a>
                <Button variant="contained"
                    id="categories-button"

                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ marginLeft: '10px', fontFamily: 'Poppins', backgroundColor: 'green', color: '#dbfc51' }}>
                    Categories

                </Button>
                <Menu
                    id="categories-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <div >
                        <MenuItem onClick={handleClose} style={{ fontFamily: 'Poppins' }} >
                            All
                        </MenuItem>
                        <MenuItem onClick={handleClose} style={{ fontFamily: 'Poppins' }}>
                            Meat, Fish & Poultry
                        </MenuItem>
                        <MenuItem onClick={handleClose} style={{ fontFamily: 'Poppins' }}>
                            Dairy Products
                        </MenuItem>
                    </div>
                </Menu>
                <input type="text" placeholder="Search..." />
                <CategoryList />

            </div>
        </nav>
    );
}

export default Navbar;