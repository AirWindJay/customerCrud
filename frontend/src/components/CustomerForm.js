import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerForm() {
    const [customer, setCustomer] = useState({ first_name: '', last_name: '', email: '', contact_number: '' });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({ ...prevCustomer, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/customers', customer)
        .then(() => navigate('/'))
        .catch(error => console.error('There was an error creating the customer!', error));
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Add Customer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        value={customer.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control"
                        value={customer.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="contact_number">Contact Number</label>
                    <input
                        type="text"
                        id="contact_number"
                        name="contact_number"
                        className="form-control"
                        value={customer.contact_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Customer</button>
            </form>
        </div>
    );
}

export default CustomerForm;
