import {Card, CardContent } from '@mui/material';
import React from 'react';
import view from '../images/view.png'


function View() {

    return (
        
        <Card style={{width: '1000px'}}>

            <CardContent>

                <div className='text-center'>
                    <h1>
                        Department Of Computer Engineering
                    </h1>

                    <h1 style={{
                        fontWeight: 'lighter'
                    }}>
                        Faculty of Engineering
                    </h1>

                    <h2 style={{
                        fontWeight: 'lighter'
                    }}>
                        University of Peradeniya
                    </h2>
                </div>

                <div className='text-center' style={{
                    marginTop: '25px'
                }}>
                    <img
                        src={view}
                        alt='uop'
                        width='900px'
                        />
                </div>
                
            </CardContent>
        </Card>
    );
}

export default View;