import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div style={{background:"#0C111B",color:"white",marginTop:"10%"}}>
  <Container fluid>
  <Row style={{margin:"0px 30px",padding:"35px 0px"}}>
    <Col lg={4} sm={6}><p>© 2021 Movie Time. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p></Col>
    <Col lg={4} sm={6} style={{paddingLeft:"80px"}}>
        <h5>Connect with us</h5>
        <ul style={{listStyleType:"none"}}>
            <li><a href="#" style={{textDecoration:"none"}}>Linkedin</a></li>
            <li><a href="#" style={{textDecoration:"none"}}>Twitter</a></li>
            <li><a href="#" style={{textDecoration:"none"}}>Youtube</a></li>
        </ul>
        
    </Col>
    <Col lg={4} sm={6}>
        <h5>&nbsp;&nbsp;Movie Time App</h5>
        <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" style={{height:"135px"}}/>
    </Col>
  </Row>
</Container>
        </div>
    );
}

export default Footer;