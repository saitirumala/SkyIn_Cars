
import React, { Component } from "react";
import ReactMaps from "./reactMaps";
// import places from "./places.json";
// import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Col,Row } from 'reactstrap'

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShow: true,
      isOpen: false,
      places: [],
      directions: '',
      address: '',
      LatLng: '',
      zoom: '',
      latitude: '',
      langitude: ''
    };
  }
  componentDidMount() {
    const google = window.google


    this.hideInfoWindow();
  }

  hideInfoWindow = () => {

    setTimeout(() => {
      this.setState({
        isOpen: 'false'
      });
    }, 3000);
  };
  onMarkerClick = id => {
    console.log('id', id)
    this.setState({
      isMarkerShow: true, isOpen: 'true'
    });
  };

  onCloseClick = () => {
    this.setState({
      isOpen: "false"
    });
  };
  addressChange = (address) => {
    this.setState({
      address
    })

  };
  addressSelect = (address) => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(result => getLatLng(result[0]))
      .then(LatLng => {
        console.log(LatLng)
        this.setState({
          LatLng: LatLng, zoom: 10,
          latitude: parseFloat(LatLng.lat),
          langitude: parseFloat(LatLng.lng),
          address: address
        })
      })
      .catch(error => console.log('error', error));

  };
  render() {
    // console.log('ramesh',this.state.directions)
    return (
      <div className="bg_color4" >
        <h2 className="services"> Locations </h2>
        <Row>
          <Col sm={1}></Col>
          <Col className="skyIn_map" sm={10}>
            <ReactMaps
             
              directions={this.state.directions}
              LatLng={this.state.LatLng}
              address={this.state.address}
              //places={places}
              zoom={this.state.zoom}
              latitude={this.state.latitude}
              langitude={this.state.langitude}
              isOpen={this.state.isOpen}
              isMarkerShow={this.state.isMarkerShow}
              onMarkerClick={this.onMarkerClick}
              onCloseClick={this.onCloseClick}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSLDGrjkwrVhqe2zs8a7R1FfY7XRKyfBI&libraries=geometry,drawing,places&sensor=false"
              loadingElement={<div style={{ height: "100%" }}></div>}
              containerElement={<div style={{ height: "400px" }}></div>}
              mapElement={<div style={{ height: "100%" }}></div>}
              {...this.props}
            >
            </ReactMaps>
          </Col>
          <Col sm={1}></Col>
        </Row>



      </div>
    );
  }
}
export default MapApp;