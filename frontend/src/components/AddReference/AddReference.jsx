// src/components/AddReference.js
import React, { useState } from 'react';
import axios from 'axios';

const AddReference = () => {
    const [referenceNumber, setReferenceNumber] = useState('');
    const [routeNumber, setRouteNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/references', {
                referenceNumber,
                routeNumber
            });
            setMessage('Reference added successfully!');
            setReferenceNumber('');
            setRouteNumber('');
        } catch (error) {
            setMessage('Error adding reference');
        }
    };

    return (
        <div>
            <h2>Add Reference</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Reference Number:</label>
                    <input
                        type="text"
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Route Number:</label>
                    <input
                        type="text"
                        value={routeNumber}
                        onChange={(e) => setRouteNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Reference</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddReference;