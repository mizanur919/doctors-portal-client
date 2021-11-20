import { Container, Grid, Typography, Alert } from '@mui/material';
import React, {useState} from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        price: 25,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 28,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 30,
        space: 5,
    },
    {
        id: 4,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 32,
        space: 10,
    },
    {
        id: 5,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.30 PM',
        price: 34,
        space: 9,
    },
    {
        id: 6,
        name: 'Whitening',
        time: '09.00 PM - 10.00 PM',
        price: 22,
        space: 1,
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container sx={{my: 4}}>
            <Typography variant="h4" sx={{my: 4, color: 'info.main', fontSize: '26px'}}>Available Appointment On: {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(timeSlot => <Booking
                        key={timeSlot.id}
                        timeSlot={timeSlot}
                        date = {date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;