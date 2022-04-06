import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { BsFillBellFill } from 'react-icons/bs';
import './header.css';
import { NavLink } from 'react-router-dom'
import avatar from '../../images/avatar.png'

const Header = () => {
    
    
    return (
        <section>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">DFC TIPPER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <NavLink to="#home" className="nav-item">Balance: 1000000000DFC</NavLink>
                            <NavLink to="#home"  className="nav-item"><BsFillBellFill /></NavLink>
                            <NavLink to="#link"  className="nav-item">
                                <img src={avatar} alt="" className='img-fluid avatar' />
                            </NavLink>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
        </section>
    )
}

export default Header