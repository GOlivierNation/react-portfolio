/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
           if (window.scrollY > 50) {
               setScrolled(true)
           } else {
               setScrolled(false)
           }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

  return (
    <NavBar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icons">
                        <a href="/"><img src={''} alt="" /></a>
                        <a href="/"><img src={''} alt="" /></a>
                        <a href="/"><img src={''} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </NavBar>
  );
}