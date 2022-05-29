import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
const CategoryList = () => {
    const categories=['All','Meat, Fish & Poultry', 'Dairy Products']
    return (  
        <div>
            <NavDropdown title="Categories" id="offcanvasNavbarDropdown-expand-sm">
                {categories.map(category =>
                    <NavDropdown.Item href={`/category/${category.toLowerCase()}`} style={{ fontWeight: '400', color: 'black' }}>{category}</NavDropdown.Item>
                )}

            </NavDropdown>
        </div>
    );
}
 
export default CategoryList;