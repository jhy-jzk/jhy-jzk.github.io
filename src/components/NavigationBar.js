import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavDropdown, Offcanvas, Nav } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to='/' >jhy-jzk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/upload' >
                            上传
                        </Nav.Link>
                        <Nav.Link as={Link} to='/spin' >
                            转盘
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;