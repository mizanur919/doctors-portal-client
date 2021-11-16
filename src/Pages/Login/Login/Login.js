import { Container, Grid, TextField, Typography, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    // Redirect wanted to go
    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

// Handle Google Sign In
const handleGoogleSignIn = () =>{
    signInWithGoogle(location, history);
}
    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Password"
                            onChange={handleOnChange}
                            name="password"
                            variant="standard" />

                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1 }}>Login</Button>

                        <NavLink to="/register"
                            style={{ textDecoration: 'none' }}
                        ><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                    <p>-------------------------------</p>
                    <Button variant="contained" onClick={handleGoogleSignIn}>Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Logged In</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImage} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;