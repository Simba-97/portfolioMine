import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutContent(props) {
    return (
        <Container fluid={true} className="justify-content-center">
            <Row className="justify-content-center">
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}

export default AboutContent;
