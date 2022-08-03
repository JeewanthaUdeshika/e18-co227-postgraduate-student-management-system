import React, { Component } from 'react';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import Provisionalregister from '../components/provisionalRegister'

// Class for render page => Registration for registered students
// Component used => Navbar / ProvisionalRegister / Footer

class ProRegPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <div>

                <ResponsiveAppBar/>

                <div style={{marginTop: '70px'}}>
                    <Provisionalregister/>
                </div>

                <Footer/>
            </div>
         );
    }
}
 
export default ProRegPage;
