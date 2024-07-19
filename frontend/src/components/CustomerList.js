import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('There was an error fetching the customers!', error));
    }, []);
    

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Customer List</h1>
            <Link to="/customer/new" className="btn btn-success mb-3">Add New Customer</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.first_name}</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.contact_number}</td>
                            <td>
                                <Link to={`/customer/view/${customer.id}`} className="btn btn-info btn-sm me-2">View</Link>
                                <Link to={`/customer/update/${customer.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                <Link to={`/customer/delete/${customer.id}`} className="btn btn-danger btn-sm">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
