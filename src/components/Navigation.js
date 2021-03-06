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
  NavbarText
} from 'reactstrap';
import WOW from 'wowjs';
import { Link, animateScroll as scroll } from "react-scroll";
import contactLogo from '../images/contactLogo.png';
import logo from '../images/skyinLogo.jpeg'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const mouseOver= 'true';
//   new WOW.WOW().init();

  return (
    <div>
      <Navbar style={{backgroundColor:'white',height:'130px'}} fixed='top' expand="md" tabs>
  <NavbarBrand className='title wow flipInX' data-wow-iteration='infinite' data-wow-duration='3s'><img className='navlogo' src={logo}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{backgroundColor:'#ffbf00'}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" navbarClass mr-auto" navbar>
            <NavItem className='cursor navcol'>
              <Link
                activeClass="active"
                className='navTitles'
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // style={{mouseOver='true'? border:'1px soid black !important'}}
              >
                <i className="fa fa-home"></i>&nbsp;
                Home
              </Link>
              {/* <NavLink onClick={()=>history.push('/')}>Reactstrap</NavLink> */}
            </NavItem>
            <NavItem className='cursor navcol'>
              <Link
                activeClass="active"
                className='navTitles'
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <i className="fa fa-tasks"></i>&nbsp;
                Services
              </Link>
              {/* <NavLink onClick={()=>history.push('/map')} >Map</NavLink> */}
            </NavItem>
            <NavItem className='cursor navcol'>
              <Link
                activeClass="active"
                className='navTitles'
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <i className="fa fa-motorcycle"></i>&nbsp;
                Vehicle Models
              </Link>
              {/* <NavLink onClick={()=>history.push('/calculator')} >Calculator</NavLink> */}
            </NavItem>
            {/* <NavItem className='cursor navcol'>
              <Link
              className='navTitles'
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><i className="fa fa-th-large"></i>&nbsp;
                Blog
              </Link>
            </NavItem> */}
            <NavItem className='cursor navcol'>
              <Link
               className='navTitles'
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > 
              <i className="fa fa-map-marker"></i>&nbsp;
                Locations
              </Link>
              {/* <NavLink onClick={()=>history.push('/form')}>Form</NavLink> */}
            </NavItem>
            <NavItem className='cursor navcol'>
              <Link
                activeClass="active"
                to="section6"
                className='navTitles'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             
              >
                <i className="fa fa-phone"></i>&nbsp;
                Contact Us
                {/* <img src={contactLogo}></img> */}
              </Link>
              {/* <NavLink onClick={()=>history.push('/form')}>Form</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
