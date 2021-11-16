import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import { fontWeight } from '@mui/system';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloremque repudiandae nostrum expedita! Ea obcaecati tenetur consequuntur beatae minima! Sed beatae modi repudiandae vero nulla dolore veritatis delectus recusandae libero.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloremque repudiandae nostrum expedita! Ea obcaecati tenetur consequuntur beatae minima! Sed beatae modi repudiandae vero nulla dolore veritatis delectus recusandae libero.',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloremque repudiandae nostrum expedita! Ea obcaecati tenetur consequuntur beatae minima! Sed beatae modi repudiandae vero nulla dolore veritatis delectus recusandae libero.',
        img: Whitening
    }
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx = {{fontWeight: 500, color: 'primary.main'}} variant="h4" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight: 600, mb: 2}} variant="h6" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;