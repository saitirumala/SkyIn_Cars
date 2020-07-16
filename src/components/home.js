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
import location_data from './location.json';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TimePicker from 'react-time-picker';

class Home extends React.Component {
    state={
        pickUpstartDate:new Date(),
        pickUpsetStartDate:new Date(),
        returnstartDate:new Date(),
        returnsetStartDate:new Date(),
        date:[new Date(), new Date()],
        data:[],
        pickUp_time:moment(new Date()).format('h:mm'),
        return_time:moment(new Date()).format('h:mm'),
        value:'',

        formData:[]
    }
    componentDidMount(){
        
        toast('succ');
        new WOW.WOW().init();
    }
    dateChange = date => this.setState({ date })
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log('e.target.value',e.target.value)
    }
    onClick =(e)=>{
        
e.preventDefault();
const pickDate=this.state.date[0]
const returnDate=this.state.date[1]


 this.state.data.push([{'vehicle_type':this.state.vehicalType,'vehicle_model':this.state.vehicalModel,'vehicle_location':this.state.location,
'name':this.state.name,'phone':this.state.phone,'pick_up_date':pickDate,'return_date':returnDate,pickUp_time:this.state.pickUp_time,return_time:this.state.return_time
}])

// this.setState({
//     data:[...this.state.data]
// })
// console.log('data',this.state.data[0]) 
this.setState({
    formData:this.state.data
},()=>{ console.log('booking data',this.state.formData)})
    }
    onPickUpDate=(date)=>{
        const pickUpDate = moment(date).format('DD MM YYYY h:mm a')
// console.log('date',pickUpDate)
this.setState({
    pickUpstartDate :pickUpDate
})
    }
    onReturnDate=(date)=>{
const returnDate = moment(date).format('DD MM YYYY h:mm a')
        
        this.setState({
            returnstartDate:returnDate
        })
        }
        onPickTimeChange = (pickUp_time )=>{
            this.setState({ pickUp_time })
        } 
        onReturnTimeChange = (return_time) =>{
          
            this.setState({ return_time })
        }
    render() {
        // alert(moment(this.state.return_time))
        // console.log('value',this.state.date[0])
        // console.log('locationData',location_data)
       const {pickUpstartDate,pickUpsetStartDate,returnstartDate,returnsetStartDate,} = this.state;
        // const [startDate, setStartDate] = useState(new Date());
        const pickDate= new Date(pickUpstartDate)
        const return_Date= new Date(returnstartDate)
        const modelType1 = location_data[2].booking_data[0].vehicle_model1;
        const modelType2 = location_data[2].booking_data[0].vehicle_model2;
// console.log('pickDate',pickUpstartDate)
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
                breakpoint: { max: 425, min: 200 },
                
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
        // console.log('%%%%%%%',this.state.vehicalType)
        return (
            <div className="homebg ">

                <Col>
                    <Row>
                        <Col xs='12' sm='12' md='8' lg='8'>
                            <Carousel
                                swipeable={ true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={1000}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-50-px"
                            >

                                <div>
                                   <p className='cotashans'>No Deposit to pay for vehicle rental</p> 
                                    <img className='imgg' src={vehicle1}></img></div>
                                <div>
                                <p className='cotashans'>Best Bike and Car rental service in the city</p>
                                    <img className='imgg' src={bike1}></img></div>
                                <div>
                                <p className='cotashans'>low cost rentals for the best experience</p> 
                                    
                                    <img className='imgg' src={vehicle2}></img> </div>
                                {/* <div><img src={bike2}></img></div> */}
                                {/* <div><img src={bike5}></img></div> */}
                                <div>
                               
                                    <img className='imgg' src={vehicle3}></img> </div>
                                {/* <div><img src={bike3}></img></div> */}
                                <div>
                                <p className='cotashans'>No Deposit to pay for vehicle rental</p> 
                                    <img className='imgg' src={vehicle4}></img> </div>
                                <div><img className='imgg' src={bike4}></img> </div>


                            </Carousel>
                    </Col>
                        <Col xs='12' sm='12' md='4' lg='4'>

                            <Card className='cardbody wow zoomIn' body>
                                <CardTitle style={{fontFamily:'initial',fontSize:'30px',fontWeight:'bold'}}><i className="fa fa-car"></i>&nbsp;Advance Booking <i className="fa fa-motorcycle"></i></CardTitle>
                                <CardBody style={{paddingBottom:'0px'}}>
                                    <AvForm onValidSubmit={this.onClick} >
                                        
                                                <AvField className='inputField'  type="select" name="vehicalType" value={this.state.vehicalType} onChange={this.onChange} errorMessage='Vehical type is required' required>
                                                <option>Select Vehicle Type</option>
                                                {location_data[1].vehicle.map((data)=>{
                                            return(
                                            <option value={data.type}>{data.type}</option>
                                                )
                                            })}
                                            </AvField>
                                        <AvField className='inputField' type="select" name="vehicalModel"  value={this.state.vehicalModel} onChange={this.onChange}  errorMessage='Vehical model is required' required>
                                           
                                            <option>Select Vehicle Model</option>
                                            {this.state.vehicalType==='Car'?
                                        <>
                                        {
                                            modelType1.map((data)=>{
                                                return (
                                                    <option value={data.model}>{data.model}</option>
                                                )
                                            })
                                        }
                                        </>:
                                        <>
                                        {
                                            modelType2.map((data)=>{
                                                return (
                                                    <option value={data.model}>{data.model}</option>
                                                )
                                            })
                                        } 
                                        </>   
                                        }
                                           
                                        </AvField>
                                        <AvField className='inputField' type="select" name="location"  value={this.state.location} onChange={this.onChange}  errorMessage='Location is required' required>
                                            <option>Select Branch Location</option>
                                            <option>Select Vehicle Type</option>
                                                {location_data[0].location.map((data)=>{
                                            return(
                                            <option key={data.id} value={data.location}>{data.location}</option>
                                                )
                                            })}
                                        </AvField>
                                        <Input className='inputField' type='tel' placeholder='Customer Name' name="name" value={this.state.name} onChange={this.onChange}></Input>
                                        <Input style={{marginTop:'13px'}} className='inputField' type='tel' placeholder=' Phone Number'  value={this.state.phone} name="phone" onChange={this.onChange}></Input>
                                        {/* <Label style={{textAlign:'center',color:'#495057'}}><i className="fas fa-calendar-day"></i> Pick Up </Label>
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
                              
                                        /> */}
                                    
                                        <DateRangePicker
                                        className='daterange'
                                        onChange={this.dateChange}
                                        value={this.state.date}
                                        />
                                      
                                        
                                        <Row>
                                            <Col sm={6}>
                                            <Label>Pick Up Time</Label>
                                                 <TimePicker
                                            onChange={this.onPickTimeChange}
                                            format='h:mm aa'
                                            value={this.state.pickUp_time}
                                        /></Col>
                                        <Col sm={6}>
                                            <Label>Return Time</Label>
                                        <TimePicker
                                            onChange={this.onReturnTimeChange}
                                            format='h:mm aa'
                                            value={this.state.return_time}
                                        />
                                        </Col>
                                        </Row>
                                       
                                          
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
