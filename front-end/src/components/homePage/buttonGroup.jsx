import React from 'react';           // Import react to this
import Button from '@mui/material/Button';          // import MUI Component
import ButtonGroup from '@mui/material/ButtonGroup';

// For functional routings

import {useNavigate} from 'react-router-dom';


// Designed using Material UI


function ButtonGroupHome () {

    const navigate = useNavigate();             // Use navigation 

    const navigateProcedure = () => {
        navigate("/procedureHome");         // Navigate to Procdure page
    }

    const navigateAppointment = () => {
        navigate("/appointmentHome");       // Navigate to Appointment page
    }

    const navigateProgress = () => {
        navigate("/progressHome");          // Navigate to Progress review page
    }

    const navigateFormat = () => {
        navigate("/formatHome");            // Navigate to format page
    }

        return (



            <div class="text-center" style={{width: '300px'}}>

            <h4>Post Graduate Studies</h4>

            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                style={{width: '300px'}}
            >

    
                <Button key='main1' onClick={navigateProcedure}>Application Procedure</Button>

                <Button key='main2' onClick={navigateProgress}>Progress Review</Button>

                <Button key='main3' onClick={navigateFormat}>Format, Submission and Evaluation of Thesis</Button>

                <Button key='main4' onClick={navigateAppointment}>Appointment of Examiners for Thesis</Button>


        

            </ButtonGroup>
            </div>



         );
    
}
 
export default ButtonGroupHome;
