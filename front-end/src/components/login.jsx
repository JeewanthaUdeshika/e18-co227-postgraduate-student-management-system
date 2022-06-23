import React, { Component } from 'react';
import '../styles/styles-login.css';
import login from '../images/login.png';


class Login extends Component {
    

    render() { 
        return ( 
            
            <body class="text-center" style={{alignItems: 'center'}} >
                <main class="form-signin w-100 m-auto">
                    <form>
                        <h1 class="h3 mb-3 fw-normal" style={{ fontSize: '40px'}}>
                            WELCOME !
                        </h1>


                        <div class="form-floating" 
                            style={{marginTop: '20px' , width: '300px', justifyContent: 'center'}}>
                            
                            <input type="text" class="form-control" id="RegNo" placeholder='Registraton Number'/>
                            <label for="RegNo">REGISTRATION NUMBER</label>
                        </div>

                        <div class="form-floating" 
                            style={{ width: '300px', justifyContent: 'center'}}>
                            
                            <input type="password" class="form-control" id="password" placeholder='Password'/>
                            <label for='password'>PASSWORD</label>
                        </div>


                        <button class='w-50 btn btn-lg btn-primary' type='submit' style={{marginTop: '50px'}} >
                            Sign In
                        </button>
                    </form>
                </main>
            </body>

        );
    }
}
 
export default Login;

/*

<body class="text-center">
                <main class='form-signin w-100 m-auto'>
                    <form>
                        <h1 class="h3 mb-3 fw-normal" style={{ fontSize: '40px'}}>
                            WELCOME !
                        </h1>
                        <div class="form-floating" 
                            style={{marginTop: '20px' , width: '200px', justifyContent: 'center', allignContent: 'center'}}>
                            
                            <input type="text" class="form-control" id="RegNo" placeholder='Registraton Number'/>
                            <label for="RegNo">REGISTRATION NUMBER</label>
                        </div>
                        <div class="form-floating" 
                            style={{ width: '200px', justifyContent: 'center', allignContent: 'center'}}>
                            
                            <input type="password" class="form-control" id="password" placeholder='Password'/>
                            <label for='password'>PASSWORD</label>
                        </div>
                        <button class='w-30 btn btn-lg btn-primary' type='submit' style={{marginTop: '50px'}} >
                            Sign In
                        </button>
                    </form>
                </main>
            </body>

*/




/*


<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>


*/