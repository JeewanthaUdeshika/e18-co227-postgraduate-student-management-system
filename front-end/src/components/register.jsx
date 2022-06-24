import React, { Component } from 'react';   // Import React
import '../styles/register.css';              // Import styles of login
import registration from '../images/registration.png';    // Import Login image



class Registration extends Component {
    constructor(props) {
        super(props);
    }

    /*
    Get some message from props
    */
    render() { 
        return (  

            <body class="text-center" >
    
            <main class="form-signin w-100 m-auto">
              <form >

                <img class="mb-4" src={registration} alt="" width="72" height="72"/>

                <h1 class="h3 mb-3 fw-normal" style={{ fontFamily: 'sans-serif'}}>Registration</h1>
            
                <div class="form-floating">
                  <input type="text" class="form-control" id="nameWithInitials" placeholder="Name with Initials" required/>
                  <label for="nameWithInitials">Name With Initials</label>
                </div>


                <div class="form-floating">
                  <input type="text" class="form-control" id="initials" placeholder="Name Denoted by Initials" required/>
                  <label for="initials">Name Denoted by Initials</label>
                </div>


                <select class="form-select" aria-label="Time Period" 
                style={{ 
                    padding: '10px',
                    marginTop: '10px',
                    marginBottom: '10px'                    
                    }}>

                        <option value="partTime">Part Time</option>
                        <option value="fullTime">Full Time</option>
                </select>
                    

                <div class="form-floating">
                  <input type="text" class="form-control" id="address" placeholder="Postal Address" required/>
                  <label for="address">Postal Address</label>
                </div>


                <div class="form-floating">
                  <input type="email" class="form-control" id="email" placeholder="E-Mail Address" required/>
                  <label for="email">E-Mail Address</label>
                </div>


                <div class="form-floating">
                  <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required/>
                  <label for="contactNumber">Contact Number</label>
                </div>


                <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                <p class="mt-5 mb-3 text-muted">&copy; University Of Peradeniya</p>

              </form>
            </main> 
          </body>

        );
    }
}
 
export default Registration;