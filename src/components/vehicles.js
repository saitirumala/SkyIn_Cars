import React from 'react';
import { Col, Row, Card, CardBody, CardTitle, Nav, NavItem, NavLink, CardText, Button, Label, Input, Table } from 'reactstrap';
import vehicles5 from '../images/vehicle5.png';
import { useMediaQuery } from 'react-responsive';
// import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import StarRating from './star_rating';
import WOW from 'wowjs';
import reviewData from './reviews.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from 'react-star-ratings';
import location_data from './location.json';

class Vehicles extends React.Component {
    state = {
        vehicalType:'Car'
    }
    componentDidMount() {
//         window.wow = new WOW.WOW({
//             live: false
//         });

//         window.wow.init();
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('e.target.value', e.target.value)
    }
    changeRating = (e, newRating, name) => {
        console.log(e, newRating, name)
        this.setState({
            rating: e
        });
    }

    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
        const modelType1 = location_data[2].booking_data[0].vehicle_model1;
        const modelType2 = location_data[2].booking_data[0].vehicle_model2;
        return (
            <Col className="bg_color2" sm={12}>
                <div>
                    <h2 className="services wow zoomInDown" >Vehicle Models</h2>
                    <span className="underline">&nbsp;</span>
                    <Row>
                        <Col sm={2}>
                            <AvForm>
                                <AvField style={{ backgroundColor: '#ffe599'}} className='inputField' type="select" name="vehicalType" value={this.state.vehicalType} onChange={this.onChange} required>
                                    {/* <option>Select Vehicle Type</option> */}
                                    {location_data[1].vehicle.map((data)=>{
                                            return(
                                            <option value={data.type}>{data.type}</option>
                                                )
                                            })}
                                </AvField>

                            </AvForm>
                            <Nav vertical>
                            {this.state.vehicalType==='Car'?
                                        <>
                                        {
                                            modelType1.map((data)=>{
                                                return (
                                                    <NavItem>
                                                    <NavLink className='vehicleType' >{data.model}</NavLink>
                                                </NavItem>
                                                )
                                            })
                                        }
                                        </>:
                                        <>
                                        {
                                            modelType2.map((data)=>{
                                                return (
                                                    <NavItem>
                                                    <NavLink className='vehicleType' >{data.model}</NavLink>
                                                </NavItem>
                                                )
                                            })
                                        } 
                                        </>   
                                        }
                              
                                
                            </Nav>
                        </Col>
                        <Col sm={6}>

                            <img className='wow fadeInLeft' src={vehicles5}></img>
                            {/* <img src='../images/vehicle5.png'></img> */}
                            <p style={{ textAlign: 'initial', fontWeight: 'bold', fontSize: '20px' }}>Customer Reviews</p>
                            <Carousel
                                swipeable={false}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-50-px"
                            >
                          
                                {reviewData.map((data) => {
                                    return (
                                        <>
                                        <StarRatings
                                        //   rating={this.state.rating}
                                        starRatedColor="#fec620"
                                        rating={data.rating}
                                        starDimension="40px"
                                        starSpacing="15px"
                                        changeRating={(e) => this.changeRating(e)}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                        <Card className='review_card_Body wow zoomIn' body>
                                            <CardTitle className='review_title'>{data.title}</CardTitle>
                                            <CardText>
                                                {data.body}
                                            </CardText>
                                        </Card>
                                        </>
                                    )
                                })
                                }
                            </Carousel>
                        </Col>
                        <Col sm={4}>
                            <p style={{ backgroundColor: '#ffe599', padding: '20px', fontFamily: 'inherit', fontSize: '25px', fontWeight: 'bolder', color: 'red' }}> Santro 1.1 MT Asta </p>
                            <p>12 Hours Booking</p>
                            <Table striped>
                                <thead >
                                </thead>
                                <tbody>
                                    <tr >
                                        <th className="tableAlign" scope="row">80 Km</th>
                                        <td className="tableAlign">900 Rs</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">120 Km</th>
                                        <td className="tableAlign">1100 Rs</td>
                                    </tr>

                                    <tr>
                                        <th className="tableAlign" scope="row">180 Km</th>
                                        <td className="tableAlign">1400 Rs</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>24 Hours Booking</p>
                            <Table striped>
                                <thead >
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="tableAlign" scope="row">120 Km</th>
                                        <td className="tableAlign">1400 Rs</td>
                                    </tr>

                                    <tr>
                                        <th className="tableAlign" scope="row">240 Km</th>
                                        <td className="tableAlign">2000 Rs</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">360 Km</th>
                                        <td className="tableAlign">2400 Rs</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>EXTRA</p>
                            <Table striped>
                                <thead >
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="tableAlign" scope="row">1 KMS</th>
                                        <td className="tableAlign">8 Rs</td>
                                    </tr>

                                    <tr>
                                        <th className="tableAlign" scope="row">1 HOUR</th>
                                        <td className="tableAlign">150 Rs</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Col>

        )
    }
}
export default Vehicles;
