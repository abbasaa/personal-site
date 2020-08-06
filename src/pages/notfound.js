import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function NotFound() {
    return (
        <div className="indexBackground">
        <NavBar notTransparentAt={990} /> 

        <Jumbotron
            fluid
            style={{
                background: 'transparent',
                color: 'white'
            }}
        >
            <Container>
                <div style={{ marginTop: '200px'}}></div>
                <Row>
                    <Col> 
                        <h1 style={{ fontSize: '4.5rem'}}>
                            Sorry <text id="wordEmphasis">404 Error</text>, Page Not Found.
                        </h1>
                    </Col>
                </Row> 
                <div style={{ marginBottom: '400px'}}></div>
                
            </Container>
        </Jumbotron>
            
        <Footer />

        </div> 
    );
};