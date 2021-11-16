import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);
    const {token} = useAuth();
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://nameless-anchorage-22303.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    setMessage(true);
                }
            });
        e.preventDefault();
    }

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                {message && <Alert severity="success">Successfully Added</Alert>}
                <TextField
                    sx={{ width: '50%', marginBottom: '50px' }}
                    id="standard-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    type="email" />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;