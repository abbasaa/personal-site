import React, { useState, useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';

// import '../css/navbar.css';

export default function NavBar({ notTransparentAt }) {
    const [navColor, setNavColor] = useState('transparent');
    const [textColor, setTextColor] = useState('#A0D2DB');    

    const toggleTransparency = () => {
        if (window.pageYOffset > notTransparentAt) {
            setNavColor('#A0D2DB');
            setTextColor('#292F36');
        } else {
            setNavColor('transparent');
            setTextColor('#A0D2DB');
        }
    };

    const listener = e => {
        toggleTransparency();
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return  () => {
            window.removeEventListener("scroll", listener);
        }
    }, []);

    return (
        <Navbar
            navbarMcollapseOnSelect
            sticky="top"
            expand="sm"
            style={{
                backgroundColor: navColor,
                color: textColor
            }}
        >
            <Navbar.Toggle id="navbar-toggle" ari-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav.Link id="navLink" href="#">about</Nav.Link>
                <Nav.Link id="navLink" href="#">projects</Nav.Link>
                <Nav.Link id="navLink" href="#">contact</Nav.Link>
            </Navbar.Collapse>

        </Navbar>
    );
};

NavBar.defaultProps = {
    notTransparentAt: 100
};