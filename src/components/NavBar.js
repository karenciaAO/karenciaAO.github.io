import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { scrollToContact } from "../utils/scrollToContact";
import logo from "../assets/img/contact-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // Importa la imagen navIcon1
import navIcon2 from "../assets/img/nav-icon2.svg"; // Importa la imagen navIcon2
import navIcon3 from "../assets/img/nav-icon3.svg"; // Importa la imagen navIcon3
import React from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const onScrolled = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScrolled);

        return () => window.removeEventListener("scroll", onScrolled);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const toggleIcons = () => {
        setShowIcons(!showIcons);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
                </Navbar.Brand>
                {isMobile ? (
                    <>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleIcons} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                                <Nav.Link href="#information" className={activeLink === 'information' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('information')}>Information</Nav.Link>
                            </Nav>
                            <div className="navbar-text">
                                {showIcons && (
                                    <>
                                        <div className="social-icon">
                                            <a href="https://www.linkedin.com/in/karen-araque/"><img src={navIcon1} alt=""/></a>
                                            <a href="https://github.com/karenciaAO"><img src={navIcon2} alt=""/></a>
                                            <a href="https://medium.com/@karenaraqueo"><img src={navIcon3} alt=""/></a>
                                        </div>
                                        <div>
                                            <button className="vvd" onClick={scrollToContact}><span>Let's Connect</span></button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Navbar.Collapse>
                    </>
                ) : (
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#information" className={activeLink === 'information' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('information')}>Information</Nav.Link>
                        <div className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/karen-araque/"><img src={navIcon1} alt=""/></a>
                                <a href="https://github.com/karenciaAO"><img src={navIcon2} alt=""/></a>
                                <a href="https://medium.com/@karenaraqueo"><img src={navIcon3} alt=""/></a>
                            </div>
                            <button className="vvd" onClick={scrollToContact}><span>Let's Connect</span></button>
                        </div>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
}
