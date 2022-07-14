import { Card } from '@mui/material';                       // Import from Material UI
import React, { useRef, useState, Component } from 'react'; // Import React elements
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';


// Import Delete Icon
import DeleteIcon from '@mui/icons-material/Delete';


// Uploadin Image configuration
import { ImageConfig } from '../../config/ImageConfig'; 


// Uploading Styles
import '../../styles/drop-file-input.css';

// Upload Image
import uploadImg from '../../assets/cloud-upload-regular-240.png';





//////////////////////////////////////////////////////////////////////////////////////////////
// File Frop to input

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    // progress
    const [percent, setPercent] = useState(0);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////
    // File remove Function

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    return (

        <Card variant="outlined" style={{width: '800px' , boxShadow: 'none', padding: '20px'}}>
            
            <div className='text-center'>
                <h3 style={{fontWeight: 'lighter'}}>Upload your 3 Months Report</h3>
            </div>

            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <LinearProgress variant="determinate" value='25' style={{height: '15px', borderRadius: '10px'}}/>
            </div>


            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                style={{alignContent: 'center', alignItems:'center', justifyContent: 'center', justifyItems: 'center'}}
            >
                
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your Files Here</p>
                </div>

                <input type="file" value="" onChange={onFileDrop}/>
                
            </div>


            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">

                        
                        <div className='text-center'>
                            <p className="drop-file-preview__title" style={{fontSize: '20px'}}>
                                Ready to Upload
                            </p>
                        </div>
                       

                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">

                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />

                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>

                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}
                                        style={{fontSize: '30px', fontWeight: 'bolder', backgroundColor: 'red', color: 'white'}}
                                    >
                                        X
                                        {/* <svg data-testid="DeleteIcon"></svg> */}
                                    </span>

                                </div>
                            ))
                        }
                    </div>

                ) : null
            }

            <div className='text-center' style={{marginTop: '30px'}}>

                <Button variant="contained" size="large">Submit</Button>

                {/* <p>{percent} % done</p> */}
            </div>


        </Card>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;

/*

render() { 
        return (  

            <Card style={{width: '500px'}}>

                <div>
                    <h3 style={{ fontFamily: 'monospace'}}>Upload your 3 Months Report</h3>
                </div>

                <div>
                    <LinearProgress variant="determinate" value="25" style={{height: '15px'}}/>
                </div>

                <CardContent>

                    

                </CardContent>


                <CardActions>
                    
                    <Button variant="contained" color="success">Submit</Button>

                </CardActions>

            </Card>

        );
    };



*/