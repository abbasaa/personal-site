import React from 'react';

import Card from 'react-bootstrap/Card';

export default function Course({ colorTheme, title, subtitle, children }) {
    return (
        <Card
            style={{
                width: '18rem',
                backgroundColor: colorTheme.babyPink
            }}
        >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                <Card.Text>
                    {children} 
                </Card.Text>
            </Card.Body>
        </Card> 
    );
};