import React, { Component } from 'react';
import '../styles/styles-login.css';
import login from '../images/login.png';


class Login extends Component {
    

    render() { 
        return (  

            <div className="form">

                <form>
                    <div className='input-container'>
                        <img
                            alt = 'login icon'
                            src = {login}
                            width = '100px'
                            height = '100px'
                            className = 'login-image'
                        />
                    </div>
                    
                    <div className='input-container'>
                        <h1 className = 'login-title'>Log In</h1>
                    </div>

                    <div className="input-container">
                        <input placeholder='Registration Number' className = 'container' type="text" name="regNo" required />
                    </div>

                    <div className="input-container">
                        <input placeholder='Password' className = 'container' type="password" name="pass" required />
                    </div>

                    <div className='input-container'>
                        <button className='button' type='submit'>Log In</button>
                    </div>

                </form> 
            </div>
        );
    }
}
 
export default Login;