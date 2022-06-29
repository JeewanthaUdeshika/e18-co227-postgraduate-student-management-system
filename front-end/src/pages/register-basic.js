import React, { Component } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Registration from "../components/register";


// Class for render page => Basic registration Page
// Component used => Navbar / ProvisionalRegister / Footer


class RegisterBasic extends Component {

    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>

                <div style={{marginTop: '30px'}}>
                    <Registration/>
                </div>

                <Footer/>
            </div>
        );
    }
}
 
export default RegisterBasic;