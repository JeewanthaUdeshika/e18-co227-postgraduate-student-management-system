import React, { Component } from 'react';   // Import React
import login from '../images/login.png';    // Import Login image



class Login extends Component {
    
    
    render() { 
        return ( 
            
          <body class="text-center" style={{
            display: 'block',
            alignItems: 'center',
            paddingTop: '40px',
            paddingBottom: '40px'
            
          }}>
    
            <main class="form-signin w-100 m-auto" style={{maxWidth: '330px', padding: '5px'}}>
              <form >

          
                <img class="mb-4" src={login} alt="" width="72" height="72"/>

                <h1 class="h3 mb-3 fw-normal" style={{ fontFamily: 'sans-serif'}}>Welcome</h1>
            
                <div class="form-floating" style={{zIndex: '2'}}>
                  <input type="email" class="form-control" id="floatingInput" placeholder="E-Mail Address"/>
                  <label for="floatingInput">E-Mail Address</label>
                </div>


                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
            
                <div class="checkbox mb-3" style={{alignItems: 'center', marginTop:'10px'}}>
                  <label>
                    <input type="checkbox" value="remember-me"/>
                    &nbsp; Remember me
                  </label>
                </div>

                

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>


                <div class="text-center" style={{marginTop: '30px'}}>
                  <p> Not Registered ? <a href='#'>Register</a></p>
                </div>

              </form>
            </main> 
          </body>
          
        );
    }
}
 
export default Login;

/*
  Login image added
  Text type and Password type input
  onClick od Sign In should be implmented
  Remember me button should be impmented
*/




