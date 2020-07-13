import React from 'react';
import contact from '../images/contact.jpg';
import insta_logo from '../images/insta-logo.png';
import profile from '../images/profile.png';
import fb from '../images/fb.png';
import gmail from '../images/gmail.png';
import {Col,Row,Card, CardBody, CardTitle,CardText } from 'reactstrap';
 class Contact extends React.Component{
     render(){
         return(
             <div className="bg_color5">
                <h2 className="services wow zoomInDown">Contact</h2>
                <span className="underline">&nbsp;</span>
                <Col sm={12}>
                    <Row>
                        <Col sm={8}>
                        <Card className="cotactCard" body>
                            <CardTitle className='service_title'></CardTitle>
                            <CardText>
                                <p style={{textAlign:'justify',fontWeight:'900'}}>You have any questions or need additional information?</p>
                                <p style={{textAlign:'justify'}}><span style={{color:'#ffbf00',fontWeight:'900'}}>ADDRESS:</span> #19-6-20/2,
D.R.Mahal Road 
Tirupathi-517501.</p>
<p style={{textAlign:'justify'}}><span style={{fontWeight:'bold'}}>Phone :</span> +91 9494444182</p>
<div>
    {/* <img src=''></img> */}
<img className=" icon wow bounceInDown" src={insta_logo} ></img><a style={{display:'flex',paddingTop:'10px',paddingLeft:'10px',float:'left',marginRight:'20px'}} href='https://instagram.com/skyin_cars?igshid=1kzg8l94z1th8'>skyin_cars</a>
<img className=" fb wow bounceInDown" src={fb} ></img><a style={{display:'flex',paddingTop:'10px',paddingLeft:'10px',marginRight:'20px',float:'left'}} href='https://www.facebook.com/skyin_cars-2327401060804955/'>skyin_cars</a>
<img className=" fb wow bounceInDown" src={gmail} ></img><a style={{display:'flex',paddingTop:'10px',paddingLeft:'10px'}} href='https://www.facebook.com/skyin_cars-2327401060804955/'>skyinselfdrive@gmail.com</a>
</div>
                            </CardText>

                        </Card>
                        </Col>
                        <Col sm={4}>
                        <Card className='helpLineCard wow fadeInLeft' body>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={4}>
                                        <img src={profile} style={{height:'100px',width:'100px'}}></img>
                                    </Col>
                                    <Col sm={8}>
                                        <h2 style={{color:'#ffbf00',fontFamily:'initial'}}>Help line</h2>
                                        <p><span>Booking and Service</span></p>
                                        <p><span>Phone :</span> +91 7674905852</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Card>
                        <br></br>
                        <Card className='helpLineCard wow fadeInLeft' body>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={4}>
                                        <img src={profile} style={{height:'100px',width:'100px'}}></img>
                                    </Col>
                                    <Col sm={8}>
                                        <h2 style={{color:'#ffbf00',fontFamily:'initial'}}>Suresh G</h2>
                                        <p><span>Mananer</span></p>
                                        <p><span>Phone :</span> +91 7674905852</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Card>
                        </Col>
                    </Row>
                </Col>
             </div>
         )
     }
 }
 export default Contact;