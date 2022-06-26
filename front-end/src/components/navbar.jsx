import React, { Component } from 'react';       // Importing React module
import logo from '../images/uop-logo.png';      // importing logo of university



class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (  
            <nav class = "navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{height: '110px'}}>
                <div class = "container-fluid" style={{marginTop: '15px'}}>
                    <a class="navbar-brand" href="#" style={{fontSize: '30px'}}>
                        <img 
                            src={logo}
                            width='70px'
                            height='70px'
                            class="d-inline-block align-top"
                            alt='UoP'
                        />
                        &nbsp;&nbsp;
                    
                        <ul style={{listStyle: 'none', marginLeft: '60px', marginTop:'-75px' , lineHeight: '25px'}}>
                            <li><span style={{fontSize: '25px'}}>Department of Computer Engineering</span></li>
                            <li><span style={{fontSize: '20px'}}>Faculty of Engineering</span></li>
                            <li><span style={{fontSize: '17px'}}>University of Peradeniya</span></li>
                        </ul>
                    </a>
                    
                </div>
            </nav>
        );
    }
}
 
export default Navbar;

/*
    Font Size of 'University of Peradeniya' is set to 30 px
    Font size of 'UPost-Graduate Students Program' is set to 20px
    Logo size is set to 45 x 45 px
    two line breaking spaces were added before university name
*/