import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar , img} from 'react-bootstrap';
import styled from 'styled-components';
import logoeksad from '../assets/logo.png';


const Styles = styled.div`
  .navbar {
    background-color: #214A9A;
  }
  a, .navbar-brand, .navbar-nav  {
    color: #bbb;
    &:hover {
      color: white;
    }

    .navbar-link {

      float: left;
            color: white;
            text-align: center;
            padding: 16px;
    }
  }
`;

const support ={
    width: "52px",
    height: "52px",
    float: "right"
};




export const NavigationBar = () => (
  <Styles> 
    <Navbar expand="lg">
      <a href="/" >
    <img src= {logoeksad} alt="eksad" style={support} />
    </a>
      <Navbar.Brand href="/"> &nbsp; <b> LACAK BARANG </b>  </Navbar.Brand>
      <Navbar.Brand href="/"> &nbsp;HOME </Navbar.Brand>
      <Navbar.Brand href="/about"> &nbsp;ABOUT </Navbar.Brand>
      <Navbar.Brand href="/contact"> &nbsp;CONTACT </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      
      {/* <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="ml-auto">

          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
          
        </Nav>

      </Navbar.Collapse> */}
 <div id="masuk" class="Login"> </div>
    </Navbar>
  </Styles >
)