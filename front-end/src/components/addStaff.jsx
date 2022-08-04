import { Card, CardContent, OutlinedInput, TextField, MenuItem, Button } from '@mui/material';
import React from 'react';

function AddStaff () {

    const [role, setRole] = React.useState('admin');

    const handleChange = (event) => {
        setRole(event.target.value);
      };


    const roles = [
        {
            value: 'admin',
            label: 'Admin'
        },

        {
            value: 'supervisor',
            label: 'Supervisor'
        },

        {
            value: 'examiner',
            label: 'Examiner'
        }
    ]
    

    return(
        

        <Card style={{width: '1000px'}}>

            <CardContent>

                <div className='text-center'>

                    <h1
                    style={{
                        fontWeight: 'lighter'
                    }}
                    >
                        Add Staff Member
                    </h1>


                </div>

                <div style={{marginTop: '25px'}}>

                    <h3 style={{
                        fontWeight: 'lighter',
                        marginBottom: '15px'
                    }}>
                        Name of the Staff Member
                    </h3>

                        <TextField id="outlined-basic" label='Name of the Staff Member' variant="outlined"
                            style={{width: '400px'}}
                        />
                        
                </div>

                <div style={{marginTop: '25px'}}>

                        <h3
                            style={{
                                fontWeight: 'lighter',
                                marginBottom: '15px'
                            }}
                        >
                            E-Mail Address of the Staff Member
                        </h3>

                        <TextField id="outlined-basic" label='E-Mail of the Staff Member' variant="outlined" 
                            style={{width: '400px'}}
                        />
                        
                </div>


                <div style={{marginTop: '25px'}}>
                
                <h3
                    style={{
                        fontWeight: 'lighter',
                        marginBottom: '15px'
                    }}
                >
                    Select Role
                </h3>

                <TextField

                    id="outlined-select-currency"
                    select
                    label="Select Role"
                    value={role}
                    onChange={handleChange}
                    helperText="Select Role of the Staff Member"
                    >

                    {roles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                        
                </div>

                <div style={{marginTop: '20px'}}>

                   <Button variant='contained' color='success'>SUBMIT</Button>
                </div>



            </CardContent>
        </Card>
    );
}

export default AddStaff;