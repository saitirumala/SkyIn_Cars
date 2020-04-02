import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row, Card, CardBody, CardTitle, CardText, Button, Label,Input } from 'reactstrap';
import vehicle1 from '../images/vehicle1.png';
 import vehicle2 from '../images/vehicle2.png';
import vehicle3 from '../images/vehicle3.png';
import vehicle4 from '../images/vehicle4.png';
import bike4 from '../images/bike4.png';
// import bike5 from '../images/bike5.png';
import bike1 from '../images/bike1.png';
// import bike2 from '../images/bike2.png';
// import bike3 from '../images/bike3.png';
import moment from 'moment';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from 'lodash';
import WOW from 'wowjs';
class Home extends React.Component {
    state={
        pickUpstartDate:new Date(),
        pickUpsetStartDate:new Date(),
        returnstartDate:new Date(),
        returnsetStartDate:new Date(),
        data:[],
        value:''
    }
    componentDidMount(){
        new WOW.WOW().init();
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log('e.target.value',e.target.value)
    }
    onClick =(e)=>{
e.preventDefault();
console.log('value',this.state.value)
 this.state.data.push([{'vehicle_type':this.state.vehicalType,'vehicle_model':this.state.vehicalModel,'vehicle_':this.state.location,
'name':this.state.name,'phone':this.state.phone,'pickUpDate':this.state.pickUpstartDate,'returnDate':this.state.returnstartDate
}])
// this.setState({
//     data:[...this.state.data]
// })
console.log('data',this.state.data[0]) 
this.setState({
    
})
    }
    onPickUpDate=(date)=>{
        const pickUpDate = moment(date).format('DD MM YYYY h:mm a')
console.log('date',pickUpDate)
this.setState({
    pickUpstartDate :pickUpDate
})
    }
    onReturnDate=(date)=>{
const returnDate = moment(date).format('DD MM YYYY h:mm a')
        console.log('date',returnDate)
        this.setState({
            returnstartDate:returnDate
        })
        }
    render() {
       const {pickUpstartDate,pickUpsetStartDate,returnstartDate,returnsetStartDate,} = this.state;
        // const [startDate, setStartDate] = useState(new Date());
        const pickDate= new Date(pickUpstartDate)
        const return_Date= new Date(returnstartDate)
console.log('pickDate',pickUpstartDate)
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
        return (
            <div className="homebg">

                <Col>
                    <Row>
                        <Col xs='12' sm='12' md='8' lg='8'>
                            <Carousel
                                swipeable={false}
                                draggable={false}
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

                                <div><img src={vehicle1}></img></div>
                                <div><img src={bike1}></img></div>
                                <div><img src={vehicle2}></img> </div>
                                {/* <div><img src={bike2}></img></div> */}
                                {/* <div><img src={bike5}></img></div> */}
                                <div><img src={vehicle3}></img> </div>
                                {/* <div><img src={bike3}></img></div> */}
                                <div><img src={vehicle4}></img> </div>
                                <div><img src={bike4}></img> </div>


                            </Carousel>
                    </Col>
                        <Col xs='12' sm='12' md='4' lg='4'>

                            <Card className='cardbody wow zoomIn' body>
                                <CardTitle style={{fontFamily:'initial',fontSize:'30px',fontWeight:'bold'}}><i className="fa fa-car"></i>&nbsp;Advance Booking <i className="fa fa-motorcycle"></i></CardTitle>
                                <CardBody style={{paddingBottom:'0px'}}>
                                    <AvForm onValidSubmit={this.onClick} >
                                        <AvField className='inputField'  type="select" name="vehicalType" value={this.state.vehicalType} onChange={this.onChange} required>
                                            <option>Select Vehicle Type</option>
                                            <option value='Car'>Car </option>
                                            <option value='Bike'> Bike </option>
                                        </AvField>
                                        <AvField className='inputField' type="select" name="vehicalModel"  value={this.state.vehicalModel} onChange={this.onChange} required>
                                            <option>Select Vehicle Model</option>
                                            <option value='Car'> Car </option>
                                            <option value='Bike'> Bike </option>
                                        </AvField>
                                        <AvField className='inputField' type="select" name="location"  value={this.state.location} onChange={this.onChange} required>
                                            <option>Select Branch Location</option>
                                            <option value='Car'> Car </option>
                                            <option value='Bike'> Bike </option>
                                        </AvField>
                                        <Input className='inputField' type='tel' placeholder=' Customer Name' name="name" value={this.state.name} onChange={this.onChange}></Input>
                                        <Input style={{marginTop:'13px'}} className='inputField' type='tel' placeholder=' Phone Number'  value={this.state.phone} name="phone" onChange={this.onChange}></Input>
                                        <Label style={{textAlign:'center',color:'#495057'}}><i className="fas fa-calendar-day"></i> Pick Up </Label>
                                        <DatePicker
                                            className="datepicker"
                                            name='pickUpstartDate'
                                            selected={pickUpstartDate}
                                            onChange={date => this.onPickUpDate(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                        />
                                       <Label style={{textAlign:'center',color:'#495057'}}><i className="fas fa-calendar-day"></i> Return </Label>
                                        <DatePicker
                                            className="datepicker"
                                            name='returnstartDate'
                                            selected={returnstartDate}
                                            onChange={date => this.onReturnDate(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                              
                                        />
                                        <Button style={{margin:'20px'}} type='submit' > Conform Booking </Button>
                                    </AvForm>
                                </CardBody>
                                
                            </Card>

                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}
export default Home;