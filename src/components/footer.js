import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col,
  Row
} from 'reactstrap';
import WOW from 'wowjs';
import { Link, animateScroll as scroll } from "react-scroll";
// import contactLogo from '../images/contactLogo.png';
// import logo from '../images/skyinLogo.jpeg'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const mouseOver= 'true';
//   new WOW.WOW().init();

  return (
    <Col style={{padding:'0px'}}>
      <Navbar className="footerbar"  expand="md" tabs>
          <div className="footerblock">
          <i className="fa fa-linkedin-square fa-2x footerIcons"   aria-hidden="true"></i>
     <i className="fa fa-envelope fa-2x footerIcons"  aria-hidden="true"></i>
     <i className="fa fa-facebook-square fa-2x footerIcons"  aria-hidden="true"></i>
     <i className="fa fa-github-square fa-2x footerIcons"  aria-hidden="true"></i>
     <h5 className="footerprg" >@ 2020. Software Developer T Sai prasad</h5>
     <h5 className="footerprg" style={{textAlign:'match-parent'}}>+91 9492704294</h5>
          </div>
    
      </Navbar>
    </Col>
  );
}

export default Example;
