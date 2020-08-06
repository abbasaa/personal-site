import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import Project from './projectcard';
import ExpandButton from './expandbutton';

import ellipsisIcon from '../static/ellipsisIcon.svg';
import ellipsisIconRed from '../static/ellipsisIconRed.svg';
import spreadIcon from '../static/spreadIcon.svg';
import spreadIconRead from '../static/spreadIconRed.svg';

export default function Projects({ colorTheme }) {
    const [buttonSrc, setButtonSrc] = useState([ellipsisIcon, ellipsisIconRed]);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSrc = () => {
        if (buttonSrc[0] === ellipsisIcon) {
            setButtonSrc([spreadIcon, spreadIconRead]);
            setIsExpanded(true);
        } else {
            setButtonSrc([ellipsisIcon, ellipsisIconRed]);
            setIsExpanded(false);
        }
    };

    return (
        <Jumbotron fluid
            style={{
                backgroundColor: colorTheme.gunMetal,
                color: colorTheme.gunMetal,
                margin: 'auto'
            }}
        >
            <Container>
                <Row style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Col>
                        <h1 id="subHeader">projects</h1> 
                    </Col> 
                </Row>
                    
                        <Project
                            colorTheme={colorTheme}
                            title="Dario, the Friendly Calendar Assistant"
                            subtitle="2020 - present"
                            button = {
                                <Button variant="primary" style={{ backgroundColor: colorTheme.lightBlue, borderColor: colorTheme.gunMetal, color: colorTheme.gunMetal }} href="https://schedulewithdario.com">Find out more</Button>
                            }
                        >
                            COVID19 provided a rare opportunity for my roommates and I to come together to build a
                            project that solves the friction involved in scheduling meetings. Dario solves the information
                            gap issue by intelligently using your calendar and those you are meeting with in order to find the
                            optimal meeting time without any of the back and forth. I specifically have built our React web app
                            that provides users with information about Dario, and the sign up flow in order to use our service.
                            I am currently working on developing our React-Native app. I also worked on our machine learning
                            model in order to learn your meeting preferences. Our model includes three networks: a base ANN, a
                            user category model based on the characteristics of a specific user, and a third reinforcement learning model
                            sensitive to user feedback on meetings.
                        </Project>
                        <Project
                            colorTheme={colorTheme}
                            title="GitHub Shocks - Summer Research Experience for Undergraduates"
                            subtitle="May 2020 - August 2020"
                        >
                            Conducted network analysis research in Python under the School of Information. Analyzed the impact of Gitter chat rooms
                            on GitHub repositories. Gitter chat rooms provide an organized way for GitHub organizations and repo members
                            to communicate. The impact we were examining was the effect on the productivity of repos after the creation of 
                            Gitter chat rooms. We defined productivity by the number of stars, forks, pushes, accepted pull requests. I
                            pulled and parsed over a terabyte of GitHub event data from the GHArchive. I pulled over 100GB of messages data
                            from the Gitter API. After running embarassingly parallel collection of data, I used piecewise regression
                            on time series of GitHub events.
                        </Project>

                <div
                    style={{
                        textAlign: 'center',
                        padding: '20px'
                    }}
                >
                    <ExpandButton imgSrc={buttonSrc} toggleSrc={toggleSrc} width={30} height="auto" />
                </div>

                { isExpanded ?
                        <Project
                            colorTheme={colorTheme}
                            title="Dario, the friendly calendar assistant"
                            subtitle="2020 - present"
                            button = {
                                <Button variant="primary" style={{ backgroundColor: colorTheme.lightBlue, borderColor: colorTheme.gunMetal, color: colorTheme.gunMetal }} href="https://schedulewithdario.com">Find out more</Button>
                            }
                        >
                                With supporting text below as a natural lead-in to additional content.

                        </Project>
                
                
                : undefined }

                </Container>
            </Jumbotron>
    );
};