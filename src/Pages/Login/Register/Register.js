import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import loginImage from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleRegistrationSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registration</Typography>
                    {!isLoading && <form onSubmit={handleRegistrationSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email Address"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Password"
                            onBlur={handleOnBlur}
                            name="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="ReType Your Password"
                            onBlur={handleOnBlur}
                            name="password2"
                            variant="standard" />

                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1 }}>Sign Up</Button>

                        <NavLink to="/login"
                            style={{ textDecoration: 'none' }}
                        ><Button variant="text">Already Registered? Login Now</Button></NavLink>
                    </form>
                    }

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImage} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;