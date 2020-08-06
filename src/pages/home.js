import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import NavBar from '../components/navbar';
import Intro from '../components/intro'; 
import Arrow from '../components/arrow';
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

    return (
        <div className="indexBackground">
            <NavBar notTransparentAt={990} />
            <Intro /> 

                
            <Jumbotron fluid
                style={{
                    backgroundColor: '#292F36',
                    color: 'white',
                    margin: 'auto'
                }}
                
            >
                <Container>
                    <Row
                        style={{ 
                            textAlign: 'center',
                            marginBottom: '25px'
                        }}
                    >
                        <Col>
                            <h1 id="subHeader">about me</h1> 
                        </Col> 
                    </Row> 
                    <Row>
                        <Col
                            style={{
                                textAlign: 'center',
                                paddingRight: '0px'
                            }}
                        >
                            <img src={profilePic} width={210} height="auto"
                                style={{ clipPath: 'circle(50% at 50% 50%)' }}
                            /> 
                        </Col>
                        <Col>
                            <h3>
                                I'm an undergraduate student at the University of Michigan, Ann Arbor,
                                majoring in Computer Science Engineering with a minor in Mathematics.
                                I'm interested in 
                                <text id="wordEmphasis"> web systems</text>,
                                <text id="wordEmphasis"> data visualization</text>, and 
                                <text id="wordEmphasis"> machine learning</text>. I have
                                experience with Python, React, Node.js, and C++.
                            </h3> 
                        </Col>
                    </Row>
                </Container>

            </Jumbotron>

            <Courses colorTheme={colorTheme} />                 
            <Projects colorTheme={colorTheme} />

            <div style={{ textAlign: 'center', backgroundColor: '#292F36', paddingBottom: '20px'}}>
                <Arrow imgSrc={upArrow} hoverSrc={upArrowPink} width={35} height="auto" scrollLoc={0} />
            </div>

            <Footer />
        </div>
    );
};