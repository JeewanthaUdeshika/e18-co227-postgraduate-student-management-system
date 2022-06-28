import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Login from '../components/login';


class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    
    
    render() { 
        return ( 
            <div class="container">

                <Navbar/>

                <div style={{marginTop: '50px'}}>
                    <Login/>
                </div>

                <div style={{marginTop: '-50px'}}>
                    <Footer/>
                </div>
                
            </div>

         );
    }
}
 
export default LoginPage;