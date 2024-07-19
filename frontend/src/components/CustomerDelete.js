import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function CustomerDelete() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:8000/api/customers/${id}`)
        .then(() => navigate('/'))
        .catch(error => console.error('There was an error deleting the customer!', error));
    }, [id, navigate]);

    return (
        <div>
        <h1>Deleting Customer...</h1>
        </div>
    );
}

export default CustomerDelete;
