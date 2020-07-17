import React from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText, Button, Label, Input } from 'reactstrap';
import WOW from 'wowjs';
class Services extends React.Component {
    componentDidMount(){
//         new WOW.WOW().init();
    }
    render() {
        return (
            <Col className="bg_color1" sm={12}>
                <h2 className="services wow bounceInDown">Services</h2>
                <span className="underline">&nbsp;</span>
                <Row>
                    <Col className='wow slideInLeft serviceContent' lg={6} xl={6} sm={12} xs={12}>
                        <Card className='card_Body ' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>Mobile Phone Reservation</CardTitle>
                            <CardText >With supporting text below as natural lead-in to additional content.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, 
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>
                        </Card>
                    </Col>
                    
                    <Col lg={6} xl={6} sm={12} xs={12} className='wow slideInRight serviceContent'>
                        <Card className='card_Body ' body>
                        <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>
Documents Required</CardTitle>
                            <CardText>
                                <ul style={{textAlign:'initial'}}>
                                    <li>Original Driving License</li>
                                    <li>Aadhar Card</li>
                                    <li>Pan Card</li>
                                    <li>Age below 30 Years Collage ID Card</li>
                                    <li>6 members contacts [Father,Mother,Wife,Friend ....etc] COMPULSORY</li>
                                </ul>
              
              </CardText>
                        </Card>
                    </Col>
                </Row>
               
                <Row>
                    <Col className='wow slideInLeft serviceContent ' lg={6} xl={6} sm={12} xs={12} >
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>Unlimited Miles Car Rental</CardTitle>
                            <CardText >With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>

                        </Card>
                    </Col>
                    <Col className='wow slideInRight serviceContent' lg={6} xl={6} sm={12} xs={12} >
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>One Way Car Rentals</CardTitle>
                            <CardText >With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>

                        </Card>
                    </Col>
                </Row>
            </Col>
        )
    }
}
export default Services;
