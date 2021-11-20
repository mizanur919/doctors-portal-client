import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;