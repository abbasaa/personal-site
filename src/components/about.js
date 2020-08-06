import React from 'react';

import { useMediaQuery } from 'react-responsive';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profilePic from '../static/profile.jpg';

export default function About() {
    const isLarge = useMediaQuery({
        minDeviceWidth: 1024
    });

    return (
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
                    
                { isLarge ?
                    
                <Row>
                    <Col
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        <img
                            src={profilePic}
                            width={210}
                            height="auto"
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
                            experience with Python, Reactjs, Nodejs, and C++.
                        </h3> 
                    </Col>
                </Row>

                :
                    
                <>
                <Row>
                    <Col
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        <img
                            src={profilePic}
                            width={210}
                            height="auto"
                            style={{ clipPath: 'circle(50% at 50% 50%)', marginBottom: '20px' }}
                        /> 
                    </Col>
                </Row>
                <Row style={{ textAlign: 'center'}}>     
                    <Col>
                        <h3>
                            I'm an undergraduate student at the University of Michigan, Ann Arbor,
                            majoring in Computer Science Engineering with a minor in Mathematics.
                            I'm interested in 
                            <text id="wordEmphasis"> web systems</text>,
                            <text id="wordEmphasis"> data visualization</text>, and 
                            <text id="wordEmphasis"> machine learning</text>. I have
                            experience with Python, Reactjs, Nodejs, and C++.
                        </h3> 
                    </Col>
                </Row>
                </>
                }
                
            </Container>

        </Jumbotron>
    );
};