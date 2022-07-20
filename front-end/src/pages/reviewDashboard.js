import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ReviewerDashBoard from '../components/dashboard/reviewerDashboard';
import ButtonGroupMain from '../components/dashboard/buttonGroupMain';
import { Grid } from '@mui/material';


function Reviewer(params) {


    return(
        
        <div>

            <div style={{marginBottom: '100px'}}>
                    <Navbar/>
                </div>

                <div>
                    <Grid container spacing={0}>

                        <Grid item xs={3} style={{marginLeft: '25px'}}>
                            <ButtonGroupMain/>
                        </Grid>

                        <Grid item xs={8}>
                            <ReviewerDashBoard/>
                        </Grid>

                    </Grid>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Footer/>
            </div>
                

        </div>


    );



}


export default Reviewer;