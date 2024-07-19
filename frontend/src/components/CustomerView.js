import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CustomerView() {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/customers/${id}`)
        .then(response => setCustomer(response.data))
        .catch(error => console.error('There was an error fetching the customer!', error));
    }, [id]);

    if (!customer) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1>Customer Details</h1>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{customer.first_name}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{customer.last_name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{customer.email}</td>
                    </tr>
                    <tr>
                        <th>Contact Number</th>
                        <td>{customer.contact_number}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerView;
