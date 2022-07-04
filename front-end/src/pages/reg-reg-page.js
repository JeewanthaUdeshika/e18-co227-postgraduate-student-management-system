import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import RegRegister from '../components/regRegister';

// Class for render page => Registration for registered students
// Component used => Navbar / RegRegister / Footer


class RegisteredRegPage extends Component {
    constructor(props) {
        super(props);
    }
    

    render() { 
        return ( 
            <div>
                <Navbar/>

                <div style={{marginTop: "70px"}}>
                    <RegRegister/>
                </div>

                <Footer/>
            </div>
         );
    }
}
 
export default RegisteredRegPage;
