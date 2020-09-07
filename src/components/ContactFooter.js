import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactFooter() {
    return (
       <footer className="mt-4">
           <Container fluid ={true}>
               <p>Also we can connect on!</p>
               <Row>
                    <Col>
                        <a href="https://twitter.com/HritikKSingh">
                        <img align="left" alt="Hritik's Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
                        </a>
                        <p style={{marginLeft: 48 , fontFamily:"Times New Roman"}}>Twitter</p>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/hritik-kumar-singh-2a7664193/">
                        <img align="left" alt="Hritik's Linkdein" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
                        </a>
                        <p style={{marginLeft: 48 , fontFamily:"Times New Roman"}}>LinkedIn</p>
                    </Col>
                    <Col>
                        <a href="https://github.com/Simba-97">
                        <img align="left" alt="Hritik's Github" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                        </a>
                        <p style={{marginLeft: 48 , fontFamily:"Times New Roman"}}>GitHub</p>
                    </Col>
                    <Col>
                        <a href="https://www.instagram.com/__hritik_singh__/">
                        <img align="left" alt="Hritik's Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
                        </a>
                        <p style={{marginLeft: 48 , fontFamily:"Times New Roman"}}>Instagram</p>
                    </Col>
                    <Col>
                        <a href="https://www.youtube.com/channel/UCfoPEplnGbCdkwaf6UdQVKA">
                        <img align="left" alt="Hritik's Youtube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />
                        </a>
                        <p style={{marginLeft: 48 , fontFamily:"Times New Roman"}}>YouTube</p>
                    </Col>
               </Row>
            </Container>
       </footer>
    )
}

export default ContactFooter