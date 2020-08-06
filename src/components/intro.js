import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SocialIcon from './socialicon';
import Arrow from './arrow';

import downArrow from '../static/downArrow.svg';
import mlogo from '../static/mlogo2.svg';
import mlogoBlue from '../static/mlogoBlue.svg';
import githubIcon from '../static/githubIcon.svg';
import githubRed from '../static/githubIconRed.svg';
import linkedInIcon from '../static/linkedInIcon.svg';
import linkedInRed from '../static/linkedInIconRed.svg';
import downloadIcon from '../static/downloadArrow.svg';
import downloadRed from '../static/downloadArrowRed.svg';

export default function Intro() {
    const [buttonColor, setButtonColor] = useState('#F8C7CC');
    
    return (
        <Jumbotron
                fluid
                style={{
                    background: 'transparent', 
                    color: 'white'
                }} 
            >
                <Container>
                    <div style={{ marginTop: '100px'}}></div>
                    
                    <Row>
                        <Col> 
                            <h1 style={{ fontSize: '4.5rem'}}>
                                Hello I'm <text id="wordEmphasis">Abbas Ahmed</text>,
                            </h1>
                        </Col>
                    </Row> 

                    <Row style={{ marginBottom: '13px'}}>
                        <Col> 
                            <h1 style={{ fontSize: '2.5rem' }}>
                                <text id="wordEmphasis">computer science </text>
                                undergrad <text style={{color: "#4C60A9"}}>@ </text>
                                <SocialIcon imgSrc={[mlogo, mlogoBlue]} width={50} link="https://engin.umich.edu" /> 
                            </h1>
                            
                            <h1 style={{ fontSize: '2.5rem' }}>
                                <text id="wordEmphasis">software engineer</text>
                            </h1>
                            
                            <h1 style={{ fontSize: '2.5rem' }}>
                                <text id="wordEmphasis">data scientist</text>
                            </h1>
                        </Col>
                    </Row>

                    
                    <Row>
                        <Col>
                            <Button
                                style={{
                                    backgroundColor: buttonColor,
                                    borderColor: buttonColor,
                                    fontSize: 'larger',
                                    color: 'black'
                                }}
                                href="mailto:abbasaa@umich.edu"

                                onMouseOver={() => setButtonColor('#DB5461')}
                                onMouseOut={() => setButtonColor('#F8C7CC')}
                            >
                                Say Hello
                            </Button>
                        </Col>
                        
                        <Col>
                            <SocialIcon imgSrc={[githubIcon, githubRed]} width={30} link="https://github.com/abbasaa" />
                            <SocialIcon imgSrc={[linkedInIcon, linkedInRed]} width={32} link="https://linkedin.com" />
                            <SocialIcon imgSrc={[downloadIcon, downloadRed]} width={30} link="https://linkedin.com" />
                        </Col>
                    </Row> 

                    <div style={{ marginBottom: '350px'}}></div>

                    <div style={{ textAlign: 'center' }}>
                        <Arrow imgSrc={downArrow} width={50} height="auto" scrollLoc={1000} /> 
                    </div>
                </Container> 
                
        </Jumbotron>
    );
};