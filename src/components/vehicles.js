import React from 'react';
import { Col, Row, Card, CardBody, CardTitle, Nav, NavItem, NavLink, CardText, Button, Label, Input, Table } from 'reactstrap';
import vehicles5 from '../images/vehicle5.png';
import { useMediaQuery } from 'react-responsive';
// import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import StarRating from './star_rating';
import WOW from 'wowjs'
class Vehicles extends React.Component {
    state={

    }
    componentDidMount(){
        window.wow = new WOW.WOW({
            live: false
        });
        
        window.wow.init();
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log('e.target.value',e.target.value)
    }

    render() {

        return (
            <Col className="bg_color2" sm={12}>
                <div>
                    <h2 className="services wow zoomInDown" >Vehicle Models - Our rental fleet at a glance</h2>
                    <Row>
                        <Col sm={2}>
                            <AvForm>
                                <AvField style={{backgroundColor:'#fec620'}} className='inputField' type="select" name="vehicalType" value={this.state.vehicalType} onChange={this.onChange} required>
                                    {/* <option>Select Vehicle Type</option> */}
                                    <option value='Car'> Car </option>
                                    <option value='Bike'> Bike </option>
                                </AvField>
                               
                            </AvForm>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink >Audi</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >Suzuki</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >Toyota Liva</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >Honda city</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >Benz</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >Bmw</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={6}>
                            
                            <img className='wow fadeInLeft'  src={vehicles5}></img>
                          
                            <StarRating></StarRating>
                        </Col>
                        <Col sm={4}>
                            <p style={{ backgroundColor: '#fec620', padding: '20px', fontFamily: 'inherit', fontSize: '25px', fontWeight: 'bolder', color: 'red' }}> INR 37.40 Rent per day</p>
                            <Table striped>
                                <thead >
                                </thead>
                                <tbody>
                                    <tr >
                                        <th className="tableAlign" scope="row">Model</th>
                                        <td className="tableAlign">Limousine</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">Doors</th>
                                        <td className="tableAlign">4</td>
                                    </tr>

                                    <tr>
                                        <th className="tableAlign" scope="row">Seats</th>
                                        <td className="tableAlign">5</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">Luggage</th>
                                        <td className="tableAlign">2 Suitcases / 2 Bags</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">Transmission</th>
                                        <td className="tableAlign">Automatic</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">Air conditioning</th>
                                        <td className="tableAlign">Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="tableAlign" scope="row">Milege</th>
                                        <td className="tableAlign">25 km/lt</td>
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