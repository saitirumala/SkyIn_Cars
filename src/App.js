import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/Navigation';
import Services from './components/Services';
import Vehicles from './components/vehicles';
import Blog from './components/blog';
import Locations from './components/locations';
import Contact from './components/contact';
import Footer from './components/footer';
import { Route, Redirect, Switch,} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <section
          title='section1'
          id='section1'
          >
      <Home ></Home>
      <div class="arrow-down"></div>
      </section>
      <section
          title='section2'
          id='section2'
          >
      <Services></Services>
      </section>
      <section
          title='section3'
          id='section3'
          >
      <Vehicles></Vehicles>
      </section>
      <section
          title='section4'
          id='section4'
          >
      {/* <Blog></Blog> */}
      </section>
      <section
          title='section5'
          id='section5'
          >
      <Locations></Locations>
      </section>
      <section
          title='section6'
          id='section6'
          >
      <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
