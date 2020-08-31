import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
       <footer className="mt-5">
           <Container fluid ={true}>
               <Row className="border-top justify-content-between p-3">
                    <Col className="p=0" md ={100} sm ={14}>
                        This site was created by Hritik Kumar Singh
                    </Col>
                    <Col className="p=5" md ={3.5} d-flex justify-content>
                        Copyright &copy; 2020. Hritik Kumar Singh. All Rights Reserved.
                    </Col>
               </Row>
           </Container>
       </footer>
    )
}

export default Footer
