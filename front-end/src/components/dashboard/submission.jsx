import { Alert, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import React, { Component } from 'react';       // Import react Component
//import EventNoteIcon from '@mui/icons-material/EventNote';



class Submission extends Component {
    constructor(props) {
        super(props);
    }



    // State of submissions of the user

    state = { 
        threeMonths : {
            submissionStatus: 'submitted',
            reviewStatus: 'reviewed'    
        },

        year1Half : {
            submissionStatus: 'not-submitted',
            reviewStatus: 'not-reviewed'
        },

        year1Full : {
            submissionStatus: 'not-submitted',
            reviewStatus: 'not-reviewed'
        },

        year2Half : {
            submissionStatus: 'not-submitted',
            reviewStatus: 'not-reviewed'
        },

        year2Full : {
            submissionStatus: 'not-submitted',
            reviewStatus: 'not-reviewed'
        },

        year3Half : {
            submissionStatus: 'not-submitted',
            reviewStatus: 'not-reviewed'
        },

        year3Full : {
            submissionStatus: 'submitted',
            reviewStatus: 'not-reviewed'
        },

        // Button Disable Status fro different buttons on Submission
        button1Status: false,
        button2Status: false,
        button3Status: false,
        button4Status: false,
        button5Status: false,
        button6Status: false,
        button7Status: false,


     }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Submission Status Showing Function


    submissionStatus =(event) => {

        let submission = event;                                     // Get the current Submission name

        if(submission.submissionStatus === 'submitted'){            // If He Submmitted the thesis show this alert
            return(
                <Alert severity="success" style={{fontSize: '14px', fontWeight:"bold"}}>
                    SUBMITTED
                </Alert>
            )
        }

        else if(submission.submissionStatus === 'not-submitted'){   // If he not submitted the thesis show this alert
            return(
                <Alert severity="error" style={{fontSize: '14px', fontWeight:"bold"}}>
                    NOT SUBMITTED
                </Alert>
            )
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Review status shwoing function

    reviewStatus = (event) =>{
        let submission = event;                                     // Get the current submission name

        if(submission.reviewStatus === 'not-reviewed'){
            return(
                <Alert severity="error" style={{fontSize: '14px', fontWeight:"bold"}}>
                    NOT REVIEWED
                </Alert>
            )

        }

        else if(submission.reviewStatus === 'pending'){
            return(
                <Alert severity="warning" style={{fontSize: '14px', fontWeight:"bold"}}>
                    REVIEW PENDING
                </Alert>
            )            
        }

        else if(submission.reviewStatus === 'reviewed'){
            return(
                <Alert severity="success" style={{fontSize: '14px', fontWeight:"bold"}}>
                    REVIEWED
                </Alert>
            )
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function to Change visibility of the Submission

    submissionvisibility = (event) => {
    
        let subStatus = event.submissionStatus;                // get the submission Status of the Submission
        let revStatus = event.reviewStatus;                    // get the review status of the submission

        if((subStatus === 'submitted') && (revStatus === 'reviewed')){      // If Submitted and reviewed return visible
            this.buttonStatus(); 
            return 'visible';
        }

        else{                                                               // Otherwise return hidden as content visiblitit
            return 'hidden';
        }

    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Button to disable ADD SUMISSION Button when submission is submitted and reviewed

    buttonStatus = () => {

        if(this.state.threeMonths.reviewStatus === 'reviewed'){
            this.setState({button1Status: true});
        }

        if(this.state.year1Half.reviewStatus === 'reviewed'){
            this.setState({button2Status: true});
        }

        if(this.state.year1Full.reviewStatus === 'reviewed'){
            this.setState({button3Status: true});
        }

        if(this.state.year2Half.reviewStatus === 'reviewed'){
            this.setState({button4Status: true});
        }

        if(this.state.year2Full.reviewStatus === 'reviewed'){
            this.setState({button5Status: true});
        }

        if(this.state.year3Half.reviewStatus === 'reviewed'){
            this.setState({button6Status: true});
        }

        if(this.state.year3Full.reviewStatus === 'reviewed'){
            this.setState({button7Status: true});
        }
        
    }





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    render() { 
        return (  
        

            <div className='container'>

                <div style={{marginBottom: '25px'}}>
                    <Card >

                        <CardContent>

                            <Grid container spacing={1}>

                                <Grid item xs={8}>
                                    <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                        THREE MONTHS SUBMISSION
                                    </h3>
                                </Grid>

                                <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.threeMonths)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.threeMonths)}
                                        </Grid>

                                    </Grid>    
                                </Grid>

                            </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload Your 3 Months Submission Here.</p>

                            <Button variant='contained' color='info' id='button1' disabled={this.state.button1Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>


                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.threeMonths)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    HALF YEARLY SUBMISSION (YEAR 1)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year1Half)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year1Half)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload your half yearly Submission of year 1 Here.</p>

                            <Button variant='contained' color='info'  id='button2' disabled={this.state.button2Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>



                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.year1Half)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    YEARLY SUBMISSION (YEAR 1)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year1Full)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year1Full)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>


                            
                            <p style={{fontSize: '20px'}}>Upload Your Yearly Submission of year 1 Here.</p>

                            <Button variant='contained' color='info' id='button3' disabled={this.state.button3Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>



                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.year1Full)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    HARF YEARLY SUBMISSION (YEAR 2)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year2Half)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year2Half)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload Your half yearly Submission of year 2 Here.</p>

                            <Button variant='contained' color='info' id='button4' disabled={this.state.button4Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>





                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.year2Half)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    YEARLY SUBMISSION (YEAR 2)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year2Full)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year2Full)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload Your Yearly Submission of year 2 Here.</p>

                            <Button variant='contained' color='info' id='button5' disabled={this.state.button5Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>




                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.year2Full)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    HALF YEARLY SUBMISSION (YEAR 3)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year3Half)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year3Half)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload Your half yearly Submission of year 3 Here.</p>

                            <Button variant='contained' color='info' id='button6' disabled={this.state.button6Status}>
                                ADD SUBMISSION
                            </Button>

                        </CardContent>

                    </Card>
                </div>




                <div style={{marginBottom: '25px', contentVisibility: this.submissionvisibility(this.state.year3Half)}}>
                    <Card>

                        <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={8}>
                                <h3 style={{fontFamily: 'monospace' , backgroundColor: 'lightgreen', height: '50px'}}>
                                    YEARLY SUBMISSION (YEAR 3)
                                </h3>
                            </Grid>


                            <Grid item xs={4} >
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={6}>
                                            {this.submissionStatus(this.state.year3Full)}
                                        </Grid>

                                        <Grid item xs={6}>
                                            {this.reviewStatus(this.state.year3Full)}
                                        </Grid>

                                    </Grid>    
                            </Grid>

                        </Grid>

                            
                            <p style={{fontSize: '20px'}}>Upload Your yearly Submission of year 3 Here.</p>

                            <Button variant='contained' color='info' id='button7' disabled={this.state.button7Status}>
                                ADD SUBMISSIOM
                            </Button>

                        </CardContent>

                    </Card>
                </div>


            </div>


        );
    }
}
 
export default Submission;



// Submission is available after submitted submission is submitted and reviewed
// After reviewed ADD SUBMISSIOn Button will be disabled, So Can't add any more submission


