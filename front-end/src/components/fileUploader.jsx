import { Card, CardContent } from '@mui/material';
import React from 'react';



function FileUploader() {



    return(
        <Card style={{width: '1000px'}}>
            <CardContent>
            <div className="container">

                    <div className="row"> 
                    
                        <h1 style={{fontWeight: 'lighter'}}>Upload Your Submission</h1>  

                        <div className="col-lg-12">  

                            <div className="card" style={{marginTop: '25px'}}>  

                                <div className="card-header">  
                                    <div class="float-left"> <strong>Upload your Submission Here </strong> </div>  
                                </div> 

                                <div className="card-body card-block"> 

                                    <form enctype="multipart/form-data" className="form-horizontal"> 

                                        <div className="row form-group"> 

                                            <div className="col-12 col-md-12">

                                                <div className="control-group" id="fields">

    

                                                    <div className="controls">  

                                                        <div className="entry input-group upload-input-group">  
                                                            <input className="form-control" name="file" type="file"/> 
                                                        </div>  

                                                    </div>  

                                                    <button style={{marginTop: '25px'}} className="btn btn-primary">Upload</button>
                                                      
                                                
                                                </div> 

                                            </div>  
                                        </div>  
                                    </form>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>
            </CardContent>
            </Card>  
        
    )
}

export default FileUploader;