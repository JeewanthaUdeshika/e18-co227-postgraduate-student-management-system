import React, { Component } from 'react';
import Submission from '../components/dashboard/submission';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import ButtonGroupMain from '../components/dashboard/buttonGroupMain';
import { Grid } from '@mui/material';


class SubmissionDashboard extends Component {
    constructor(props) {
        super(props);
    }



    state = {  }


    render() { 
        return ( 

            <div>

                <div style={{marginBottom: '100px'}}>
                    <ResponsiveAppBar/>
                </div>

                <div>
                    <Grid container spacing={0}>

                        <Grid item xs={3} style={{marginLeft: '25px'}}>
                            <ButtonGroupMain/>
                        </Grid>

                        <Grid item xs={8}>
                            <Submission/>
                        </Grid>

                    </Grid>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Footer/>
                </div>
                

            </div>

         );
    }
}
 
export default SubmissionDashboard;