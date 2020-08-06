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
                            subtitle="May 2020 - present | Python, Flask, Nodejs, Expressjs, Reactjs, MongoDB"
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
                            subtitle="May 2020 - August 2020 | Python, NumPy, Pandas, Matplotlib"
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
                    <>
                    <Project
                        colorTheme={colorTheme}
                        title="abbasaa.github.io"
                        subtitle="August 2020 | Reactjs"
                    >
                        This responsive web application is built completely out of functional React components and React hooks 
                        with a mobile friendly design in mind. Check out this website on your phone to see
                        it adapt.
                    </Project>

                    <Project
                        colorTheme={colorTheme}
                        title="Rate My Professor"
                        subtitle="April 2020 | Python, Scikit-Learn, NumPy, Matplotlib"
                    >
                        Trained multiclass One-vs-All SVM on rate my professor data in order to identify sentiment
                        of a given professor review. Implemented 5-fold cross validation with grid and random search
                        in order to tune hyperparameters. Experimented with the use of linear and quadratic kernel and L1
                        and L2 penalties. Binary classification accuracy of 83% and multiclass classification accuracy of 62%. 
                    </Project>
                    
                    <Project
                        colorTheme={colorTheme}
                        title="Food Classification Convolutional Neural Network with Autoencoder Pretraining"
                        subtitle="April 2020 | Python, PyTorch, NumPy, Matplotlib"
                    >
                        Used supervised and unsupervised learning techniques in order to classify food pictures into
                        5 categories. Built the model using PyTorch and made use of important MlOps features like saving checkpoints and 
                        live loss plotting. First, I took the input of 20,000 JPG images and preprocessed them by downsampling
                        all the images (to improve runtime) and standardize the images by dividing by max rgb pixel value (i.e.
                        255). I initiated the weights of the CNN to be normally distributed around 0. Training for 100 epochs,
                        I was able to achieve 58 % validation accuracy. Using an autoencoder to pretrain weights in the CNN, I was
                        able to achieve 62 % validation accuracy.
                    </Project>
                    </>
                : undefined }

                </Container>
            </Jumbotron>
    );
};