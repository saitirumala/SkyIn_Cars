import React from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText, Button, Label, Input } from 'reactstrap';

class Services extends React.Component {
    render() {
        return (
            <Col className="bg_color1" sm={12}>
                <h2 className="services">Services</h2>
                <Row>
                    <Col sm="6">
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>Mobile Phone Reservation</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, 
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>Special rates on car booking</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>
                        </Card>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row>
                    <Col sm="6">
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>Unlimited Miles Car Rental</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>

                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className='card_Body' body>
                            <CardTitle className='service_title'><sapn className='plus'>+&nbsp;</sapn>One Way Car Rentals</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</CardText>

                        </Card>
                    </Col>
                </Row>
            </Col>
        )
    }
}
export default Services;