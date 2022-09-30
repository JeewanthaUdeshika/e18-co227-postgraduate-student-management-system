import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Table } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


function StudentDashboard (){

    // Expand Panel Control ( Open one panel at once )
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Sub Panel Controling

    const [subExpanded, setSubExpanded] = React.useState(false);

    const handleSubChange = (subPanel) => (event, isExpanded) => {
        setSubExpanded(isExpanded ? subPanel : false);
    };




    const [state, setState] = useState({
        nameWithInitials: '',
        initials: "",
        hdcNumberPro: "",
        regNo: "",
        dateOfReg: "",
        period: "",
        hdcNumber: "",
        postalAddress: "",
        email: "",
        contact: "",
        laboratory: "",
        researchTitle: "",
        supervisors: "",
        
        nominee: "",
        member: "",
        examiner1: "",
        examiner2: "",
        examinerAppointment: "", 
        
        halfYear1: "",
        dateOfHalfYear1: "",
        Review1HalfYear1: "",
        Review2HalfYear1: "",
        approvalHalfYear1: "",
        Year1: "",
        dateOfYear1: "",
        hodReviewYear1: "",
        externalReviewYear1: "",
        Review1Year1: "",
        Review2Year1: "",
        approvalYear1: "",
        //reportApprovalHDCYear1: "",

        halfYear2: "",
        dateOfHalfYear2: "",
        Review1HalfYear2: "",
        Review2HalfYear2: "",
        approvalHalfYear2: "",
        Year2: "",
        dateOfYear2: "",
        hodReviewYear2: "",
        externalReviewYear2: "",
        Review1Year2: "",
        Review2Year2: "",
        approvalYear2: "",
        //reportApprovalHDCYear2: "",

        halfYear3: "",
        dateOfHalfYear3: "",
        Review1HalfYear3: "",
        Review2HalfYear3: "",
        approvalHalfYear3: "",
        Year3: "",
        dateOfYear3: "",
        hodReviewYear3: "",
        externalReviewYear3: "",
        Review1Year3: "",
        Review2Year3: "",
        approvalYear3: "",
        //reportApprovalHDCYear3: "",

        dateOfThesis: "",
        hodThesisReview: "",
        thesisReviewExternal: "",
        thesisReviewInternal1: "",
        thesisReviewInternal2: "",
        revisionsApproved: "",
        evaluationReport: "",

        thesisToAR: "",
        effectiveDate: "",
        dateOfCompletion: "",
    });

    return(
        
        <div className='container'>
            <div>
                <Card>
                    <CardContent>
                        
                        <div className='text-center'>
                            <h1 style={{fontWeight: 'lighter', fontSize: '65px'}}>Student Dashboard</h1>
                        </div>
                        
                        {/* Ash Colour Line To Separate */}
                        <div
                            style={{
                            flex: 1,
                            height: "3px",
                            backgroundColor: "#DADCE0",
                            }}
                        />


                        <div style={{marginTop: '25px'}}>


                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1Content"
                                    id='studentDetails'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Student Details</h3>
                                </AccordionSummary>

                                <AccordionDetails>
                                    
                                    <Card sx={{width: '1500px', boxShadow: 'none'}}>
                                        <CardContent>

                                        <div style={{marginLeft: '100px'}}>
                                            <div>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Name With Initials -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.nameWithInitials}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Name Denoted by Initials -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.initials}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Provisional Student Registration Approved -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.hdcNumberPro}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Registration Number -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.regNo}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Registration -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfReg}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Part Time / Full Time -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.period}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Postal Address -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.postalAddress}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Email Address(s) -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.email}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Contact Number(s) -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.contact}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Affiliated Laboratory -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.laboratory}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Research Title -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.researchTitle}</span>
                                                </span>
                                            </div>

                                            <div style={{marginTop: '20px'}}>
                                                <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Supervisor(s) -  
                                                    <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.supervisors}</span>
                                                </span>
                                            </div>
                                        </div>

                                        </CardContent>

                                    </Card>

                                </AccordionDetails>
                            </Accordion>



                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2Content"
                                    id='examinerDetails'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Examiner Details</h3>
                                </AccordionSummary>

                                <AccordionDetails>
                                    
                                    <Card sx={{width: '1500px', boxShadow: 'none'}}>

                                        <CardContent>

                                            <div style={{marginLeft: '100px'}}>

                                                <div>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD or Nominee -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.nominee}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>One Memmber from outside the Department (Nominated by the HoD) -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.member}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.examiner1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.examiner2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Examiner Appointment HDC Meeting Number -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.examinerAppointment}</span>
                                                    </span>
                                                </div>

                                                

                                            </div>

                                        </CardContent>
                                    </Card>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3Content"
                                    id='progressreports'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Progress Reports</h3>
                                </AccordionSummary>
                                
                                <AccordionDetails>

                                    <Accordion expanded={subExpanded === 'subPanel1'} onChange={handleSubChange('subPanel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="year1Content"
                                            id='year1'
                                        >
                                            <h5 style={{fontWeight: 'bolder'}}>Year 1</h5>
                                        </AccordionSummary>

                                        <AccordionDetails>

                                            <div style={{marginLeft: '100px'}}>

                                                <div>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Half Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.halfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfHalfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1HalfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2HalfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chairperosn's Appproval -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalHalfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Year1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by HoD -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.hodReviewYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by External -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.externalReviewYear1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1Year1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2Year1}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chairperson's Approval / Forward to FHDC -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalYear1}</span>
                                                    </span>
                                                </div>

                                            </div>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={subExpanded === 'subPanel2'} onChange={handleSubChange('subPanel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="year2Content"
                                            id='year2'
                                        >
                                            <h5 style={{fontWeight: 'bolder'}}>Year 2</h5>
                                        </AccordionSummary>

                                        <AccordionDetails>

                                            <div style={{marginLeft: '100px'}}>

                                                <div>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Half Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.halfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfHalfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1HalfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2HalfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chair[erosn's Appproval -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalHalfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Year2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by HoD -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.hodReviewYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by External -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.externalReviewYear2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1Year2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2Year2}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chairperson's Approval / Forward to FHDC -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalYear2}</span>
                                                    </span>
                                                </div>

                                            </div>
                                        </AccordionDetails>

                                    </Accordion>


                                    <Accordion expanded={subExpanded === 'subPanel3'} onChange={handleSubChange('subPanel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="year3Content"
                                            id='year3'
                                        >
                                            <h5 style={{fontWeight: 'bolder'}}>Year 3</h5>
                                        </AccordionSummary>

                                        <AccordionDetails>

                                            <div style={{marginLeft: '100px'}}>

                                                <div>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Half Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.halfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfHalfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1HalfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2HalfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chairperosn's Appproval -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalHalfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Yearly -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Year3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Report Submitted to PG Office -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by HoD -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.hodReviewYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by External -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.externalReviewYear3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 1 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review1Year3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Examiner 2 -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.Review2Year3}</span>
                                                    </span>
                                                </div>

                                                <div style={{marginTop: '20px'}}>
                                                    <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>HoD / Chairperson's Approval / Forward to FHDC -  
                                                        <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.approvalYear3}</span>
                                                    </span>
                                                </div>

                                            </div>
                                        </AccordionDetails>

                                    </Accordion>

                                    
                                </AccordionDetails>
                            </Accordion>



                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="thesisSubmissionContent"
                                    id='thesisSubmission'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Thesis Submission</h3>
                                </AccordionSummary>

                                <AccordionDetails>

                                    <div style={{marginLeft: '100px'}}>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date of Draft Thesis Submission (PG Office) -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfThesis}</span>
                                            </span>
                                        </div>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted  by HoD -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.hodThesisReview}</span>
                                            </span>
                                        </div>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by External -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.thesisReviewExternal}</span>
                                            </span>
                                        </div>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internal Exminer 1 -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.thesisReviewInternal1}</span>
                                            </span>
                                        </div>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Review Submitted by Internl Examiner 2 -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.thesisReviewInternal2}</span>
                                            </span>
                                        </div>

                                        <div style={{marginTop: '20px'}}>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Revisions Approved -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.revisionsApproved}</span>
                                            </span>
                                        </div>

                                    </div>


                                </AccordionDetails>

                            </Accordion>


                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="thesisSubmittedtContent"
                                    id='thesisSubmittedToAR'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Theiss Submitted To AR</h3>
                                </AccordionSummary>

                                <AccordionDetails>

                                    <div style={{marginLeft: '100px'}}>

                                        <div>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Thesis Submitted to AR -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.thesisToAR}</span>
                                            </span>
                                        </div>
                                    </div>
                                </AccordionDetails>

                            </Accordion>



                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="effectiveDateContent"
                                    id='effectiveDateOfDegree'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Effective Date Of Degree</h3>
                                </AccordionSummary>

                                <AccordionDetails>

                                    <div style={{marginLeft: '100px'}}>

                                        <div>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Effective Date of Degree -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.effectiveDate}</span>
                                            </span>
                                        </div>
                                    </div>
                                </AccordionDetails>

                            </Accordion>


                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="completionDateContent"
                                    id='dateOfCompletion'
                                >
                                    <h3 style={{fontWeight: 'bolder'}}>Date Of Completion</h3>
                                </AccordionSummary>

                                <AccordionDetails>

                                    <div style={{marginLeft: '100px'}}>

                                        <div>
                                            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Date Of Completion -  
                                                <span style={{fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace'}}> {state.dateOfCompletion}</span>
                                            </span>
                                        </div>
                                    </div>
                                </AccordionDetails>

                            </Accordion>

                            



                            
                        </div>
                        

                    </CardContent>
                </Card>
            </div>
        </div>


    );


};



export default StudentDashboard;