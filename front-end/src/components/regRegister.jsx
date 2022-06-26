import React, { Component } from 'react';


class RegRegister extends Component {
    
    constructor(props){
        super(props);
    }


    render() {

        return (
            
        <main class="form-signin w-100 m-auto">
        <form class="row g-3">

            <h1 style={{fontSize: '35px', fontWeight: 'bolder'}}>Registration for Registered Student</h1>

            <div class="col-md-6">
                <label for="regNo" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Registration Number</label>
                <input type="text" class="form-control" id="regNo" placeholder="Registration Number" required/>
            </div>


            <div class="col-md-6">
                <label for="regNo" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Date of Registration</label>
                <input type="text" class="form-control" id="regNo" placeholder="Date of Registration" required/>
            </div>



            <fieldset class="row mb-3" style={{marginTop: '20px'}}>

                <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Degree</legend>

                <div class="col-sm-10" style={{marginLeft: '50px'}}>
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

                <div class="col-sm-10" style={{marginLeft: '50px'}}>
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



            <div class="col-12" style={{marginTop:'20px'}}>
                <label for="supervisors" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Supervisors</label>
                <input type="text" class="form-control" id="supervisors" placeholder="Supervsiors' Name" required/>
            </div>



            <div class="col-12">
                <label for="researchTopic" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Research Topic</label>
                <input type="text" class="form-control" id="researchTopic" placeholder="Research Topic" required/>
            </div>



            <div class="col-12">
                <label for="expectedEndDate" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Year of Expected Completion</label>
                <input type="text" class="form-control" id="expectedEndDate" placeholder="YYYY/MM/DD" required/>
            </div>



            <fieldset class="row mb-3" style={{marginTop: '20px'}}>

                <legend class="schedular-border" style={{fontWeight: 'bold', fontSize: '20px'}}>Progress Level</legend>

                <div class="col-sm-10" style={{marginLeft: '50px'}}>
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



            <div class="col-12">
                <label for="lastSubmittedDate" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Progress Level (Date of Last Submission)</label>
                <input type="text" class="form-control" id="lastSubmittedDate" placeholder="YYYY/MM/DD" required/>
            </div>


            <div class="col-12">
                <label for="profilePicture" class="form-label" style={{fontWeight: 'bold', fontSize: '20px'}}>Profile Picture</label>
                <input class="form-control" type="file" id="profilePicture"/>
            </div>


            <div class="col-12" style={{marginTop: '20px'}}>
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