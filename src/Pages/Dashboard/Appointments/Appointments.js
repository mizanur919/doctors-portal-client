import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const appDate = new Date(date).toLocaleDateString();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const url = `http://nameless-anchorage-22303.herokuapp.com/appointments?email=${user.email}&date=${appDate}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [appDate, token, user.email])
    return (
        <div>
            <h2>Total Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">Patient Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Service Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Time</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((singleAppointment) => (
                            <TableRow
                                key={singleAppointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {singleAppointment.patientName}
                                </TableCell>
                                <TableCell align="center">{singleAppointment.serviceName}</TableCell>
                                <TableCell align="center">{singleAppointment.time}</TableCell>
                                <TableCell align="center">{singleAppointment.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;