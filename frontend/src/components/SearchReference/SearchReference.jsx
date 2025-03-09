// src/components/SearchReference.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchReference = () => {
    const [routeNumber, setRouteNumber] = useState('');
    const [reference, setReference] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://refnosfinder.azurewebsites.net/api/v1/reference/${routeNumber}`);
            setReference(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Reference not found');
            setReference(null);
        }
    };

    return (
        <div>
            <h2>Search Reference by Route Number</h2>
            <div>
                <label>Route Number:</label>
                <input
                    type="text"
                    value={routeNumber}
                    onChange={(e) => setRouteNumber(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {message && <p>{message}</p>}
            {reference && (
                <div>
                    <h3>Reference Details</h3>
                    <p>Reference Number: {reference.referenceNumber}</p>
                    <p>Route Number: {reference.routeNumber}</p>
                </div>
            )}
        </div>
    );
};

export default SearchReference;