import React, { Component } from 'react';


// register Component For Proviosnal Students

class ProvisionalRegister extends Component {
    constructor(props){
        super(props);
    }

    // Get variables to State of the insatnce

    state = {
        researchArea: null,
        researchProgram: null,
        supervisors: null,
        attachments: null,
        userData: null
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////

    // Functions for getting inputs

    getResearchArea = (event) => {
        this.setState({researchArea: event.target.value});         // Set Research Area in the state
      }


    getResearchProgram = (event) => {
        this.setState({researchProgram: event.target.value});      // Set Research Program in the state
    }


    getSupervisors = (event) => {
        this.setState({supervisors: event.target.value});         // Set Supervisors in the state
    }


    getAttachments = (event) => {
        this.setState({attachments: event.target.value});         // Set Attachments in the state
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function for submition

    submitData =(event) => {

        let dataArray = [];                 // data array to store data


        // Assigning data for elements f data array

        dataArray[0] = this.state.researchArea;
        dataArray[1] = this.state.researchProgram;
        dataArray[2] = this.state.supervisors;
        dataArray[3] = this.state.attachments;

        // Set state with user data (Array)
        this.setState({userData: dataArray});

        console.log(dataArray);             // For debugging purpose


        event.preventDefault();             // Prevent defaultsubmit action


    }

    
    render() { 
        return (
            


            <main class="form-signin w-100 m-auto">

                <form class="row g-3" onSubmit={this.submitData}>

                    <h1 style={{fontSize: '35px', fontWeight: 'bolder', fontFamily: 'monospace'}}>Registration for Provisional Students</h1>


                    <div class="col-12" style={{fontSize: '20px', fontWeight: 'bold'}}
                        onInput={this.getResearchArea}
                    >
                        <label for="researchArea" class="form-label">Intended Research Area</label>
                        <input type="text" class="form-control" id="researchArea" placeholder="Intended Research Area" required/>
                    </div>




                    <fieldset class="row-mb-3" style={{marginTop: "20px"}}>

                        <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Research Program Applying</legend>

                        <div class="col-sm-10" style={{marginLeft: '50px', fontSize: '15px'}}
                            onInput={this.getResearchProgram}
                        >
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="researchProgram" id="rp1" value="phd" />
                                <label class="form-check-label" for="rp1">PhD</label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="researchProgram" id="rp2" value="mphill" />
                                <label class="form-check-label" for="rp2">MPhill</label>
                            </div>
                        </div>
                    </fieldset>




                    <div class="col-12" style={{marginTop: '25px', fontSize: '20px' , fontWeight: 'bold'}}
                        onInput={this.getSupervisors}
                    >
                        <label for="prospective Supervisors" class="form-label">Prospective Supervisor/s for Your Project<br></br>
                        <span><a href="https://people.ce.pdn.ac.lk/staff/academic/" style={{fontWeight: 'lighter'}}>Find Here</a></span>
                        </label>
                        <input type="text" class="form-control" id="prospectiveSupervisors" placeholder="Prospective Supervisor/s" required/>
                    </div>


                    
                    <div class="col-12" style={{marginTop: '25px'}}
                        onInput={this.getAttachments}
                    >
                        <label for="attachments" class="form-label" style={{fontSize: '20px', lineHeight: '15px' , marginBottom: '20px' , fontWeight: 'bold'}}>
                            Attachments<br></br><br></br>
                        <span style={{fontSize: '15px' , fontWeight: 'lighter'}}>Academic CV, Transcripts, Pubications, Research Propsal/s and other Documents (ZIP format Only)</span>
                        </label>
                        <input class="form-control" type="file" id="attachments" multiple/>
                    </div>


                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>


                </form>

            </main>


        );
    }
}
 
export default ProvisionalRegister;

