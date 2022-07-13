import React, { Component } from 'react';
import Profile from '../components/profile';
import Navbar from '../components/navbar';
import Footer from '../components/footer';




class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }


    state = {  }


    render() { 
        return (  


            <div class='container'>

                <div>
                    <Navbar/>
                </div>

                <div class="row justify-content-md-center" style={{marginTop: '65px', marginBottom: '20px'}}>
                    <Profile/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }
}
 
export default ProfilePage;