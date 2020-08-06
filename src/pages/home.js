import React from 'react';

import { useMediaQuery } from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import NavBar from '../components/navbar';
import Intro from '../components/intro'; 
import Arrow from '../components/arrow';
import About from '../components/about';
import Courses from '../components/courses';
import Projects from '../components/projects';
import Footer from '../components/footer';

import upArrow from '../static/upArrow.svg';
import upArrowPink from '../static/upArrowPink.svg';
import profilePic from '../static/profile.jpg';

export default function Home() {
    const colorTheme = {
        babyPink: '#F8C7CC',
        gunMetal: '#292F36',
        liberty: '#4C60A9',
        lightBlue: '#A0D2DB',
        indianRed: '#DB5461'
    };

    const isLarge = useMediaQuery({
        minDeviceWidth: 1024
    });

    return (
        <div className="indexBackground">
            <NavBar notTransparentAt={990} />
            <Intro /> 
            <About />
            <Courses colorTheme={colorTheme} />                 
            <Projects colorTheme={colorTheme} />

            <div style={{ textAlign: 'center', backgroundColor: '#292F36', paddingBottom: '20px'}}>
                <Arrow imgSrc={upArrow} hoverSrc={upArrowPink} width={35} height="auto" scrollLoc={0} />
            </div>

            <Footer />
        </div>
    );
};