import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';          // Import react to the component



// Function to the return details to the page
function AppProcedure () {

    return(

        <div className='container'>

            <Card style={{width: '1000px'}}>
                <CardContent>
                    <div className='text-center'>
                        <h1 style={{
                            fontWeight: 'lighter'
                        }}
                        >
                            Application Procedure
                        </h1>
                    </div>


                    <div style={{
                        marginTop: '20px'
                    }}>
                        <p style={{fontSize: '20px', fontWeight: 'bold'}}>
                            The application forms may be obtained from the respective Heads of Departments, Programme Coordinators, 
                            or Assitant Registrar, Faculty of Engineering, University of Peradeniya
                        </p>

                        <div style={{
                            marginLeft: '150px'
                        }}>

                            <ul>

                                <li>Application: <span><a href='http://eng.pdn.ac.lk/cerps/forms/RPGapplication.doc'>MS Word</a>/ 
                                <a href='http://eng.pdn.ac.lk/cerps/forms/RPGapplication.pdf'>PDF</a></span></li>


                                <li>
                                    <a href='http://eng.pdn.ac.lk/cerps/downloads/EFac_UoP_Postgraduate_Regulations.pdf'>
                                    General Regulations for PG Programmers
                                    </a>
                                </li>


                                <li>
                                    The application for a research-based programme should accompany a research proposal
                                    and the consent of one or more supervisors

                                <ul>
                                    <li>
                                        Research Proposal &nbsp;
                                        <span>
                                            <a href='http://eng.pdn.ac.lk/cerps/downloads/research%20proposal%20formatV2.doc'>
                                                MS Word
                                            </a>

                                            &nbsp;/ &nbsp;

                                            <a href='http://eng.pdn.ac.lk/cerps/downloads/research%20proposal%20formatV2.pdf'>
                                                PDF
                                            </a>
                                        </span>
                                    </li>

                                    <li>
                                        Apppointment of Reviewers
                                    </li>

                                    <li>
                                        Form for Evaluating Research Proposals-PGDip(research)/MPhill/PhD &nbsp;
                                        <span>
                                            <a href='http://eng.pdn.ac.lk/cerps/forms/review%20formforRP.doc'>
                                                MS Word
                                            </a>/
                                            <a href='http://eng.pdn.ac.lk/cerps/forms/review%20formforRP.pdf'>
                                                PDF
                                            </a>
                                        </span>
                                    </li>
                                </ul>

                                </li>


                                <li>
                                    Get the duly completed application signed by the supervisor/s, and submit it to the Head
                                    of the Department of Study where you are planning to pursue your research.
                                </li>
                            </ul>

                        </div>

                        
                    </div>

                </CardContent>
            </Card>

        </div>
    )

}


export default AppProcedure;        // Export Default function App procedure