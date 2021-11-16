import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 500
}

const Banner = () => {
    return (
        <Box style={bannerBackground} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item style={{...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h4">
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, color: 'gray', fontWeight: 300, my: 4 }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dicta assumenda a itaque aperiam officiis, illum eligendi quae nostrum dignissimos fugiat recusandae nobis quibusdam iure dolor. Fugit repudiandae cum veniam porro iure deleniti quisquam iste minima perspiciatis, optio, sunt possimus.
                            </Typography>
                            <Button variant="contained">Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: 350 }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;