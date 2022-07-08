import React, { Component } from 'react';


class RegRegister extends Component {
    
    constructor(props){
        super(props);
    }


    // State of this instance (variable)
    state ={
        registrationNumber: null,
        dateOfRegistration: null,
        degree: null,
        modeOfStudy: null,
        supervisors: null,
        researchTopic: null,
        yearOfCompletion: null,
        progressLevel: null,
        progressDate: null,
        profilePicture: null,
        urls: null,
        userData: null
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // Functions for collecting Data

    getRegNo = (event) => {
        this.setState({registrationNumber: event.target.value});         // Set registration Number in the state
    }


    getDateofReg = (event) => {
        this.setState({dateOfRegistration: event.target.value});         // Set Date of Registration in the state
    }


    getDegree = (event) => {
        this.setState({degree: event.target.value});                     // Set type of Degree in the state
    }


    getModeofStudy = (event) => {
        this.setState({modeOfStudy: event.target.value});               // Set Mode of Study in the state
    }


    getSupervisors = (event) => {
        this.setState({supervisors: event.target.value});               // Set Supervisors in the state
    }


    getTopic = (event) => {
        this.setState({researchTopic: event.target.value});             // Set Research Topic in the state
    }


    getYearOfCompletion = (event) => {
        this.setState({yearOfCompletion: event.target.value});          // Set Year of completion in the state
    }


    getProgressLevel = (event) => {
        this.setState({progressLevel: event.target.value});             // Set Progress Level in the state
    }


    getProgressDate = (event) => {
        this.setState({progressDate: event.target.value});              // Set Progress date in the state
    }


    getProfilePicture = (event) => {
        this.setState({profilePicture: event.target.value});            // Set Profile Picture in the state
    }


    getLinks = (event) => {
        this.setState({urls: event.target.value});                      // Set URLs in the state
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function on submit

    submitInputs = (event) => {

        let dataArray = [];                           // Array for Storing Data

        // Assign data to element of array

        dataArray[0] = this.state.registrationNumber;
        dataArray[1] = this.state.dateOfRegistration;
        dataArray[2] = this.state.degree;
        dataArray[3] = this.state.modeOfStudy;
        dataArray[4] = this.state.profilePicture;
        dataArray[5] = this.state.progressDate;
        dataArray[6] = this.state.progressLevel;
        dataArray[7] = this.state.researchTopic;
        dataArray[8] = this.state.supervisors;
        dataArray[9] = this.state.yearOfCompletion;
        dataArray[10] = this.state.urls;


        this.setState({userData: dataArray});          //Add data array to state of this instance
        
        event.preventDefault();                        // Prevent by default

        // console.log(dataArray);
    
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    render() {

        return (
            
        <main class="form-signin w-100 m-auto">
        <form class="row g-3" onSubmit={this.submitInputs}>

            <h1 style={{fontSize: '35px', fontWeight: 'bolder', fontFamily: 'monospace'}}>Registration for Registered Students</h1>

            <div class="col-md-6"
                onInput={this.getRegNo}
            >
                <label for="regNo" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Registration Number</label>
                <input type="text" class="form-control" id="regNo" placeholder="Registration Number" required/>
            </div>


            <div class="col-md-6"
                onInput={this.getDateofReg}
            >
                <label for="regNo" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Date of Registration</label>
                <input type="text" class="form-control" id="regNo" placeholder="Date of Registration" required/>
            </div>



            <fieldset class="row mb-3" style={{marginTop: '20px'}}>

                <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Degree</legend>

                <div class="col-sm-10" style={{marginLeft: '50px'}}
                    onInput={this.getDegree}
                >
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree1" value="phd" />
                        <label class="form-check-label" for="degree1">PhD</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree2" value="mphill" />
                        <label class="form-check-label" for="degree2">MPhill</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree3" value="msc" />
                        <label class="form-check-label" for="degree3">MSc</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree4" value="meng" />
                        <label class="form-check-label" for="degree4">MEng</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree5" value="provisional" />
                        <label class="form-check-label" for="degree5">Provisional</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="degreeSelect" id="degree6" value="other" />
                        <label class="form-check-label" for="degree6">Other</label>
                    </div>

                </div>
            </fieldset>



            <fieldset class="row-mb-3" style={{marginTop: "20px"}}>

                <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Mode of Study</legend>

                <div class="col-sm-10" style={{marginLeft: '50px'}}
                    onInput={this.getModeofStudy}                 // Input Taking Function
                >
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="modeOfStudy" id="mos1" value="fullTime" />
                        <label class="form-check-label" for="mos1">Full Time</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="modeOfStudy" id="mos2" value="partTime" />
                        <label class="form-check-label" for="mos2">Part Time</label>
                    </div>
                </div>


            </fieldset>



            <div class="col-12" style={{marginTop:'20px'}}
                onInput={this.getSupervisors}                     // Input taking Function
            >
                <label for="supervisors" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Supervisors</label>
                <input type="text" class="form-control" id="supervisors" placeholder="Supervsiors' Name" required/>
            </div>



            <div class="col-12" 
                onInput={this.getTopic}                           // Input Taking Function
            >
                <label for="researchTopic" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Research Topic</label>
                <input type="text" class="form-control" id="researchTopic" placeholder="Research Topic" required/>
            </div>



            <div class="col-12"
                onInput={this.getYearOfCompletion}                // Input taking Function
            >
                <label for="expectedEndDate" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Year of Expected Completion</label>
                <input type="text" class="form-control" id="expectedEndDate" placeholder="YYYY/MM/DD" required/>
            </div>



            <fieldset class="row mb-3" style={{marginTop: '20px'}}>

                <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Progress Level</legend>

                <div class="col-sm-10" style={{marginLeft: '50px'}}
                    onInput={this.getProgressLevel}               // Input taking Function
                >
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="progressLevel1" value="progress1" />
                        <label class="form-check-label" for="progressLevel1">Half Year Progress Report Submitted</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="progressLevel2" value="progress2" />
                        <label class="form-check-label" for="progressLevel2">Annual Progress Report Submitted</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="dprogressLevel3" value="progress3" />
                        <label class="form-check-label" for="progressLevel3">Annual Oral Presentation Submitted</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="dprogressLevel4" value="progress4" />
                        <label class="form-check-label" for="progressLevel4">Viva Completed</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="progressLevel5" value="progress5" />
                        <label class="form-check-label" for="progressLevel5">Thesis Submitted for Review</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="progressLevel6" value="progress6" />
                        <label class="form-check-label" for="progressLevel6">Final Thesis Submitted</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="progress" id="progressLevel7" value="progress7" />
                        <label class="form-check-label" for="progressLevel7">Other</label>
                    </div>

                </div>
            </fieldset>



            <div class="col-12"
                onInput={this.getProgressDate}                        // Input taking function
            >
                <label for="lastSubmittedDate" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Progress Level (Date of Last Submission)</label>
                <input type="text" class="form-control" id="lastSubmittedDate" placeholder="YYYY/MM/DD" required/>
            </div>


            <div class="col-12"
                onInput={this.getProfilePicture}
            >
                <label for="profilePicture" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Profile Picture</label>
                <input class="form-control" type="file" id="profilePicture"/>
            </div>


            <div class="col-12" style={{marginTop: '20px'}}
                onInput={this.getLinks}
            >
                <label for="urls" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>
                    URL to Preffered Websites <br></br>
                <span style={{fontSize: '15px' , fontWeight: 'lighter'}}>(GitHub, LinkedIn, ResearchGate)</span>
                </label>
                <input type="text" class="form-control" id="urls" placeholder="URLs" />
            </div>



            <div class="col-12">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            
        </form>
        </main>


        );
    }
}
 
export default RegRegister;