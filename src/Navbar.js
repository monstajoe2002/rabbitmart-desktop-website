import React, { useState } from 'react';
import { Form, FormControl, Container, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import CategoryList from './components/homepage/CategoryList';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <Container className="links">
                <Link to="/" id="brand" class="h1">Rabbit</Link>

                <Row md="auto">
                    <Link to="/my-cart">Cart</Link>

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