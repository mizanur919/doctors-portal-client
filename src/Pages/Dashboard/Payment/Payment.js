import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwkEDKNlxTXnL7Vtn3Jc8FATjP1zEg4lDf7cLQFULg6SylmgvyNQvc6v0g7JYoQrR9QGoID9sK6X3xuH8femwUB00YavrhKZh');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Payment for: {appointment.serviceName}</h2>
            <h3>Patient Name: {appointment.patientName}</h3>
            <h4>Price: ${appointment.price}</h4>

            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }

        </div>
    );
};

export default Payment;

/*
    1. install stripe and stripe-react
    2. set publishable key
    3. Elements component
    4. checkoutform
    =================
    5. Create payment method
    6.

*/