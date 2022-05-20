import {Button,Menu,MenuItem, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/system';
import React, { useState } from 'react';
const CategoryList = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (  
        <div>
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
        </div>
    );
}
 
export default CategoryList;