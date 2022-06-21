import React, { Component } from 'react';
import logo from '../images/uop-logo.png';      // importing logo of university
import '../styles/styles-nav.css';


// Navbar component
class Navbar extends Component {

   render(){
    return(

    <nav className='nav'>

        <img 
            src={logo}
            width='90'
            height='90'
            className='navbar-logo'
        />
        <span>
        <ul>
            <h1 className = "nav-title">University Of Peradeniya</h1>
            <h2 className= 'nav-sub-title'>Post-Graduate Students Programme</h2>
        </ul>
        </span>
    </nav>
    );
   }
}
 
export default Navbar;
