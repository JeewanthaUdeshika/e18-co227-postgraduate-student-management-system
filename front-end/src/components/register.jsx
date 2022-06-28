import React, { Component } from 'react';   // Import React
import '../styles/register.css';              // Import styles of login
import registration from '../images/login.png';    // Import Login image


class Registration extends Component {
    constructor(props) {
        super(props);
    }

    
    // Handling form with changes of registered state
    handelRegChange = (regState) => {
      let selectedState = regState.target.value;      // Variable for get selected state
      console.log(selectedState);

      if(selectedState === "registered"){
        console.log("Registered is Selected")
        }

      else{
        console.log("Provisional is selected")
      }
      
    }


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




                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="nameWithInitials" class="form-label">Name With Initials</label>
                  <input type="text" class="form-control" id="nameWithInitials" placeholder="Name with Initials" required/>
                </div>


                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="initials" class="form-label">Name Denoted by Initials</label>
                  <input type="text" class="form-control" id="initials" placeholder="Name Denoted by Initials" required/>
                </div>
                    

                <div class="col-12"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="address" class="form-label">Postal Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Postal Address" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="email" class="form-label">E-Mail Address</label>
                  <input type="email" class="form-control" id="email" placeholder="E-Mail Address" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="contactNumber" class="form-label">Contact Number</label>
                  <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password" required/>
                </div>


                <div class="col-md-6"  style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <label for="confirmedPassword" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="confirmedPassword" placeholder="Confirm Password" required/>
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


/*
js code for Regsistered Students
*/


/*

                <div class="form-floating">
                  <input type="text" class="form-control" id="regNo" placeholder="Registration Number" required/>
                  <label for="regNo">Registration Number</label>
                </div>


                <div class="form-floating">
                  <input type="text" class="form-control" id="regNo" placeholder="Date of Registration" required/>
                  <label for="regNo">Registration Number</label>
                </div>


                <div class="form-floating">
                  <input type="text" class="form-control" id="regDate" placeholder="Date of Registration" required/>
                  <label for="regDate">Date of Registration</label>
                </div>
                


                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{marginBottom: '12px', marginTop: '15px', width:' 470px'}}>

                 <p style={{marginRight: '10px', marginTop: '10px'}}>Degree</p>
                  <input type="radio" class="btn-check" name="btnradio" id="phd" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="phd">phD</label>

                  <input type="radio" class="btn-check" name="btnradio" id="mphill" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="mphill">MPhill</label>

                  <input type="radio" class="btn-check" name="btnradio" id="msc" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="msc">MSc</label>

                  <input type="radio" class="btn-check" name="btnradio" id="meng" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="meng">MEng</label>

                  <input type="radio" class="btn-check" name="btnradio" id="provisional" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="provisional">*Provisional</label>
                </div>



                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{marginBottom: '12px', marginTop: '15px', width: '470px'}}>

                 <p style={{marginRight: '10px', marginTop: '10px'}}>Mode of Study</p>
                  <input type="radio" class="btn-check" name="btnradio" id="partTime" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="partTime">Part Time</label>

                  <input type="radio" class="btn-check" name="btnradio" id="fullTime" autocomplete="off"/>
                  <label class="btn btn-outline-primary" for="fullTime">Full Time</label>
                </div>




                <div class="form-floating">
                  <input type="text" class="form-control" id="supervisors" placeholder="Supervisors" required/>
                  <label for="supervisors">Supervisors</label>
                </div>

                

                <div class="form-floating">
                  <input type="text" class="form-control" id="researchTopic" placeholder="Research Topic" required/>
                  <label for="regsearchTopic">Research Topic</label>
                </div>


                
                <div class="col-md-5" style={{marginBottom: '20px', marginTop: '20px', width: '470px'}}>
                  <label for="progressLevel" class="form-label">Progress Level</label>
                  
                  <select class="form-select" id="progressLevel" required>

                    <option selected disabled value="">Select</option>
                    <option value="1">Half Year Progress Report Submitted</option>
                    <option value="2">Annual Progress Report Submitted</option>
                    <option value="3">Annual Oral Presentation Completed</option>
                    <option value="4">Viva Completed</option>
                    <option value="5">Thesis Submitted for Review</option>
                    <option value="6">Other</option>
                  </select>
                </div>



                <div class="form-floating">
                  <input type="text" class="form-control" id="lastDate" placeholder="Last Date of Submission" required/>
                  <label for="lastDate">Last Date of Submission</label>
                </div>


                <form>
                  <div class="custom-file" style={{marginBottom: '20px'}}>
                    <label class="custom-file-label" for="customFile">Profile Picture</label>
                    <input type="file" class="custom-file-input" id="customFile"/>
                  </div>
                </form>

*/