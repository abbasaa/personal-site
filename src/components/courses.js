import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Course from './coursecard';
import ExpandButton from './expandbutton';

import plusIcon from '../static/plusIcon.svg';
import plusIconRed from '../static/plusIconRed.svg';
import minusIcon from '../static/minusIcon.svg';
import minusIconRed from '../static/minusIconRed.svg';

export default function Courses({ colorTheme }) {
    const [buttonSrc, setButtonSrc] = useState([plusIcon, plusIconRed]);
    const [isExpanded, setIsExpanded] = useState(false); 
    
    const toggleSrc = () => {
        if (buttonSrc[0] === plusIcon) {
            setButtonSrc([minusIcon, minusIconRed]);
            setIsExpanded(true);
        } else {
            setButtonSrc([plusIcon, plusIconRed]);
            setIsExpanded(false);
        }
    };

    return (
        <Jumbotron fluid
            style={{
                backgroundColor: colorTheme.gunMetal,
                margin: 'auto'
            }}
        >
            <Container>
                <Row style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>
                    <Col>
                        <h1 id="subHeader">coursework</h1> 
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Advanced Operating Systems"
                            subtitle="EECS 482 | Fall 2020"
                        >
                            Covers the topics behind modern operating systems including concurrency,
                            thread managing, virtual memory paging, and file systems. 
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Web Systems"
                            subtitle="EECS 485 | Fall 2020"
                        >
                            Project oriented course that covers modern web systems and technologies by building full stack web apps including
                            Instagram clone and Google clone.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Foundations of Computer Science"
                            subtitle="EECS 376 | Fall 2020"
                        >
                            Provides introduction to the Theory of Computation including algorithms,
                            finite automata, computability, complexity, and cryptography.
                        </Course>
                    </Col>
                </Row>

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
                <Row style={{ marginBottom: '20px'}}>
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Introduction to Machine Learning"
                            subtitle="EECS 445 | Winter 2020"
                        >
                            Covers theory and implementation of machine learning algorithms. 
                            Includes both supervised and unsupervised learning methods.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Linear Algebra"
                            subtitle="MATH 217 | Winter 2020"
                        >
                            Provides rigorous introduction to linear algebra and proof based
                            maths. Topics include matrix algebra, vector
                            spaces, linear dependence, bases, dimensions,
                            eigenvalues and eigenvectors, diagonalization, and inner products.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Introduction to Probability"
                            subtitle="MATH 425 | Winter 2020"
                        >
                            Topics include basics of both discrete and continuous probability theory:
                            conditional probability, independence, random variables, 
                            expectations, variances, and covariances.
                        </Course>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '20px'}}>
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Algorithms and Data Structures II"
                            subtitle="EECS 281 | Fall 2019"
                        >
                            Builds upon course before algorithms like shortest path finding, union find, and quicksort.
                            And more complex data structures like self-balancing trees, heaps, pairing heaps, and graphs.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Algorithms and Data Structures I"
                            subtitle="EECS 280 | Winter 2018"
                        >
                            Covers foundation of CS with topics including OOP design, polymorphism, arrays,
                            linked-lists, binary search trees, recursion, and more.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Discrete Mathematics"
                            subtitle="EECS 203 | Winter 2018"
                        >
                            Covers the foundation of math behind CS including logic, induction, probability,
                            recurrences, and complexity.
                        </Course>
                    </Col>
                </Row>
                <Row style={{ color: colorTheme.gunMetal }}>
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Computer Organization"
                            subtitle="EECS 370 | Winter 2020"
                        >
                            Covers lower level programming including assembly, linkers, CPU design,
                            pipelines, caches, and virtual memory.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Intro Logic Design"
                            subtitle="EECS 270 | Fall 2019"
                        >
                            Intro to digital logic in verilog. Built finite state machines and datapaths
                            in order to solve problems like adding, multiplication, and logic controllers.
                        </Course>
                    </Col>
                    
                    <Col>
                        <Course
                            colorTheme={colorTheme}
                            title="Differential Equations"
                            subtitle="MATH 216 | Fall 2018"
                        >
                            Learned techniques in order to solve ordinary differential
                            equations analytically and more complex equations through numerical methods
                            in MatLab.
                        </Course>
                    </Col>
                </Row>
                </>
                : undefined } 
                
            </Container>
        </Jumbotron>
    );
};