import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    

    render() { 
        return ( 
            
            
            <div class="container">

                <footer class="py-3 my-4">

                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li classs="nav-item">
                            <a href="#" class="nav-link px-2 text-muted">Home</a>
                        </li>

                        <li classs="nav-item">
                            <a href="#" class="nav-link px-2 text-muted">Registration</a>
                        </li>

                        <li classs="nav-item">
                            <a href="#" class="nav-link px-2 text-muted">News</a>
                        </li>

                        <li classs="nav-item">
                            <a href="#" class="nav-link px-2 text-muted">About</a>
                        </li>
                    </ul>

                    <p class="text-center texct-muted">&copy; University of Peradeniya</p>

                    <div class="b-example-divider"></div>

                </footer>
            </div>

         );
    }
}
 
export default Footer;