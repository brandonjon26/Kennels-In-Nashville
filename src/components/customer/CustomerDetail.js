import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { customerId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", customerId)
        getCustomerById(customerId)
            .then(customer => {
                setCustomer({
                    name: customer.name,
                    address: customer.address
                });
                setIsLoading(false);
            });
    }, [customerId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteCustomer(customerId).then(() =>
          history.push("/customers")
        );
      };

    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__breed">{customer.address}</div>
            <div className="customer__location">Location: {customer.address?.name}</div>
            <div className="customer__owner">Customer: {customer.customer?.name}</div>
            <Link to={`/customers/`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </section>
    );
}