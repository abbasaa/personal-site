import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialIcon from './socialicon';

import githubIcon from '../static/githubIconBlack.svg';
import githubRed from '../static/githubIconRed.svg';
import linkedInIcon from '../static/linkedInIconBlack.svg';
import linkedInRed from '../static/linkedInIconRed.svg';
import downloadIcon from '../static/downloadFile.svg';
import downloadRed from '../static/downloadArrowRed.svg';

export default function Footer() {
    return (
        <Jumbotron fluid 
            style={{
                backgroundColor: '#A0D2DB',
                textAlign: 'center',
                margin: '0px'
            }}
        >
            <Container>
                <Row style={{ marginBottom: "20px" }}>
                    <Col>
                        <SocialIcon imgSrc={[githubIcon, githubRed]} width={23} link="https://github.com/abbasaa" />
                        <SocialIcon imgSrc={[linkedInIcon, linkedInRed]} width={25} link="https://linkedin.com" />
                        <SocialIcon imgSrc={[downloadIcon, downloadRed]} width={23} link="https://linkedin.com" />
                    </Col>
                </Row> 
                
                <Row>
                    <Col>
                        <h6 id="copyright-tag">© 2020 abbas ahmed</h6> 
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}