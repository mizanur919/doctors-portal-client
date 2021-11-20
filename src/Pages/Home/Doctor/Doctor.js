import { Grid } from '@mui/material';
import React, { useState } from 'react';

const Doctor = ({ doctor }) => {
    const { name, image, email } = doctor;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                < img style={{ width: '300px', height: 'auto' }
                } src={`data:image/jpeg;base64,${image}`} alt="" />
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
            </Grid >
        </>
    );
};

export default Doctor;