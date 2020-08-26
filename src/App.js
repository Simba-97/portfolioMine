import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './components/Footer';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: "Hritik Kumar Singh",
       headerLinks: [
         {title: 'Home', path: '/'},
         {title: 'About me', path: '/about'},
         {title: 'Contact', path: '/contact'}
        ],
       home: {
         title: 'Hardwork is the key to success!',
         subtitle: 'Here are some projects that I have created',
         text: 'Check out the projects below.'

       },
       about: {
        title: 'About',
        subtitle: 'Here is a small introduction to get you started',
       },
      contact: {
        title: 'Let\'s get Connected',
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className= "p=0" fluid = {true}>
          
          <Navbar className = "border-bottom" bg = "transparent" expand="lg">
            <NavbarBrand>
              <h3>Hi There! Welcome to my Portfoilio!</h3 >
            </NavbarBrand>
            
            <Navbar.Toggle aria-controls = "navbar-toggling-system"/>
            <Navbar.Collapse id= "navbar-toggling-system">
              <Nav className="ml-auto">
                <div style ={{padding : 10}}>
                  <Link className="nav=link" to="/"> Home </Link>
                </div>
                <div style ={{padding : 10}}>
                  <Link className="nav=link" to="/about"> About me </Link>
                </div>
                <div style ={{padding : 10}}>
                  <Link className="nav=link" to="/contact"> Contact </Link>
                </div>
                
                
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>

          <Footer/>
        
        
        </Container>
      </Router>
    );
  }
}

export default App
