import { width } from '@mui/system';
import { Button } from 'bootstrap';
import React, { Component } from 'react';                      // Import React to component
import profilePicture from '../images/profile-picture.jpg';    // import profile picture
import Download from '../images/download.png'



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
        supervisor: 'DR. Upul Jayasinghe',                                              // Supervisor/s
        degree: 'PhD',                                                                  // Type of degree
        timeperiod: 'Full Time',                                                        // Time period of the degree programme

        links: {                                                                        // JSON object that contains socail media links of the user
            github: "Github Link",
            linkedin: "LinkedIn Link",
            otherLinks: "Other Links"
        },

        // variable related to edit profile function
        readOnly: true,
        editConfirm: true,                  // State related to the visibility of edits confirmation
        approveConfirm: false,              // State related to the visibility of approve confirmation
        borderStyle: 'none',

    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Functions related to the Edit Profile

    // Change readonly state

    editProfile = () =>{
        this.setState({readOnly: false});                   // Set editable inputs
        this.setState({editConfirm: false})                 // Show edit confirm and cancel buttons
        this.setState({approveConfirm: true})               // Hide approval related buttons
        this.setState({borderStyle: 'solid'});              // Set boarder Style
    }

    confirmEdit = () => {
        this.setState({readOnly: true});                    // Set editable inputs
        this.setState({editConfirm: true})                  // Hide edit confirm and cancel buttons
        this.setState({approveConfirm: false})              // show approval buttons
        this.setState({borderStyle: 'none'});               // Set boarder Style

    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
                        {/* {this.state.registrationNumber} */}


                        <input type="text" Value={this.state.registrationNumber} readOnly= {this.state.readOnly}
                            style={{borderStyle: this.state.borderStyle , outline: 'none' , width: '250px', borderRadius: '5px', borderWidth: '1px'}}
                        >     
                        </input> 
                    

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Address : </span>
                        {/* {this.state.address} */}

                        <input type='text' Value={this.state.address} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '600px', borderRadius: '5px', borderWidth: '1px'}}
                        >     
                        </input>

                    </p>

                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>E-Mail : </span>
                        {/* {this.state.email} */}

                        <input type='text' Value={this.state.email} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '400px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>

                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Contact Number : </span>
                        {/* {this.state.contactNumber} */}

                        <input type='text' Value={this.state.contactNumber} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '200px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>





                    {/* Post Graduate Information */}

                    
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>

                        <h4 style={{ color: 'gray', fontWeight: 'lighter'}}>Post-Graduate Information</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />

                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Research Title : </span>
                        {/* {this.state.researchTitle} */}

                        <input type='text' Value={this.state.researchTitle} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '500px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Supervisor/s : </span>
                        {/* {this.state.supervisor} */}

                        <input type='text' Value={this.state.supervisor} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '500px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Degree : </span>
                        {/* {this.state.degree} */}

                        <input type='text' Value={this.state.degree} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle , outline: 'none' , width: '100px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Time Period : </span>
                        {/* {this.state.timeperiod} */}


                        <input type='text' Value={this.state.timeperiod} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '150px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>




                    {/* Social Media Information */}

                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>
                        
                        <h4 style={{color: 'gray', fontWeight: 'lighter'}}>Social Media</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />
                        
                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>GitHub : </span>
                        {/* {this.state.links.github} */}

                        <input type='text' Value={this.state.links.github} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '500px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>LinkedIn : </span>
                        {/* {this.state.links.linkedin} */}


                        <input type='text' Value={this.state.links.linkedin} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '500px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Personal Website / Other : </span>
                        {/* {this.state.links.otherLinks} */}

                        <input type='text' Value={this.state.links.otherLinks} readOnly= {this.state.readOnly}
                            style={{borderStyle:  this.state.borderStyle, outline: 'none' , width: '500px', borderRadius: '5px', borderWidth: '1px'}}
                        >       
                        </input>

                    </p>


                    {/* Files And Others */}

                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', marginTop: '25px'}}>

                        <h4 style={{ color: 'gray', fontWeight: 'lighter'}}>User Files</h4>
                        <div style={{flex: 1, height: '3px', backgroundColor: '#DADCE0', marginLeft: '15px'}} />

                    </div>


                    <p className='card-text-right' style={{fontSize: '17px'}}>
                        <span style={{ fontWeight: 'bold' }}>Download User Files by clicking DOWNLOAD Button </span>

                        <button class="btn btn-default">
                            <img src={Download} width="60px" height="60px"/>
                        </button>

                    </p>




                    {/* Buttons to take actions */}

                <div class='row'>

                    <div class='col-sm'>
                        <button type="button" class="btn btn-success" hidden={this.state.approveConfirm}>
                            APPROVE
                        </button>

                        <button type="button" class="btn btn-danger" hidden={this.state.approveConfirm}
                            style={{marginLeft: '25px'}}
                        >
                            DECLINE
                        </button>

                        <button onClick={this.editProfile} class="btn btn-primary" hidden={this.state.approveConfirm}
                            style={{marginLeft: '25px'}}
                        >
                            EDIT PROFILE
                        </button>

                    </div>


                    {/* Buttons To confirm edits or cancel edits */}

                    <div class='col-sm'>


                        <div class="text-center">

                            <button class="btn btn-success" hidden={this.state.editConfirm} onClick={this.confirmEdit}>
                                CONFIRM
                            </button>

                            <button class="btn btn-danger" hidden={this.state.editConfirm}
                                style={{marginLeft: '25px'}}
                                onClick={this.confirmEdit}
                            >
                                CANCEL
                            </button>

                        </div>

                    </div>

                </div>

                        

                </div>


            </div>


        );
    }
}
 
export default Profile;