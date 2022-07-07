import React, { Component } from 'react';       // Import React to component
import profilePicture from '../images/profile-picture.jpg';    // import profile picture



// Class to Create profile component

class Profile extends Component {

    constructor(props) {
        super(props);
    }


    // State contains all details of the user
    // This details are shown in user profile
    // ToDo: Implement functions for set state
    // ToDo: Implement function for split links for separate fields (GitHub, LikedIn, Other) ==> Comma split can be used
    // ToDo: Implement a function for edit profile for administrator
    // ToDo: Implement a function for handling profile icture of the user 


    state ={
        profile: profilePicture,                                                        // Profile Picture
        name: "Tharindu Chamod",                                                        // Name of User
        registrationNumber: 'E/18/285',                                                 // Registration Number
        address: "187/5, Sri Gunananda Mawatha, Medagoda, Warakapola",                  // Postal Address of the user
        email: "someone@gmail.com",                                                     // E-Mail address of the user
        contactNumber: '0766624632',                                                    // Conrtact Number of the user
        researchTitle: "Research Title",                                                // Research Title of the user
        supervisor: 'Prof. Roshan Ragel',                                               // Supervisor/s
        degree: 'PhD',                                                                  // Type of degree
        timeperiod: 'Full Time',                                                        // Time period of the degree programme

        links: {                                                                        // JSON object that contains socail media links of the user
            github: "Github Link",
            linkedin: "LinkedIn Link",
            otherLinks: "Other Links"
        }
    }


    render() { 
        return (  


            <div class="card" style={{width: '800px'}}>


                <div class="text-center" style={{marginTop: '20px'}}>
                    <img src={this.state.profile} width="170px" height="170px" class="rounded" alt="profile picture"/>
                </div>

                
                {/* Basic details including Name as title of the card */}

                <div class="card-body">
                    <p class="card-title" style={{fontSize: '30px', fontWeight: 'bold', fontWeight: 'bolder'}}>
                        {this.state.name}</p>


                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>
                    
                        <h4 style={{color: 'gray', fontWeight: 'lighter'}}>Personal Information</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />

                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Registration Number : </span>
                        {this.state.registrationNumber}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Address : </span>
                        {this.state.address}
                    </p>

                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>E-Mail : </span>
                        {this.state.email}
                    </p>

                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Contact Number : </span>
                        {this.state.contactNumber}
                    </p>





                    {/* Post Graduate Information */}

                    
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>

                        <h4 style={{ color: 'gray', fontWeight: 'lighter'}}>Post-Graduate Information</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />

                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Research Title : </span>
                        {this.state.researchTitle}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Supervisor/s : </span>
                        {this.state.supervisor}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Degree : </span>
                        {this.state.degree}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Time Period : </span>
                        {this.state.timeperiod}
                    </p>




                    {/* Social Media Information */}

                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>
                        
                        <h4 style={{color: 'gray', fontWeight: 'lighter'}}>Social Media</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />
                        
                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>GitHub : </span>
                        {this.state.links.github}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>LinkedIn : </span>
                        {this.state.links.linkedin}
                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Personal Website / Other : </span>
                        {this.state.links.otherLinks}
                    </p>


        
                    <a href="#" class="btn btn-success">Approve</a>
                    
                    <a href='#' class="btn btn-danger" style={{marginLeft: '25px'}}>Decline</a>
                        

                </div>


            </div>


        );
    }
}
 
export default Profile;