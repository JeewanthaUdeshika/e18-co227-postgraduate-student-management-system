<<<<<<< HEAD
import React from "react";
import Profile from "../components/profile";
import ResponsiveAppBar from "../components/navbarNew";
import Footer from "../components/footer";
=======
import React from 'react';
import Profile from '../components/profile';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

function ProfilePage() {
  return (
    <div class="container">
      <div style={{ marginBottom: "10px" }}>
        <ResponsiveAppBar />
      </div>

      <div
        class="row justify-content-md-center"
        style={{ marginTop: "65px", marginBottom: "20px" }}
      >
        <Profile />
      </div>

<<<<<<< HEAD
      <div style={{ marginTop: "10px" }}>
        <Footer />
      </div>
    </div>
  );
=======

function ProfilePage() {
    
        return (  


            <div class='container'>

                <div style={{marginBottom: '10px'}}>
                    <ResponsiveAppBar/>
                </div>

                <div class="row justify-content-md-center" style={{marginTop: '65px', marginBottom: '20px'}}>
                    <Profile/>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Footer/>
                </div>

            </div>

        );
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
}

export default ProfilePage;
