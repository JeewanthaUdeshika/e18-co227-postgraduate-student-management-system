import React, { Component } from 'react';       // Imported react

class MainInfo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 


            <div class="card" style={{width:'850px'}}>

                <h4 style={{fontWeight: 'bold', fontFamily: 'serif', fontSize: '32px'}}>
                    Center for Engineering Research and Postgraduate Studies
                </h4>

                <br></br>

                <h5 style={{fontWeight: 'lighter', fontSize: '20px'}}>
                    The Engineering Research Unit originally established in 1990 was transformed to the Centre for Engineering Research 
                    and Postgraduate Studies in 2001. Since then CERPS, as it came to be known thereafter, has coordinated research activities 
                    and postgraduate studies in the Faculty of Engineering, and has been instrumental in the drafting of basic policy framework
                    in this regard along with the Faculty Regulations governing postgraduate studies.
                </h5>

                <br></br>
                <br></br>

                <h5 style={{fontWeight: 'bold'}}>Activities of the Center are organized along two axes:</h5>
                
                <div style={{marginLeft: '50px', fontWeight: 'bold'}}>
                    <ld>
                        <li><a href='#' style={{textDecoration: 'none'}}>The Postgraduate Arm of CERPS</a></li>
                        <li><a href='#' style={{textDecoration: 'none'}}>The Research Arm of CERPS</a></li>
                    </ld>
                </div>


                <br></br>
                <br></br>


                <h5 style={{fontWeight: 'bold'}}>News & Event</h5>

                <div style={{marginLeft: '50px', fontWeight: 'normal'}}>
                    <ld>
                        <li>
                            University Research Grants 2019: Members of the permanent academic staff of the Faculty of Engineering are
                            requested to send in their applications in triplicate to reach Dean's Office on or before 20 June, 2019. 
                            Applications can be downloaded at <span><a href='http://www.pdn.ac.lk/mainpg-contents/downloads.php'>Here</a></span>
                        </li>

                    </ld>
                </div>





            </div>


         );
    }
}
 
export default MainInfo;
