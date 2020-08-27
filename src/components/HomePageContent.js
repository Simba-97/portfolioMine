import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 

function HomePageContent(props) {
    return (
        <Jumbotron className= "bg-transparent jumbotron-fluid">
            <Container className = "p = 0" fluid = {true}>
                <Row className = "justify-content-left">
                    <Col sm={6}>
                        {props.title && <h1 className ="display-3 font-weight-bold">{props.title}</h1>}
                        {props.subtitle && <h3 className ="display- 4 font-weight-bold">{props.subtitle}</h3>}
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    )
}

export default HomePageContent;
