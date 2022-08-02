import React, { Component } from 'react';           // Import react to this
import Button from '@mui/material/Button';          // import MUI Component
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';


// Designed using Material UI


class ButtonGroupMain extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }



    render() { 
        return (


        // <Box sx={{display: 'block', '& > *': {m: 1,},}}>

            <div class="text-center" style={{width: '300px'}}>

            <h4>Post Graduate Studies</h4>

            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                style={{width: '300px'}}
            >

    
                <Button key='main1'>Application Procedure</Button>

                <Button key='main2'>Progress Review</Button>

                <Button key='main3'>Format, Submission and Evalution of Thesis</Button>

                <Button key='main4'>Application of Examiners for Thesis</Button>

                <Button key='admin'>Coordinator Dashboard</Button>

                {/* <Button key='main5'>Application Procedure</Button>
                
                <Button key='main6'>Registration</Button>

                <Button key='main7'>Progress Review - MPhill/PhD</Button> */}
{/* 
                <Button key='main8'>Minimum and Maximum Duration</Button>

                <Button key='main9'>Course Requirements</Button>

                <Button key='main10'>Format Submission and Evaluation on Thesis</Button>

                <Button key='main11'>Appoinment for Examiners for Thesis</Button>

                <Button key='main12'>Registration and Tution Fees for MPhill/PhD</Button>

                <Button key='main13'>Forms/ Downloads</Button> */}

                

            </ButtonGroup>
            </div>

        //</Box>


         );
    }
}
 
export default ButtonGroupMain;

