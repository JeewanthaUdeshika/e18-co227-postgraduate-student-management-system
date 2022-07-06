import React, { Component } from 'react';   // Import React
import '../styles/register.css';              // Import styles of login
import registration from '../images/login.png';    // Import Login image


class Registration extends Component {
    constructor(props) {
        super(props);
    }

    // Inputs of the form
    state = {
      nameWithInitials: null,
      nameDenotedByinitials: null,
      postalAddress: null,
      email: null,
      contactNumber: null,
      password: null,
      confirmedPassword: null,
      registrationStatus: null,
      
    }

    
    // Handling form with changes of registered state
    handelRegChange = (regState) => {
      let selectedState = regState.target.value;                    // Variable for get selected state
      this.setState({registrationStatus: regState.target.value});   // Set registered Student Attribute of state
      console.log(selectedState);

      if(selectedState === "registered"){
        console.log("Registered is Selected");
        this.passwordCheck();
        this.printInputs();
        }

      else{
        console.log("Provisional is selected");
        this.passwordCheck();
        this.printInputs();
      }
      
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Function for checking inputs for debugging

    printInputs = () => {
      console.log(this.state.nameWithInitials);
      console.log(this.state.nameDenotedByinitials);
      console.log(this.state.postalAddress);
      console.log(this.state.email);
      console.log(this.state.contactNumber);
      // console.log(this.state.inputList);
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Functions related to password

    // Function to get input password
    getPassword =(event) => {
      let password = event.target.value;                // Get the entered Passowrd
      this.setState({password: event.target.value});    // Set password attribute of state
    }


    // Function to get input confirmed password
    getConfirmed =(event) => {
      let confirmedPassword = event.target.value;             // Get the entered Confirmed Passowrd
      this.setState({confirmedPassword: event.target.value}); // Set confirmed password value of state
    }


    // Check whether both password inputs are same or not
    passwordCheck = (event) =>{
      let password = this.state.password;                     // Get entered paswword
      let confirmedPassword = this.state.confirmedPassword;   // Get Confirmed password

      if(password === confirmedPassword){
        // ToDo: implement task when both password inputs are same
        console.log('Access granted');
      }

      else{
        // ToDo: implement task for incorrected password verification
        console.log("Incorrect Password");
      }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Fun ctions for get the inputs

    getName = (event) => {
      this.setState({nameWithInitials: event.target.value});         // Set name with initail in the state
    }


    getinitials = (event) => {
      this.setState({nameDenotedByinitials: event.target.value});   // Set name denoted by initail in the state
    }


    getAddress = (event) => {
      this.setState({postalAddress: event.target.value});           // Set Address in the state
    }


    getEmail = (event) => {
      this.setState({email: event.target.value});                   // Set Email address in the state
    }

    
    getContact = (event) => {
      this.setState({contactNumber: event.target.value});   // Set name with initail in the state
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////




    /*
    Get some message from props
    */

    render() { 
        return (  

            //<body class="text-center" >

    
            <main class="form-signin w-100 m-auto">
              <form class="row g-3">


                <body class="text-center">

                  <img class="mb-4" src={registration} alt="" width="70" height="70"/>

                  <h1 class="h3 mb-3 fw-normal" style={{ fontFamily: 'monospace', fontSize: '40px', fontWeight: 'bolder'}}>Registration</h1>

                </body>




                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}
                  onInput={this.getName}
                  >
                  <label for="nameWithInitials" class="form-label">Name With Initials</label>
                  <input type="text" class="form-control" id="nameWithInitials" placeholder="Name with Initials" required/>
                </div>


                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}
                  onInput={this.getinitials}
                  >
                  <label for="initials" class="form-label">Name Denoted by Initials</label>
                  <input type="text" class="form-control" id="initials" placeholder="Name Denoted by Initials" required/>
                </div>
                    

                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}
                  onInput={this.getAddress}
                  >
                  <label for="address" class="form-label">Postal Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Postal Address" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}
                  onInput={this.getEmail}
                  >
                  <label for="email" class="form-label">E-Mail Address</label>
                  <input type="email" class="form-control" id="email" placeholder="E-Mail Address" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}
                  onInput={this.getContact}
                  >
                  <label for="contactNumber" class="form-label">Contact Number</label>
                  <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.getPassword} required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="confirmedPassword" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="confirmedPassword" placeholder="Confirm Password" onChange={this.getConfirmed} required/>
                </div>




                <div style={{marginTop: '20px', marginBottom:'5px'}}>
                
                  <h1 style={{marginBottom: '10px', fontWeight: '100px', fontSize: '20px', fontWeight:'bold'}}>Registration Status</h1>

                  <div class="form-check" 
                    onChange={this.handelRegChange}  
                    style={{marginLeft: '40px'}}>

                    <input type="radio" class="form-check-input" id="registered" name="regState" value="registered"/>
                    <label class="form-check-label" for="registered">Registered Student</label>
                  </div>
                  
                  <div class="form-check" 
                    onChange={this.handelRegChange}  
                    style={{marginLeft: '40px'}}>


                    <input type="radio" class="form-check-input" id="prospective" name="regState" value="prospective"/>
                    <label class="form-check-label" for="prospective">Prospective Student</label>
                  </div>

                </div>

                  
                    
                <body class='text-center'>
                  <button class="w-100 btn btn-lg btn-primary" type="submit">Next</button>
                </body>

              </form>

            </main> 
          //</body>

        );
    }
}
 
export default Registration;


// Form Floating Example
/*

 <div class="form-floating">
                  <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required/>
                  <label for="contactNumber">Contact Number</label>
                </div>

                */

