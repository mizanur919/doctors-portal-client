import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ timeSlot, date, setBookingSuccess }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const { name, time, space } = timeSlot;

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 300 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} {space > 1 ? 'Spaces' : 'Space'} Available
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{ my: 2 }} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                openBooking = {openBooking}
                handleBookingClose = {handleBookingClose}
                timeSlot = {timeSlot}
                date = {date}
                setBookingSuccess = {setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;