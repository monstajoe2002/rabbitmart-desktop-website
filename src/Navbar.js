import React, { useState } from 'react';
import { Form, FormControl, Container, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import CategoryList from './components/homepage/CategoryList';

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
            <Container className="links">
                <a href="/" id="brand" class="h1">Rabbit</a>

                <Row md="auto">
                    <a href="/my-cart">Cart</a>
                    <a href="/account">Account</a>
                    <CategoryList />
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"

                            aria-label="Search"
                        />

                        <Button style={{ color: 'white' }}>Search</Button>
                    </Form>
                </Row>
            </Container>




        </nav>

    );
}

export default Navbar;