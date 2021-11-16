import React, { useState } from 'react';
import Navigation from '../../../Pages/Shared/Navigation/Navigation'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate= {setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;