import React from 'react';
import ProgressReview from '../../components/infoPages/progress';
import ButtonGroupHome from '../../components/homePage/buttonGroup';
import Footer from '../../components/footer';
import NavbarHome from '../../components/homePage/navbarHome';
import { Grid } from '@mui/material';


// Function for showing information pages on post graduate programme

function ProgressReviewPageHome(){

    return(


        <div>
                <div style={{marginBottom: '100px'}}>
                    <NavbarHome/>
                </div>

                <div>
                    <Grid container spacing={0}>

                        <Grid item xs={3} style={{marginLeft: '25px'}}>
                            <ButtonGroupHome/>
                        </Grid>

                        <Grid item xs={8}>
                            <ProgressReview/>
                        </Grid>

                    </Grid>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Footer/>
                </div>
                

            </div>

    )
}

export default ProgressReviewPageHome;