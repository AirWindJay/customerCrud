import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function CustomerUpdate() {
    const { id } = useParams();
    const [customer, setCustomer] = useState({ first_name: '', last_name: '', email: '', contact_number: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/customers/${id}`)
        .then(response => setCustomer(response.data))
        .catch(error => console.error('There was an error fetching the customer!', error));
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({ ...prevCustomer, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/customers/${id}`, customer)
        .then(() => navigate('/'))
        .catch(error => console.error('There was an error updating the customer!', error));
    };

    return (
        <div className="container mt-5">
            <h1>Update Customer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={customer.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={customer.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Contact Number</label>
                    <input
                        type="text"
                        name="contact_number"
                        className="form-control"
                        value={customer.contact_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update Customer</button>
            </form>
        </div>
    );
}

export default CustomerUpdate;
