import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const showDoctors = async () => {
        try {
            await fetch('http://localhost:5000/doctors')
                .then(res => res.json())
                .then(data => setDoctors(data))
            setIsLoading(true);
        }
        catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        showDoctors();
    }, [])

    return (
        <Container>
            <h3>Doctors: {doctors.length}</h3>
            <Grid container spacing={2}>
                {
                    isLoading
                        ?
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                        :
                        <CircularProgress style={{ textAlign: 'center' }}></CircularProgress>
                }
            </Grid>
        </Container>
    );
};

export default Doctors;