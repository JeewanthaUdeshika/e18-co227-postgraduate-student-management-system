import React, { Component } from 'react';       // Importing React module
import logo from '../images/uop-logo.png';      // importing logo of university



class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (  
            <nav class = "navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class = "container-fluid">
                    <a class="navbar-brand" href="#" style={{fontSize: '30px'}}>
                        <img 
                            src={logo}
                            width='45px'
                            height='45px'
                            class="d-inline-block align-top"
                            alt='UoP'
                        />
                        &nbsp;&nbsp;
                        University of Peradeniya
                        <span class="navbar-text" style={{marginLeft: '50px', fontSize:'20px'}}>    
                            Post-Graduate Students Program
                        </span>
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