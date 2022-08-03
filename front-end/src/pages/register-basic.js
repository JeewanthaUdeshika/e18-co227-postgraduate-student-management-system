import React, { Component } from 'react';
import Footer from "../components/footer";
import ResponsiveAppBar from '../components/navbarNew';
import Registration from "../components/register";


// Class for render page => Basic registration Page
// Component used => Navbar / ProvisionalRegister / Footer


class RegisterBasic extends Component {

    state = {  } 
    render() { 
        return (
            <div>
                <ResponsiveAppBar/>

                <div style={{marginTop: '30px'}}>
                    <Registration/>
                </div>

                <Footer/>
            </div>
        );
    }
}
 
export default RegisterBasic;