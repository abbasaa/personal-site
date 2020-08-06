import React from 'react';

import Card from 'react-bootstrap/Card';

export default function Project({ colorTheme, title, subtitle, button, children }) {
    return (
        <Card
            style={{
                backgroundColor: colorTheme.lightBlue,
                margin: '20px',
                borderRadius: '25px'
            }}
        >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle> 
                <Card.Text>
                    {children} 
                </Card.Text>
                {button} 
            </Card.Body>
        </Card>

    );
};

Project.defaultProps = {
    colorTheme: undefined,
    button: undefined,
    children: undefined
};