import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, timeSlot, date, setBookingSuccess }) => {
    const { name, time, space } = timeSlot;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleBookingSubmit = e => {
        // Collect Data and Send to the server
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: new Date(date).toLocaleDateString()
        }
        fetch('http://nameless-anchorage-22303.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                setBookingSuccess(true);
                handleBookingClose();
            }
        })

        e.preventDefault();
    }

    // Handle onBlur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '100%', my: 2 }}
                            disabled
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 2 }}
                            label="Your Name"
                            id="outlined-size-small"
                            onBlur={handleOnBlur}
                            name="patientName"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 2 }}
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                            id="outlined-size-small"
                            onBlur={handleOnBlur}
                            name="phone"
                            defaultValue=''
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', mb: 2 }}
                            label="Date"
                            id="outlined-size-small"
                            defaultValue={date.toLocaleDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade >
        </Modal >
    );
};

export default BookingModal;