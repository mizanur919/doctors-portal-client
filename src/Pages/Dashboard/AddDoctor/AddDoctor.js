import { TextField, Input, Button } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>This is Doctor Page</h2>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    sz={{ width: '50%' }}
                    label="Name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                    required
                />
                <TextField
                    sz={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                    required
                />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {success && <p>Doctor added successfully</p>}
        </div>
    );
};

export default AddDoctor;