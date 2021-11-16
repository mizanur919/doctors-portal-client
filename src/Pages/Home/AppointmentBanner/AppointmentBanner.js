import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: '100px',
    backgroundColor: 'rgba(45, 58, 74, .9)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-120px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }} style={{ color: 'white', textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h6">
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ mb: 2, mt: 3 }}>
                                Make An Appointment <br /> Today
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 5 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sequi quidem nisi quo ex harum, soluta itaque illo repellat quisquam!
                            </Typography>
                            <Button variant="contained">
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;