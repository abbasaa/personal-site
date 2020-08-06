import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../components/navbar';

export default function NotFound() {
    return (
        <div>
        <NavBar /> 
        <Row>
            <Col>
                page not found sorry! 
            </Col>
        </Row>

        </div> 
    );
};